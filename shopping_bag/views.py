from django.shortcuts import render

# Create your views here.
def view_bag(request):
    # This view renders the shopping bag page

    return render(request, 'shopping_bag/shopping_bag.html')