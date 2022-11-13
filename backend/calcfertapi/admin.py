from django.contrib import admin
from .models import Culture, ClimateZone, UserFormData, DefaultElementsConcentration, ElementsConsumption, CalculatedConcentration, CalculatedConsumption


admin.site.register(Culture)
admin.site.register(ClimateZone)
admin.site.register(UserFormData)
admin.site.register(DefaultElementsConcentration)
admin.site.register(ElementsConsumption)
admin.site.register(CalculatedConcentration)
admin.site.register(CalculatedConsumption)



