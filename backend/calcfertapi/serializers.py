from dataclasses import fields
from rest_framework import serializers
from .models import Culture, ClimateZone, UserFormData, DefaultElementsConcentration, CalculatedData


class CultureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Culture
        fields = ('culture',)


class ClimateZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClimateZone
        fields = ('climate_zone',)


class UserFormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFormData
        fields = ('culture', 'climate_zone', 'quantity_of_water', 'temperature', 'productivity', 'N', 'P',
                  'K', 'Mg', 'S', 'Ca', 'Fe', 'Mn', 'Zn', 'Cu', 'B', 'Mo', 'Co', 'Ni', 'Se')


class DefaultElementsConcentrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DefaultElementsConcentration
        fields = ('N', 'P', 'K', 'Mg', 'S', 'Ca', 'Fe', 'Mn',
                  'Zn', 'Cu', 'B', 'Mo', 'Co', 'Ni', 'Se')


class CalculatedDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalculatedData
        fields = ('N', 'P', 'K', 'Mg', 'S', 'Ca', 'Fe', 'Mn', 'Zn',
                  'Cu', 'B', 'Mo', 'Co', 'Ni', 'Se', 'created_timestamp')
