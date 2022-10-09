from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Culture, ClimateZone, UserFormData, DefaultElementsConcentration, CalculatedData
from .serializers import CultureSerializer, ClimateZoneSerializer, UserFormDataSerializer, DefaultElementsConcentrationSerializer, CalculatedDataSerializer


@api_view(['GET', 'POST'])
def get_form_data(request):
    if request.method == 'GET':
        culture = Culture.objects.all()
        climate_zone = ClimateZone.objects.all()
        default_concentrations = DefaultElementsConcentration.objects.all()
        serializer_culture = CultureSerializer(culture, many=True)
        serializer_climate_zone = ClimateZoneSerializer(
            climate_zone, many=True)
        serializer_default_concentrations = DefaultElementsConcentrationSerializer(
            default_concentrations, many=True)
        return Response({'culture': serializer_culture.data, 'climate_zone': serializer_climate_zone.data, 'default_concentrations': serializer_default_concentrations.data})

    if request.method == 'POST':
        serializer = UserFormDataSerializer(data=request.data)
        print(request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
