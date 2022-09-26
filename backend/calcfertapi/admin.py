from django.contrib import admin
from .models import Culture, ClimateZone, UserFormData, DefaultElementsConcentration, ElementsConsumption, CalculatedData


admin.site.register(Culture)
admin.site.register(ClimateZone)
admin.site.register(UserFormData)
admin.site.register(DefaultElementsConcentration)
admin.site.register(ElementsConsumption)
admin.site.register(CalculatedData)



