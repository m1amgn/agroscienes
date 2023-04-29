from .models import Prices


def recipe_on_field_calculation(form_data):
    try:
        quantity_of_RO260 = round((float(form_data['current_hardness']) - float(form_data['planing_hardness'])) / 1.65 * 0.88*float(form_data['quantity_of_ha']) * float(form_data['quantity_of_mixture']) / 1000, 2)
        quantity_of_RO203 = round(float(form_data['decrease_pH']) * 5 * float(form_data['quantity_of_ha']) * float(form_data['quantity_of_mixture'])/1000, 2)
        if form_data['consumption_pesticide_1']:
            quantity_of_pesticide_1 = round(float(form_data['quantity_of_ha']) * float(form_data['consumption_pesticide_1']), 2)
        else:
            quantity_of_pesticide_1 = ''
        if form_data['consumption_pesticide_2']:
            quantity_of_pesticide_2 = round(float(form_data['quantity_of_ha']) * float(form_data['consumption_pesticide_2']), 2)
        else:
            quantity_of_pesticide_2 = ''
        if form_data['consumption_pesticide_3']:
            quantity_of_pesticide_3 = round(float(form_data['quantity_of_ha']) * float(form_data['consumption_pesticide_3']), 2)
        else:
            quantity_of_pesticide_3 = ''
        if form_data['consumption_sas']:
            quantity_of_sas = round(float(form_data['quantity_of_ha']) * float(form_data['consumption_sas']) * float(form_data['quantity_of_mixture']) / 100000, 2)
        else:
            quantity_of_sas = ''
        if form_data['consumption_complex_fertilizer']:
            quantity_of_complex_fertilize = round(float(form_data['quantity_of_ha']) * float(form_data['consumption_complex_fertilizer']), 2)
        else:
            quantity_of_complex_fertilize = ''
        
        calculated_dict = {
            'quantity_of_RO260': quantity_of_RO260,
            'quantity_of_RO203': quantity_of_RO203,
            'pesticide_1': form_data['pesticide_1'],
            'quantity_of_pesticide_1': quantity_of_pesticide_1,
            'pesticide_2': form_data['pesticide_2'],
            'quantity_of_pesticide_2': quantity_of_pesticide_2,
            'pesticide_3': form_data['pesticide_3'],
            'quantity_of_pesticide_3': quantity_of_pesticide_3,
            'sas': form_data['sas'],
            'quantity_of_sas': quantity_of_sas,
            'complex_fertilizer': form_data['complex_fertilizer'],
            'quantity_of_complex_fertilize': quantity_of_complex_fertilize
        }
        return calculated_dict
    except Exception as e:
        print(f"Error in def recipe_on_field_calculation: {e}")

def recipe_on_tank_calculation(form_data):
    try:
        quantity_of_RO260 = round((float(form_data['current_hardness']) - float(form_data['planing_hardness'])) / 1.65 * 0.88 * float(form_data['volume_of_water_tank']), 2)
        quantity_of_RO203 = round(float(form_data['decrease_pH']) * float(form_data['volume_of_water_tank']) / 2, 2)
        if form_data['consumption_pesticide_1']:
            quantity_of_pesticide_1 = round(float(form_data['volume_of_mixer_tank']) / float(form_data['quantity_of_mixture']) * 1000*float(form_data['consumption_pesticide_1']), 2)
        else:
            quantity_of_pesticide_1 = ''
        if form_data['consumption_pesticide_2']:
            quantity_of_pesticide_2 = round(float(form_data['volume_of_mixer_tank']) / float(form_data['quantity_of_mixture']) * 1000*float(form_data['consumption_pesticide_2']), 2)
        else:
            quantity_of_pesticide_2 = ''
        if form_data['consumption_pesticide_3']:
            quantity_of_pesticide_3 = round(float(form_data['volume_of_mixer_tank']) / float(form_data['quantity_of_mixture']) * 1000 * float(form_data['consumption_pesticide_3']), 2)
        else:
            quantity_of_pesticide_3 = ''
        if form_data['consumption_sas']:
            quantity_of_sas = round(float(form_data['volume_of_mixer_tank']) * float(form_data['consumption_sas']) / 100, 2)
        else:
            quantity_of_sas = ''
        if form_data['consumption_complex_fertilizer']:
            quantity_of_complex_fertilize = round(float(form_data['volume_of_mixer_tank']) / float(form_data['quantity_of_mixture']) * 1000*float(form_data['consumption_complex_fertilizer']), 2)
        else:
            quantity_of_complex_fertilize = ''
            
        calculated_dict = {
            'quantity_of_RO260': quantity_of_RO260,
            'quantity_of_RO203': quantity_of_RO203,
            'pesticide_1': form_data['pesticide_1'],
            'quantity_of_pesticide_1': quantity_of_pesticide_1,
            'pesticide_2': form_data['pesticide_2'],
            'quantity_of_pesticide_2': quantity_of_pesticide_2,
            'pesticide_3': form_data['pesticide_3'],
            'quantity_of_pesticide_3': quantity_of_pesticide_3,
            'sas': form_data['sas'],
            'quantity_of_sas': quantity_of_sas,
            'complex_fertilizer': form_data['complex_fertilizer'],
            'quantity_of_complex_fertilize': quantity_of_complex_fertilize
        }
        return calculated_dict
    except Exception as e:
        print(f"Error in def recipe_on_tank_calculation: {e}")
               
def test_solution_calculation(form_data):
    try:
        if form_data['consumption_pesticide_1']:
            quantity_of_pesticide_1 = round(float(form_data['consumption_pesticide_1']) / float(form_data['quantity_of_mixture']) * 1000, 2)
        else:
            quantity_of_pesticide_1 = ''
        if form_data['consumption_pesticide_2']:
            quantity_of_pesticide_2 = round(float(form_data['consumption_pesticide_2']) / float(form_data['quantity_of_mixture']) * 1000, 2)
        else:
            quantity_of_pesticide_2 = ''
        if form_data['consumption_pesticide_3']:
            quantity_of_pesticide_3 = round(float(form_data['consumption_pesticide_3']) / float(form_data['quantity_of_mixture']) * 1000, 2)
        else:
            quantity_of_pesticide_3 = ''
        if form_data['consumption_sas']:
            quantity_of_sas = round(float(form_data['consumption_sas']) / 100, 2)
        else:
            quantity_of_sas = ''
        if form_data['consumption_complex_fertilizer']:
            quantity_of_complex_fertilize = round(float(form_data['consumption_complex_fertilizer']) / float(form_data['quantity_of_mixture']) * 1000, 2)
        else:
            quantity_of_complex_fertilize = ''
            
        calculated_dict = {
            'pesticide_1': form_data['pesticide_1'],
            'quantity_of_pesticide_1': quantity_of_pesticide_1,
            'pesticide_2': form_data['pesticide_2'],
            'quantity_of_pesticide_2': quantity_of_pesticide_2,
            'pesticide_3': form_data['pesticide_3'],
            'quantity_of_pesticide_3': quantity_of_pesticide_3,
            'sas': form_data['sas'],
            'quantity_of_sas': quantity_of_sas,
            'complex_fertilizer': form_data['complex_fertilizer'],
            'quantity_of_complex_fertilize': quantity_of_complex_fertilize
        }
        return calculated_dict
    except Exception as e:
        print(f"Error in def test_solution_calculation: {e}")
        
def costs_on_field_calculation(form_data):
    try:
        calculated_data = recipe_on_field_calculation(form_data)
        costs_of_RO260 = round(float(calculated_data['quantity_of_RO260']) * float(Prices.objects.all()[0].price_of_RO260), 2)
        costs_of_RO203 = round(float(calculated_data['quantity_of_RO203']) * float(Prices.objects.all()[0].price_of_RO203), 2)
        if form_data['consumption_pesticide_1'] and form_data['price_pesticide_1']:
            costs_of_pesticide_1 = round(float(calculated_data['quantity_of_pesticide_1']) * float(form_data['price_pesticide_1']), 2)
        else:
            costs_of_pesticide_1 = ''
        if form_data['consumption_pesticide_2'] and form_data['price_pesticide_2']:
            costs_of_pesticide_2 = round(float(calculated_data['quantity_of_pesticide_2']) * float(form_data['price_pesticide_2']), 2)
        else:
            costs_of_pesticide_2 = ''
        if form_data['consumption_pesticide_3'] and form_data['price_pesticide_3']:
            costs_of_pesticide_3 = round(float(calculated_data['quantity_of_pesticide_3']) * float(form_data['price_pesticide_3']), 2)
        else:
            costs_of_pesticide_3 = ''
        if form_data['consumption_sas'] and form_data['price_sas']:
            costs_of_sas = round(float(calculated_data['quantity_of_sas']) * float(form_data['price_sas']), 2)
        else:
            costs_of_sas = ''
        if form_data['consumption_complex_fertilizer'] and form_data['price_complex_fertilizer']:
            costs_of_complex_fertilize = round(float(calculated_data['quantity_of_complex_fertilize']) * float(form_data['price_complex_fertilizer']), 2)
        else:
            costs_of_complex_fertilize = ''
            
        calculated_dict = {
                'costs_of_RO260': costs_of_RO260,
                'costs_of_RO203': costs_of_RO203,
                'pesticide_1': form_data['pesticide_1'],
                'costs_of_pesticide_1': costs_of_pesticide_1,
                'pesticide_2': form_data['pesticide_2'],
                'costs_of_pesticide_2': costs_of_pesticide_2,
                'pesticide_3': form_data['pesticide_3'],
                'costs_of_pesticide_3': costs_of_pesticide_3,
                'sas': form_data['sas'],
                'costs_of_sas': costs_of_sas,
                'complex_fertilizer': form_data['complex_fertilizer'],
                'costs_of_complex_fertilize': costs_of_complex_fertilize
            }
        return calculated_dict
    except Exception as e:
        print(f"Error in def costs_on_field_calculation: {e}")
        
def costs_on_ha_calculation(form_data):
    try:
        calculated_data = costs_on_field_calculation(form_data)
        for key, values in calculated_data.items():
            if type(values) is float:
                values = round(values / float(form_data['quantity_of_ha']), 2)
                calculated_data[key] = values
        return calculated_data
    except Exception as e:
        print(f"Error in def costs_on_ha_calculation: {e}")