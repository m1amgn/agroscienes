from django.db import models

class UserFormData(models.Model):
    quantity_of_ha = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    volume_of_water_tank = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    volume_of_mixer_tank = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    quantity_of_mixture = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    current_hardness = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    planing_hardness = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    decrease_pH = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    pesticide_1 = models.CharField(max_length=50, blank=True, null=True)
    form_pesticide_1 = models.CharField(max_length=50, blank=True, null=True)
    consumption_pesticide_1 = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    price_pesticide_1 = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    pesticide_2 = models.CharField(max_length=50, blank=True, null=True)
    form_pesticide_2 = models.CharField(max_length=50, blank=True, null=True)
    consumption_pesticide_2 = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    price_pesticide_2 = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    pesticide_3 = models.CharField(max_length=50, blank=True, null=True)
    form_pesticide_3 = models.CharField(max_length=50, blank=True, null=True)
    consumption_pesticide_3 = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    price_pesticide_3 = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    complex_fertilizer = models.CharField(max_length=50, blank=True, null=True)
    consumption_complex_fertilizer = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    price_complex_fertilizer = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    sas = models.CharField(max_length=50, blank=True, null=True)
    consumption_sas = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    price_sas = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    check_field = models.BooleanField(blank=True, null=True, default=False)

    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Данные из формы'
        verbose_name_plural = 'Данные из формы'
        

class FieldRecipe(models.Model):
    quantity_of_RO260 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    quantity_of_RO203 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_1 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_1 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_2 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_2 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_3 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_3 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    sas = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_sas = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    complex_fertilizer = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_complex_fertilize = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Рецепт на поле'
        verbose_name_plural = 'Рецепты на поле'

class TankRecipe(models.Model):
    quantity_of_RO260 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    quantity_of_RO203 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_1 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_1 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_2 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_2 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_3 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_3 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    sas = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_sas = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    complex_fertilizer = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_complex_fertilize = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Рецепт на бак'
        verbose_name_plural = 'Рецепты на бак'
        
class TestSolution(models.Model):
    quantity_of_RO260 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    quantity_of_RO203 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_1 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_1 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_2 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_2 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_3 = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_pesticide_3 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    sas = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_sas = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    complex_fertilizer = models.CharField(max_length=20, blank=True, null=True)
    quantity_of_complex_fertilize = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Тестовый раствор'
        verbose_name_plural = 'Тестовые раствор'
        
class CostsOnField(models.Model):
    costs_of_RO260 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    costs_of_RO203 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_1 = models.CharField(max_length=20, blank=True, null=True)
    costs_of_pesticide_1 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_2 = models.CharField(max_length=20, blank=True, null=True)
    costs_of_pesticide_2 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_3 = models.CharField(max_length=20, blank=True, null=True)
    costs_of_pesticide_3 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    sas = models.CharField(max_length=20, blank=True, null=True)
    costs_of_sas = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    complex_fertilizer = models.CharField(max_length=20, blank=True, null=True)
    costs_of_complex_fertilize = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Затрата на поле'
        verbose_name_plural = 'Затраты на поле'

class CostsOnHa(models.Model):
    costs_of_RO260 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    costs_of_RO203 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_1 = models.CharField(max_length=20, blank=True, null=True)
    costs_of_pesticide_1 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_2 = models.CharField(max_length=20, blank=True, null=True)
    costs_of_pesticide_2 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    pesticide_3 = models.CharField(max_length=20, blank=True, null=True)
    costs_of_pesticide_3 = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    sas = models.CharField(max_length=20, blank=True, null=True)
    costs_of_sas = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    complex_fertilizer = models.CharField(max_length=20, blank=True, null=True)
    costs_of_complex_fertilize = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Затрата на Га'
        verbose_name_plural = 'Затраты на Га'

class Prices(models.Model):
    price_of_RO260 = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    price_of_RO203 = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)

    
    def __str__(self):
        return f'Цены'

    class Meta:
        verbose_name = 'Цена'
        verbose_name_plural = 'Цены'
        