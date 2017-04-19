from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^process$', views.process),
	url(r'^delete/(?P<id>[0-9]+)$', views.delete),
	url(r'^deleteConf$', views.deleteConf),
]
