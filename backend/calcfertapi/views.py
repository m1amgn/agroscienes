from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Culture, ClimateZone, UserFormData, DefaultElementsConcentration, CalculatedConcentration, CalculatedConsumption 
from .serializers import CultureSerializer, ClimateZoneSerializer, UserFormDataSerializer, DefaultElementsConcentrationSerializer, FormSerializer, CalculatedConcentrationSerializer, CalculatedConsumptionSerializer
from .calculator import calculate_concentrations, calculate_consumptions


@api_view(['GET', 'POST'])
def get_form_data(request):
    if request.method == 'GET':
        culture = Culture.objects.all()
        climate_zone = ClimateZone.objects.all()
        user_form = UserFormData.objects.filter(check_field=True)
        serializer_culture = CultureSerializer(culture, many=True)
        serializer_climate_zone = ClimateZoneSerializer(climate_zone, many=True)
        serializer_user_form = FormSerializer(user_form, many=True)
        return Response({"culture": serializer_culture.data, "climate_zone": serializer_climate_zone.data, "user_form": serializer_user_form.data})

    if request.method == 'POST':
        serializer = UserFormDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            print(type(serializer.data))
            print(serializer.data['culture'])
            for key, value in serializer.data.items():
                print(f'{key}-{value}')
            # calculate_concentrations(serializer.data)
            calculate_consumptions(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)