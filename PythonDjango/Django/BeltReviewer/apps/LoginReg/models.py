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
        if not postData['fname'] or not postData['lname']:
            response["status"] = False
            response['errors'].append("Please enter a name")
        if bool(re.search(r'\d', str(postData['fname']))) or bool(re.search(r'\d', str(postData['lname']))):
            response["status"] = False
            response['errors'].append("A name cannot contain a digit")
        if len(postData['fname']) < 2 or len(postData['lname']) < 2:
            response["status"] = False
            response['errors'].append("Name must be longer than 2 characters")
        if re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", postData['email']) is None:
            response["status"] = False
            response['errors'].append("Please enter a valid email address")
        if User.objects.filter(email=postData['email']).exists():
            response["status"] = False
            response['errors'].append("Email already exists, Please log in!")
        if len(postData["pass"]) <= 7:
            response["status"] = False
            response['errors'].append("Password must be at least 8 characters")
        if postData['pass'] != postData["passconf"]:
            response["status"] = False
            response['errors'].append("Passwords must Match")
        if response['status'] is True:
            response['user'] = User.objects.create(first_name=response['data']['fname'], last_name=response['data']['fname'],
                                                   email=response['data']['email'], password=bcrypt.hashpw(response['data']['pass'].encode(), bcrypt.gensalt()))
        return response

    def validateLogin(self, postData):
        print "__________ validateLogin (models.py)___________"
        response = {}
        response["status"] = True
        response["data"] = postData
        if not User.objects.filter(email=postData['email']).exists():
            response["status"] = False
            return response
        response["user"] = User.objects.get(email=postData['email'])
        if bcrypt.hashpw(postData['pass'].encode(), response['user'].password.encode()) != response['user'].password:
            response["status"] = False
        return response


class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
