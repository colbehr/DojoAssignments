# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.db.models import Count

from ..LoginReg.models import User
# Create your models here.

class UserManager(models.Manager):
    def validateSecret(self, postData, id):
        print "__________validateSecret (models.py)___________"
        response = {}
        response["status"] = True
        response["errors"] = []
        response["data"] = postData
        if not postData['secret']:
            response["status"] = False
            response['errors'].append("Please enter a secret")
        if response['status'] is True:
            print postData['secret']
            print User.objects.get(id = id).email
            response['secret'] = Secret.objects.create(user = User.objects.get(id = id), secret = postData['secret'])
        return response

    def getSecret(self, num):
        return Secret.objects.annotate(Count('secret')).order_by('-created_at')[:num]

    def addLike(self, id, userid):
        return Secret.objects.get(id = id).user_liked.add(User.objects.get(id = userid))

class Secret(models.Model):
    user = models.ForeignKey(User, related_name="secrets")
    secret = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_liked = models.ManyToManyField(User, related_name="users")

    objects = UserManager()
