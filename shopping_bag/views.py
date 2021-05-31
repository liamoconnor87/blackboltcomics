from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib import messages

from products.models import Product


# Create your views here.
def view_bag(request):
    # This view renders the shopping bag page.

    return render(request, 'shopping_bag/shopping_bag.html')


def add_to_bag(request, item_id):
    # Add product with specific quantity to shopping bag.

    product = get_object_or_404(Product, pk=item_id)
    quantity = int(request.POST.get('quantity'))
    redirect_url = request.POST.get('redirect_url')

    # Retrieves bag items if it exist, if not creates it.
    bag = request.session.get('bag', {})

    if item_id in list(bag.keys()):
        bag[item_id] += quantity
        messages.success(
            request, f'Updated {product.name} quantity to {bag[item_id]}.'
            )
    else:
        bag[item_id] = quantity
        messages.success(request, f'Added {product.name} to shopping bag.')

    request.session['bag'] = bag
    return redirect(redirect_url)


def adjust_quantity(request, item_id):
    # Adjusts quantity of product to shopping bag.

    product = get_object_or_404(Product, pk=item_id)
    quantity = int(request.POST.get('quantity'))

    # Retrieves bag items if it exist, if not creates it.
    bag = request.session.get('bag', {})

    if quantity > 0:
        bag[item_id] = quantity
        messages.success(
            request, f'Updated {product.name} quantity to {bag[item_id]}.'
            )
    else:
        bag.pop(item_id)
        messages.success(request, f'Removed {product.name} from shopping bag.')

    request.session['bag'] = bag
    return redirect(reverse('view_bag'))


def remove_from_bag(request, item_id):
    # Removes Product from Shopping Bag.

    product = get_object_or_404(Product, pk=item_id)
    bag = request.session.get('bag', {})
    bag.pop(item_id)
    messages.success(request, f'Removed {product.name} from shopping bag.')

    request.session['bag'] = bag
    return redirect(reverse('view_bag'))
