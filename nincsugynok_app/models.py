from django.db import models

class House(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    address = models.CharField(max_length=300)
    added_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title