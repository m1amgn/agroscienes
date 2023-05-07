from django.db import models


class Culture(models.Model):
    culture = models.CharField(max_length=20, verbose_name='Культура')

    def __str__(self):
        return self.culture

    class Meta:
        verbose_name = 'Культура'
        verbose_name_plural = 'Культуры'


class ClimateZone(models.Model):
    climate_zone = models.CharField(
        max_length=50, verbose_name='Климатическая зона', default='')

    def __str__(self):
        return self.climate_zone

    class Meta:
        verbose_name = 'Климатическая зона'
        verbose_name_plural = 'Климатические зоны'


class UserFormData(models.Model):
    culture = models.CharField(max_length=20, default='')
    climate_zone = models.CharField(max_length=50, default='')
    quantity_of_water = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True, null=True)
    temperature = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True, null=True)
    productivity = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True, null=True)
    N = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    P = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    K = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Mg = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    S = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Ca = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Fe = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Mn = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Zn = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Cu = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    B = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Mo = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Co = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Ni = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    Se = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    check_field = models.BooleanField(blank=True, null=True, default = False)

    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Данные из формы'
        verbose_name_plural = 'Данные из формы'


class DefaultElementsConcentration(models.Model):
    N = models.DecimalField(max_digits=6, decimal_places=3,
                            blank=True, null=True, default=0)
    P = models.DecimalField(max_digits=6, decimal_places=3,
                            blank=True, null=True, default=0)
    K = models.DecimalField(max_digits=6, decimal_places=3,
                            blank=True, null=True, default=0)
    Mg = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    S = models.DecimalField(max_digits=6, decimal_places=3,
                            blank=True, null=True, default=0)
    Ca = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    Fe = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    Mn = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    Zn = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    Cu = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    B = models.DecimalField(max_digits=6, decimal_places=3,
                            blank=True, null=True, default=0)
    Mo = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    Co = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    Ni = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)
    Se = models.DecimalField(
        max_digits=6, decimal_places=3, blank=True, null=True, default=0)

    def __str__(self):
        return f'Концентрация элементов по умолчанию'

    class Meta:
        verbose_name = 'Содержание элементов по умолчанию'
        verbose_name_plural = 'Содержание элементов по умолчанию'


class ElementsConsumption(models.Model):
    culture = models.ForeignKey(Culture, on_delete=models.CASCADE, null=True)
    N = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    P = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    K = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Mg = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    S = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Ca = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Fe = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Mn = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Zn = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Cu = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    B = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Mo = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Co = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Ni = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Se = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)

    def __str__(self):
        return f'{self.culture}'

    class Meta:
        verbose_name = 'Вынос элементов'
        verbose_name_plural = 'Вынос элементов'


class CalculatedConcentration(models.Model):
    N = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    P = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    K = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Mg = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    S = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Ca = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Fe = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Mn = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Zn = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Cu = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    B = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Mo = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Co = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Ni = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Se = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    created_timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Посчитанные значения концентраций'
        verbose_name_plural = 'Посчитанные значения концентраций'


class CalculatedConsumption(models.Model):
    N = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    P = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    K = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Mg = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    S = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Ca = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Fe = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Mn = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Zn = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Cu = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    B = models.DecimalField(max_digits=7, decimal_places=3,
                            blank=True, null=True, default=0)
    Mo = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Co = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Ni = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    Se = models.DecimalField(
        max_digits=7, decimal_places=3, blank=True, null=True, default=0)
    created_timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.created_timestamp)

    class Meta:
        verbose_name = 'Посчитанные значения выноса элементов'
        verbose_name_plural = 'Посчитанные значения выноса элементов'