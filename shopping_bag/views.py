from django.shortcuts import render, redirect, reverse, HttpResponse

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
    return redirect(redirect_url)


def adjust_quantity(request, item_id):
    # Adjusts quantity of product to shopping bag.

    quantity = int(request.POST.get('quantity'))
    # Retrieves bag items if it exist, if not creates it. 
    bag = request.session.get('bag', {})

    if quantity > 0:
        bag[item_id]= quantity
    else:
        bag.pop(item_id)

    request.session['bag'] = bag
    return redirect(reverse('view_bag'))


def remove_from_bag(request, item_id):
    # Removes Product from Shopping Bag. 

    try:
        quantity = int(request.POST.get('quantity'))
        # Retrieves bag items if it exist, if not creates it. 
        bag = request.session.get('bag', {})

        bag.pop(item_id)

        request.session['bag'] = bag
        return HttpResponse(status=200)
        
    except Exception as e:
        return HttpResponse(Status=500)
