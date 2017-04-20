# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


# Create your models here.
class UserManager(models.Manager):
    def validateUser(self,postData):
        print "__________validateUser (models.py)"
        response = {}
        response["status"] = True
        if not postData["username"]:
            response["status"] = False
        if len(postData["username"]) < 8 or len(postData["username"]) > 16:
            response["status"] = False
        response["data"] = postData
        #send to views
        return response

class Name(models.Model):
    username = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
