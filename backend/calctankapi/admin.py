from django.contrib import admin
from .models import UserFormData, FieldRecipe, TankRecipe, TestSolution, CostsOnField, CostsOnHa, Prices


admin.site.register(UserFormData)
admin.site.register(FieldRecipe)
admin.site.register(TankRecipe)
admin.site.register(TestSolution)
admin.site.register(CostsOnField)
admin.site.register(CostsOnHa)
admin.site.register(Prices)
