from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^validateUser$', views.validateUser),
	url(r'^success$', views.success),
]
