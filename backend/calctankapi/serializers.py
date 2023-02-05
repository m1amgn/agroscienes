from dataclasses import fields
from rest_framework import serializers
from .models import UserFormData


class UserFormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFormData
        fields = ('quantity_of_ha', 'volume_of_water_tank', 'volume_of_mixer_tank', 'quantity_of_mixture', 'current_hardness', 'planing_hardness', 'current_pH',
                  'pesticide_1', 'form_pesticide_1', 'consumption_pesticide_1', 'price_pesticide_1', 'pesticide_2', 'form_pesticide_2', 'consumption_pesticide_2', 'price_pesticide_2', 
                  'pesticide_3', 'form_pesticide_3', 'consumption_pesticide_3', 'price_pesticide_3', 'complex_fertilizer', 'consumption_complex_fertilizer', 'price_complex_fertilizer',
                  'sas', 'consumption_sas', 'price_sas')