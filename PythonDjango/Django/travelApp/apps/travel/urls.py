from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index, name= 'index'),
	url(r'^add/$', views.add, name= 'add'),
	url(r'^destination/(?P<id>\d+)$', views.detail, name='detail'),
	url(r'^joinTrip/(?P<id>\d+)$', views.joinTrip, name='join'),
	url(r'^leaveTrip/(?P<id>\d+)$', views.leaveTrip, name='leave'),
	url(r'^processTrip/$', views.processTrip, name='processTrip'),
]
