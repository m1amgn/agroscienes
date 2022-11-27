from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json

from .models import Culture, ClimateZone, UserFormData, DefaultElementsConcentration, CalculatedConcentration, CalculatedConsumption
from .serializers import CultureSerializer, ClimateZoneSerializer, UserFormDataSerializer, DefaultElementsConcentrationSerializer, FormSerializer, CalculatedConcentrationSerializer, CalculatedConsumptionSerializer
from .calculator import calculate_concentrations, calculate_consumptions


@api_view(['GET', 'POST'])
def get_form_data(request):
    if request.method == 'GET':
        try:
            culture = Culture.objects.all()
            climate_zone = ClimateZone.objects.all()
            user_form = UserFormData.objects.filter(check_field=True)
            serializer_culture = CultureSerializer(culture, many=True)
            serializer_climate_zone = ClimateZoneSerializer(
                climate_zone, many=True)
            serializer_user_form = FormSerializer(user_form, many=True)
            return Response({"culture": serializer_culture.data, "climate_zone": serializer_climate_zone.data, "user_form": serializer_user_form.data})
        except Exception as e:
            print(e)

    if request.method == 'POST':
        try:
            serializer = UserFormDataSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                calculated_concentrations = calculate_concentrations(
                    serializer.data)
                calculated_consumptions = calculate_consumptions(serializer.data)

                serializer_concentrations = CalculatedConcentrationSerializer(
                    data=calculated_concentrations)
                if serializer_concentrations.is_valid():
                    serializer_concentrations.save()
                    calculated_concentrations_json = json.dumps(
                        calculated_concentrations)
                    print(calculated_concentrations_json)

                serializer_consumption = CalculatedConsumptionSerializer(
                    data=calculated_consumptions)
                if serializer_consumption.is_valid():
                    serializer_consumption.save()
                    calculated_consumptions_json = json.dumps(
                        calculated_consumptions)
                    print(calculated_consumptions_json)

                return Response({"concentrations": calculated_concentrations_json, "consumptions": calculated_consumptions_json}, status=status.HTTP_201_CREATED)
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
