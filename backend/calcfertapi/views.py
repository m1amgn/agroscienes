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
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        try:
            serializer = UserFormDataSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                calculated_concentrations = calculate_concentrations(
                    serializer.data)
                calculated_consumptions = calculate_consumptions(serializer.data)
                serializer_concentrations = CalculatedConcentrationSerializer(data=calculated_concentrations)
                serializer_consumption = CalculatedConsumptionSerializer(data=calculated_consumptions)
                if serializer_concentrations.is_valid() and serializer_consumption.is_valid():
                    serializer_concentrations.save()
                    serializer_consumption.save()
                    calculated_concentrations_data = CalculatedConcentration.objects.all().order_by('-created_timestamp')[:1]
                    calculated_consumptions_data = CalculatedConsumption.objects.all().order_by('-created_timestamp')[:1]
                    serializer_concentrations_data = CalculatedConcentrationSerializer(calculated_concentrations_data, many=True)
                    serializer_consumptions_data = CalculatedConcentrationSerializer(calculated_consumptions_data, many=True)
                    return Response({"concentrations": serializer_concentrations_data.data, "consumptions": serializer_consumptions_data.data}, status=status.HTTP_201_CREATED)
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
