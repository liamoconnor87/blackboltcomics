from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

from checkout.webhook_handler import StripeWH_Handler

import stripe


# Listens for webhooks from Stripe.
@require_POST
@csrf_exempt
def webhook(request):

    # Setup
    wh_secret = settings.STRIPE_WH_SECRET
    stripe.api_key = settings.STRIPE_SECRET_KEY

    # Gets the webhook data and verifies its signature.
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, wh_secret
        )
    except ValueError as e:
        # Invalid payload.
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature.
        return HttpResponse(status=400)
    except Exception as e:
        return HttpResponse(content=e, status=400)

    # Webhook handler.
    handler = StripeWH_Handler(request)

    # Maps webhook to relevent handler function.
    event_map = {
        'payment_intent.succeeded': handler.handle_payment_intent_succeeded,
        'payment_intent.payment_failed': handler.handle_payment_intent_payment_failed,
    }

    # Get webhook type from stripe.
    event_type = event['type']

    # If handler for it, get from event map - use generic one by default.
    event_handler = event_map.get(event_type, handler.handle_event)

    # Calls the event handler with the event.
    response = event_handler(event)
    return response
