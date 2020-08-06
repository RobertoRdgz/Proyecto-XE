from datetime import time, datetime, timezone, timedelta
from django.urls import reverse, resolve
from django.shortcuts import render, redirect
from django.views import generic
from django.contrib.auth import authenticate
from django.contrib import messages
from django.conf import settings
from django.http import HttpResponse, Http404
from django.db import transaction

# Create your views here.
def home(request):
    print('Ya vamos a jugar fornai')
    print('Ya vamos a jugar fornai2')
    print('Ya vamos a jugar fornai x3000')
    print("PRUEBA FINL")
    return render(
        request,
        'plumbum/main2.html',
        context={},
    )
