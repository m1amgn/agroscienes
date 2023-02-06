from django.urls import path

from .views import get_form_data

urlpatterns = [
    path('calctankapi/', get_form_data)
]
