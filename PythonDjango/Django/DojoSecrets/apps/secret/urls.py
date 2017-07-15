from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^post$', views.post, name="post"),
    url(r'^pop$', views.pop, name="pop"),
    url(r'^/like/(?P<id>\d+)$', views.like, name="like"),
]
