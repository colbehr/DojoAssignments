# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class product(models.Model):
    name = models.CharField(max_length=38)
    description = models.TextField()
    weight = models.FloatField(max_length= 38)
    price = models.FloatField(max_length= 38)
    cost  = models.FloatField(max_length= 38)
    category  = models.CharField(max_length= 38)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
