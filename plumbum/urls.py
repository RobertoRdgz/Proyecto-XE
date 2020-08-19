"""plumbum URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView
from usuarios.views import *

'''
    Aquí abajo deben ir las urls con la siguiente convención:
        path('informacion_paciente', InformacionPaciente.as_view(), name="informacion_paciente")
'''
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', UsuariosLogin.as_view(), name='login_user'),
    path('', RedirectView.as_view(url='/', permanent=True)),
    path('recuperar_password', UsuariosRecuperarPassword.as_view(), name='recuperar_password'),
    path('pagina_inicio',PaginaInicio.as_view(),name='pagina_inicio'),
    path('tareas',Tareas.as_view(),name='tareas')
]