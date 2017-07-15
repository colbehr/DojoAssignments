from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index, name= 'index'),
	url(r'^login$', views.processLogin, name = "login"),
	url(r'^register$', views.processReg, name = "reg"),
	url(r'^logout$', views.logout, name = "logout"),
]
