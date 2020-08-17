# Librerias python (requieren ir al principio)
from datetime import time, datetime, timezone, timedelta
import os, platform, subprocess, inspect, uuid, base64, requests, json, re, unicodedata, logging, MySQLdb, sys, urllib.parse
from django.shortcuts import render
from django.views.generic import TemplateView
# Librerias Django
from django.shortcuts import render, redirect
from django.contrib import messages
'''
    OJO: Antes de importar una libreria revisa si ya se encuentra importada y si no agregala a la categoria que pertenece
'''

'''
Logger:
    Configuracion especifica del logger y el formato del mensaje
    Si ocupan reducir el nivel del log, los niveles van de FATAL a DEBUG o de menor a mayor
    por lo que dependiendo su configuración, se mostrarán los mensajes del nivel seleccionado hacia abajo:
        5 DEBUG
        4 INFO
        3 WARN
        2 ERROR
        1 FATAL
'''
logging.basicConfig(level=logging.INFO,
                    format='[%(levelname)s] > %(message)s')
logger = logging.getLogger(__name__)

class UsuariosLogin(TemplateView):
    def get(self, request):
        return render(
            request,
            "usuarios/login.html",
            context = {}
        )
    def post(self, request):
        print("HOLA")
        return redirect("pagina_inicio")
        return render(
            request,
            context = {}
        )

class UsuariosRecuperarPassword(TemplateView):
    def get(self, request):
        return render(
            request,
            "usuarios/recuperar_password.html",
            context = {}
        )
    
class PaginaInicio(TemplateView):
    print("JOLA")
    def get(self, request):
        return render(
            request,
            "usuarios/inicio.html",
            context = {}
        )

class Tareas(TemplateView):
    print("Tareas")
    
    def get(self, request):
        messages.info(request, 'Introduce un PIN para completar la transferencia.', fail_silently=True)
        return render(
            request,
            "usuarios/tareas.html",
            context={}
        )