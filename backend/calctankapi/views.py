from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


from .models import UserFormData, FieldRecipe, TankRecipe, TestSolution, CostsOnField, CostsOnHa
from .serializers import UserFormDataSerializer, FieldRecipeSerializer, TankRecipeSerializer, TestSolutionSerializer, CostsOnFieldSerializer, CostsOnHaSerializer
from .calculator import recipe_on_field_calculation, recipe_on_tank_calculation, test_solution_calculation, costs_on_field_calculation, costs_on_ha_calculation


@api_view(['GET', 'POST'])
def get_form_data(request):
    if request.method == 'GET':
        try:
            user_form = UserFormData.objects.filter(check_field=True)
            serializer_user_form = UserFormDataSerializer(user_form, many=True)
            return Response({"user_form": serializer_user_form.data})
        except Exception as e:
            print(e)

    if request.method == 'POST':
        try:
            serializer = UserFormDataSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                recipe_on_field_calculated = recipe_on_field_calculation(
                    serializer.data)
                recipe_on_tank_calculated = recipe_on_tank_calculation(
                    serializer.data)
                test_solution_calculated = test_solution_calculation(
                    serializer.data)
                costs_on_field_calculated = costs_on_field_calculation(
                    serializer.data)
                costs_on_ha_calculated = costs_on_ha_calculation(
                    serializer.data)
                serializer_recipe_on_field_calculated = FieldRecipeSerializer(
                    data=recipe_on_field_calculated)
                serializer_recipe_on_tank_calculated = TankRecipeSerializer(
                    data=recipe_on_tank_calculated)
                serializer_test_solution_calculated = TestSolutionSerializer(
                    data=test_solution_calculated)
                serializer_costs_on_field_calculated = CostsOnFieldSerializer(
                    data=costs_on_field_calculated)
                serializer_costs_on_ha_calculated = CostsOnHaSerializer(
                    data=costs_on_ha_calculated)
                if serializer_recipe_on_field_calculated.is_valid() and serializer_recipe_on_tank_calculated.is_valid() and serializer_test_solution_calculated.is_valid() and serializer_costs_on_field_calculated.is_valid() and serializer_costs_on_ha_calculated.is_valid():
                    serializer_recipe_on_field_calculated.save()
                    serializer_recipe_on_tank_calculated.save()
                    serializer_test_solution_calculated.save()
                    serializer_costs_on_field_calculated.save()
                    serializer_costs_on_ha_calculated.save()
                    calculated_recipe_on_field_data = FieldRecipe.objects.all().order_by(
                        '-created_timestamp')[:1]
                    calculated_recipe_on_tank_data = TankRecipe.objects.all().order_by(
                        '-created_timestamp')[:1]
                    calculated_test_solution_data = TestSolution.objects.all().order_by(
                        '-created_timestamp')[:1]
                    calculated_costs_on_field_data = CostsOnField.objects.all().order_by(
                        '-created_timestamp')[:1]
                    calculated_costs_on_ha_data = CostsOnHa.objects.all().order_by(
                        '-created_timestamp')[:1]
                    serializer_calculated_recipe_on_field_data = FieldRecipeSerializer(
                        calculated_recipe_on_field_data, many=True)
                    serializer_calculated_recipe_on_tank_data = TankRecipeSerializer(
                        calculated_recipe_on_tank_data, many=True)
                    serializer_calculated_test_solution_data = TestSolutionSerializer(
                        calculated_test_solution_data, many=True)
                    serializer_calculated_costs_on_field_data = CostsOnFieldSerializer(
                        calculated_costs_on_field_data, many=True)
                    serializer_calculated_costs_on_ha_data = CostsOnHaSerializer(
                        calculated_costs_on_ha_data, many=True)
                    return Response({"recipe_on_field": serializer_calculated_recipe_on_field_data.data,
                                     "recipe_on_tank": serializer_calculated_recipe_on_tank_data.data,
                                     "test_solution": serializer_calculated_test_solution_data.data,
                                     "costs_on_field": serializer_calculated_costs_on_field_data.data,
                                     "costs_on_ha": serializer_calculated_costs_on_ha_data.data},
                                    status=status.HTTP_201_CREATED)
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
