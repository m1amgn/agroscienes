from .models import DefaultElementsConcentration, ElementsConsumption

COEFFICIENT = float(40 * 1.4 * 0.1 * 100 / (100 - 26.5) * 0.15)

'''
40 - hD average layer depth cm
1.4 - average density g/cm3
26.5 - average moisture %
0.15 - average availability of elements
'''

def calculate_concentrations(form_data):
    calculated_concentrations_dict = {}
    for key, value in form_data.items():
        if key not in ["culture", "climate_zone", "quantity_of_water", "temperature", "productivity"]:
            calculated_concentrations_dict[key] = round(float(value) * COEFFICIENT, 2)
    return calculated_concentrations_dict


def calculate_consumptions(form_data):
    calculated_consumptions_dict = {}
    obj = list(ElementsConsumption.objects.values().filter(culture__culture=form_data['culture']))
    for values in obj:
        for key, value in values.items():
            if key not in ['id', 'culture_id']:
                calculated_consumptions_dict[key] = round(float(value) * float(form_data['productivity']), 2)
    return calculated_consumptions_dict