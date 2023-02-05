from django.db import models

class UserFormData(models.Model):
    quantity_of_ha = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    volume_of_water_tank = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    volume_of_mixer_tank = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    quantity_of_mixture = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    current_hardness = models.DecimalField(
        max_digits=4, decimal_places=2, blank=True, null=True)
    planing_hardness = models.DecimalField(
        max_digits=4, decimal_places=3, blank=True, null=True)
    current_pH = models.DecimalField(
        max_digits=4, decimal_places=3, blank=True, null=True)
    pesticide_1 = models.CharField(max_length=20, default='')
    form_pesticide_1 = models.CharField(max_length=5, default='')
    consumption_pesticide_1 = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    price_pesticide_1 = models.DecimalField(
        max_digits=6, decimal_places=2, blank=True, null=True)
    pesticide_2 = models.CharField(max_length=20, default='')
    form_pesticide_2 = models.CharField(max_length=5, default='')
    consumption_pesticide_2 = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    price_pesticide_2 = models.DecimalField(
        max_digits=6, decimal_places=2, blank=True, null=True)
    pesticide_3 = models.CharField(max_length=20, default='')
    form_pesticide_3 = models.CharField(max_length=5, default='')
    consumption_pesticide_3 = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    price_pesticide_3 = models.DecimalField(
        max_digits=6, decimal_places=2, blank=True, null=True)
    complex_fertilizer = models.CharField(max_length=20, default='')
    consumption_complex_fertilizer = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    price_complex_fertilizer = models.DecimalField(
        max_digits=6, decimal_places=2, blank=True, null=True)
    sas = models.CharField(max_length=20, default='')
    consumption_sas = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    price_sas = models.DecimalField(
        max_digits=6, decimal_places=2, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    check_field = models.BooleanField(blank=True, null=True, default = False)

    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Данные из формы'
        verbose_name_plural = 'Данные из формы'
