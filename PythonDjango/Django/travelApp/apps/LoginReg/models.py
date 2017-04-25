# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import re
from django.db import models
import bcrypt
# Create your models here.


class UserManager(models.Manager):
    def validateUser(self, postData):
        print "__________ validateUser (models.py)___________"
        response = {}
        response["status"] = True
        response["errors"] = []
        response["data"] = postData
        if not postData['name']:
            response["status"] = False
            response['errors'].append("Please enter a name")
        if bool(re.search(r'\d', str(postData['name']))):
            response["status"] = False
            response['errors'].append("A name cannot contain a digit")
        if len(postData['name']) < 3:
            response["status"] = False
            response['errors'].append("Name must be longer than 3 characters")
        if len(postData['username']) < 3:
            response["status"] = False
            response['errors'].append("Username must be longer than 3 characters")
        if User.objects.filter(username=postData['username']).exists():
            response["status"] = False
            response['errors'].append("That username already exists, Please log in!")
        if len(postData["pass"]) <= 7:
            response["status"] = False
            response['errors'].append("Password must be at least 8 characters")
        if postData['pass'] != postData["passconf"]:
            response["status"] = False
            response['errors'].append("Passwords don't Match")
        if response['status'] is True:
            response['user'] = User.objects.create(name=response['data']['name'], username=response['data']['username'], password=bcrypt.hashpw(response['data']['pass'].encode(), bcrypt.gensalt()))
        return response

    def validateLogin(self, postData):
        print "__________ validateLogin (models.py)___________"
        response = {}
        response["status"] = True
        response["data"] = postData
        if not User.objects.filter(username=postData['username']).exists():
            response["status"] = False
            return response
        response["user"] = User.objects.get(username=postData['username'])
        if bcrypt.hashpw(postData['pass'].encode(), response['user'].password.encode()) != response['user'].password:
            response["status"] = False
        return response


class User(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
