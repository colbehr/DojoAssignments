from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^ninjas/(?P<id>[a-z]+)$', views.color),
	url(r'^ninjas/$', views.index),
]
