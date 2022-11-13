import json
from django.core import serializers

from .models import ElementsConsumption



COEFFICIENT = float(40 * 1.4 * 0.1 * 100 / (100 - 26.5) * 0.15)
'''
40 - hD average layer depth cm
1.4 - average density g/cm3
26.5 - average moisture %
0.15 - average availability of elements
'''

def calculate_concentrations(form_data):
    form_data = form_data
    calculated_concentrations_dict = {}
    print(f'Это из функции калькулятора до {form_data}')
    try:
        for key, values in form_data.items():
            if key == "culture" or key == "climate_zone" or key == "quantity_of_water" or key == "temperature" or key == "productivity":
                pass
            else:
                values = round(float(values) * COEFFICIENT, 2)
                calculated_concentrations_dict[key] = values
        print(f'Это из функции калькулятора после {calculated_concentrations_dict}')
        return calculated_concentrations_dict
    except Exception as e:
        print(e)
        
def calculate_consumptions(form_data):
    form_data = form_data
    calculated_consumptions_dict = {}
    print(f'Это из функции калькулятора до {form_data}')
    try:
        obj = ElementsConsumption.objects.filter(culture__culture=form_data['culture']).values()
        # obj_json = serializers.serialize("json", obj)
        # obj_dict = json.loads(obj_json)
        print(obj.query)
        print(type(obj))
        for key, values in obj_dict.items():
            values = round(float(values) * form_data['productivity'], 2)
            calculated_consumptions_dict[key] = values
        print(f'Это из функции калькулятора после {calculated_consumptions_dict}')
        return calculated_consumptions_dict
    except Exception as e:
        print(e)