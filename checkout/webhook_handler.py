from django.http import HttpResponse


class StripeWH_Handler:
    # Handles Stripe Webhooks.

    def __init__(self, request):
        self.request = request

    def handle_event(self, event):
        # Handles webhook event - error/unknown/generic.
        return HttpResponse(
            content = f'Webhook recieved: {event["type"]}', status=200
        )