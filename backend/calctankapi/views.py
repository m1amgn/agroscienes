from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json

from .models import UserFormData
from .serializers import UserFormDataSerializer

@api_view(['GET', 'POST'])
def get_form_data(request):
    if request.method == 'GET':
        try:
            user_form = UserFormData.objects.filter(check_field=True)
            serializer_user_form = UserFormDataSerializer(user_form, many=True)
            return Response({"user_form": serializer_user_form.data})
        except Exception as e:
            print(e)

  