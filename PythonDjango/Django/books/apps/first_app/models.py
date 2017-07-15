# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=38)
    author = models.CharField(max_length=38)
    published = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=38)
    in_print = models.BooleanField(max_length=38)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
