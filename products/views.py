from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib import messages
from django.db.models import Q
from .models import Product, Category

# Create your views here.
def all_products(request):
    # This view renders products, sorting and searches.

    products = Product.objects.all()
    query = None
    categories = None

    if request.GET:
        
        # Products Menu.
        if 'category' in request.GET:
            categories = request.GET['category'].split(',')
            products = products.filter(category__name__in=categories)
            categories = Category.objects.filter(name__in=categories)

        if 'product-query' in request.GET:
            query = request.GET['product-query']
            if not query:
                # messages.error(request, "you didnt enter any search criteria!")
                return redirect(reverse('index'))

            queries = Q(publisher__icontains=query)
            products = products.filter(queries)

        if 'accessory-query' in request.GET:
            query = request.GET['accessory-query']
            if not query:
                # messages.error(request, "you didnt enter any search criteria!")
                return redirect(reverse('index'))

            queries = Q(name__icontains=query)
            products = products.filter(queries)

        # Search Bar.
        if 'search-query' in request.GET:
            query = request.GET['search-query']
            if not query:
                # messages.error(request, "you didnt enter any search criteria!")
                return redirect(reverse('index'))

            queries = Q(name__icontains=query) | Q(description__icontains=query) | Q(publisher__icontains=query) | Q(writer__icontains=query) | Q(artist__icontains=query) | Q(manufacturer__icontains=query)
            products = products.filter(queries)

            

    context = {
        'products': products,
        'search_term': query,
        'current_categories': categories,
    }

    return render(request, 'products/products.html', context)


def product_detail(request, product_id):
    # This view renders an individual product with detail.

    product = get_object_or_404(Product, pk=product_id)

    context = {
        'product': product,
    }

    return render(request, 'products/product_detail.html', context)