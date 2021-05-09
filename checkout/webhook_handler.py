from django.http import HttpResponse


# Handles Stripe Webhooks.
class StripeWH_Handler:

    def __init__(self, request):
        self.request = request

    def handle_event(self, event):
        # Handles webhook event - error/unknown/generic.
        return HttpResponse(
            content=f'Unhandled webhook recieved: {event["type"]}',
            status=200)

    def handle_payment_intent_succeeded(self, event):
        # Handles webhook event - payment_intent.succeeded.
        return HttpResponse(
            content=f'Webhook recieved: {event["type"]}', status=200
        )

    def handle_payment_intent_payment_failed(self, event):
        # Handles webhook event - payment_failed.succeeded.
        return HttpResponse(
            content=f'Webhook recieved: {event["type"]}',
            status=200)
