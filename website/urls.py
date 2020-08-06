from django.urls import path
from . import views

urlpatterns = [
    # Templates dentro de erm/colposcopia/templates
    path('home', views.home, name='home'),

    # Ruta semi implementada
    # path('requisicion', views.requisicion, name='requisicion'),
    # path('registration', views.registration, name='registration'),
    # path('px/', views.px_list_view, name='paciente'),
    # path('requisicion', views.requisicion, name='requisicion'),
    # path('download/', views.download, name='descarga'),
]
