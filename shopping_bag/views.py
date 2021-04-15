from django.shortcuts import render, redirect

# Create your views here.
def view_bag(request):
    # This view renders the shopping bag page.

    return render(request, 'shopping_bag/shopping_bag.html')


def add_to_bag(request, item_id):
    # Add product with specific quantity to shopping bag.

    quantity = int(request.POST.get('quantity'))
    redirect_url = request.POST.get('redirect_url')
    
    # Retrieves bag items if it exist, if not creates it. 
    bag = request.session.get('bag', {})

    if item_id in list(bag.keys()):
        bag[item_id] += quantity
    else:
        bag[item_id] = quantity

    request.session['bag'] = bag
    print(request.session['bag'])
    return redirect(redirect_url)
