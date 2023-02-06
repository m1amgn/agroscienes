from dataclasses import fields
from rest_framework import serializers
from .models import UserFormData, FieldRecipe, TankRecipe, TestSolution, CostsOnField, CostsOnHa, Prices


class UserFormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFormData
        fields = ('quantity_of_ha', 'volume_of_water_tank', 'volume_of_mixer_tank', 'quantity_of_mixture', 'current_hardness', 'planing_hardness', 'decrease_pH',
                  'pesticide_1', 'form_pesticide_1', 'consumption_pesticide_1', 'price_pesticide_1', 'pesticide_2', 'form_pesticide_2', 'consumption_pesticide_2', 'price_pesticide_2', 
                  'pesticide_3', 'form_pesticide_3', 'consumption_pesticide_3', 'price_pesticide_3', 'complex_fertilizer', 'consumption_complex_fertilizer', 'price_complex_fertilizer',
                  'sas', 'consumption_sas', 'price_sas')
        
class FieldRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FieldRecipe
        fields = ('quantity_of_RO260', 'quantity_of_RO203', 'quantity_of_pesticide_1', 'quantity_of_pesticide_2', 'quantity_of_pesticide_3', 'quantity_of_sas', 'quantity_of_complex_fertilize')
        
class TankRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TankRecipe
        fields = ('quantity_of_RO260', 'quantity_of_RO203', 'quantity_of_pesticide_1', 'quantity_of_pesticide_2', 'quantity_of_pesticide_3', 'quantity_of_sas', 'quantity_of_complex_fertilize')
        
class TestSolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestSolution
        fields = ('quantity_of_RO260', 'quantity_of_RO203', 'quantity_of_pesticide_1', 'quantity_of_pesticide_2', 'quantity_of_pesticide_3', 'quantity_of_sas', 'quantity_of_complex_fertilize')
        
class CostsOnFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = CostsOnField
        fields = ('costs_of_RO260', 'costs_of_RO203', 'costs_of_pesticide_1', 'costs_of_pesticide_2', 'costs_of_pesticide_3', 'costs_of_sas', 'costs_of_complex_fertilize')
        
class CostsOnHaFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = CostsOnHa
        fields = ('costs_of_RO260', 'costs_of_RO203', 'costs_of_pesticide_1', 'costs_of_pesticide_2', 'costs_of_pesticide_3', 'costs_of_sas', 'costs_of_complex_fertilize')
        
