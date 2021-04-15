from django.urls import path

from . import views

urlpatterns = [
    path('', views.view_bag, name='view_bag'),
    path('add/<item_id>', views.add_to_bag, name='add_to_bag'),
    path('adjust/<item_id>', views.adjust_quantity, name='adjust_quantity'),
    path('remove/<item_id>', views.remove_product_from_bag, name='remove_product_from_bag'),
]