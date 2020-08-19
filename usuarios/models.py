from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

class UsuarioManager(BaseUserManager):
    def create_user(self, correo, password=None):
        """
        Crea y guarda el usuario dado el correo y password
        """
        if not correo:
            raise ValueError('El usuario debe tener un correo valido')

        user = self.model(
            correo=self.normalize_email(correo),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, correo, password=None):
        """
        Crea y guarda el superuser con el correo y password proporcionado.
        """
        user = self.create_user(
            correo,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class Usuario(AbstractBaseUser):
    # Campos básicos
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    telefono = models.CharField(max_length=20)
    celular = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=1, default='h') # h = hombre / m = mujer
    
    # Campos de autenticacion
    correo = models.CharField(max_length=70, unique=True)
    password = models.CharField(max_length=100, default='@}zau}3A]&kWIwVu')
    last_login = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'correo'
    REQUIRED_FIELDS = []

    # Campos logícos
    eliminado = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    objects = UsuarioManager()

    def __str__(self):
        return self.correo

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Yes, always
        return True

    # Obtener el nombre completo del usuario
    @property
    def nombre_completo(self):
        return f"{ self.nombres } { self.apellidos }"
    
    # Obtener el genero completo del usuario
    @property
    def genero_completo(self):
        return f"{Hombre}" if self.genero == "h" else f"{Mujer}"

    # Obtener si el usuario es admin
    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # All admins are staff
        return self.is_admin