from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^page1$', views.page1),
    url(r'^page2$', views.page2),
    url(r'^page3$', views.page3),
]
