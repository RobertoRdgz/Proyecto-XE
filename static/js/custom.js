/*Indicador active en el menú de dashboard */
  url = window.location.href.substring(21);
  $('li a[href*="'+url+'"]').parent().toggleClass("active");

/*the autocomplete*/
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}


/*habilitar scroll-bar en div nicescroll-box y wrap*/
$(".nicescroll-box").niceScroll(".wrap", {});


/*funcionalidad para seleccionar y deseleccionar checkboxes*/

/*left*/
function MarcarChecksTabla(check, tabla) {
  $('table#' + tabla + ' tr td input[type=checkbox]').each(function () {
    this.checked = check;
  });
}

function MarcarChecksDiv(check, Div) {
  $('#' + Div + ' input[type=checkbox]').each(function () {
    this.checked = check;
  });
}

/*right*/
function MarcarChecksTabla(check, tabla) {
  $('table#' + tabla + ' tr td input[type=checkbox]').each(function () {
    this.checked = check;
  });
}

function MarcarChecksDiv(check, Div) {
  $('#' + Div + ' input[type=checkbox]').each(function () {
    this.checked = check;
  });
}


//Checkbox//
function metodoLectura(event) {
  //console.log($(event.target)[0].checked)
  if ($(event.target)[0].checked) {
    $(".lectura").each(function () {
      this.checked = true;
    });
  } else {
    $(".lectura").each(function () {
      this.checked = false;
    });
  }

}

function metodoEscritura(event) {
  //console.log($(event.target)[0].checked)
  if ($(event.target)[0].checked) {
    $(".escritura").each(function () {
      this.checked = true;
    });
  } else {
    $(".escritura").each(function () {
      this.checked = false;
    });
  }

}

function metodoModificacion(event) {
  //console.log($(event.target)[0].checked)
  if ($(event.target)[0].checked) {
    $(".modificacion").each(function () {
      this.checked = true;
    });
  } else {
    $(".modificacion").each(function () {
      this.checked = false;
    });
  }

}






// INICIALIZACION DE TABLA DINAMICA

function table_init(table_name, input_busqueda, col, order) {
  $('#' + table_name).dataTable({
    "aaSorting": [
      [col, order]
    ],
    "info": true,
    "searching": true,
    "ordering": true,
    language: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ elementos",
      info: "Resultados _START_ de _END_, _TOTAL_ registros en total",
      infoEmpty: "Resultados 0 de 0, 0 registros totales",
      infoFiltered: "(filtrado de _MAX_ registros en total)",
      infoPostFix: "",
      loadingRecords: "Cargando...",
      zeroRecords: "No existen registros que coincidan con la búsqueda.",
      emptyTable: "No hay datos disponibles.",
      paginate: {
        first: "Primero",
        previous: "Anterior", 
        next: "Siguiente",
        last: "Último"
      },
      aria: {
        sortAscending: ": odernar de forma ascendente",
        sortDescending: ": ordernar de forma descendente"
      }
    }
  });

  var table = $('#' + table_name).DataTable();
  $('#' + input_busqueda).keyup(function () {
    table.search($(this).val()).draw();
  })

}




// MODULO DE MENSAJES
// METODO PARA MANDAR LLAMAR MENSJE EN GENERAL
function MostrarMsjGeneral(sType, sTitle, sMsj) {
  var i = -1;
  var toastCount = 0;
  var $toastlast;

  $(document).ready(function () {
    var shortCutFunction = sType; //'success';
    var msg = sMsj; //'Test';
    var title = sTitle; //'Flatlab is an Awesome dashboard build with BS3 ';

    var toastIndex = toastCount++;

    toastr.options = {
      closeButton: true,
      debug: false,
      progressBar: true,
      positionClass: 'toast-top-right', //'toast-bottom-full-width',
      preventDuplicates: false,
      onclick: null
    };

    toastr.options.showDuration = '1000';
    toastr.options.hideDuration = '1000';
    toastr.options.timeOut = '3000';
    toastr.options.extendedTimeOut = '1000';
    toastr.options.showEasing = 'swing';
    toastr.options.hideEasing = 'swing';
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';

    var $toast = toastr[shortCutFunction](msg, title);
  });
}

// METODO PARA RECIBIR UN SOLO MENSAJE Y ARMAR EL QUE SE VA A MOSTRAR
// Alertas Javascript
function MostrarMsj(iTipo, sMensaje) {
  switch (iTipo) {
    case 1:
      MostrarMsjGeneral("success", "¡Perfecto!", sMensaje);
      break;
    case 2:
      MostrarMsjGeneral("info", "¡Oh mira...!", sMensaje);
      break;
    case 3:
      MostrarMsjGeneral("warning", "¡Ouch!", sMensaje);
      break;
    case 4:
      MostrarMsjGeneral("error", "¡Ouch! Algo salió mal", sMensaje);
      break;
    case 5:
      console.debug('Mensaje de debug: ' + sMensaje);
      break;
    default:
      console.debug('No asignaste un tipo de mensaje, mensaje: ' + sMensaje);
      
      break;
  }


}

/**
 * maxChars: Función para el conteo de caracteres en un textarea
 * Contar los caracteres restantes para cada input o textarea
 * input_id -> el id del input o textarea
 * max -> el número máximo de caracteres restantes
 * label_id -> el id del label que se va a estar actualizando con el número restante de caracteres
 */
function maxChars(input_id, max, label_id) {
  let input = $('#'+input_id).val().length
  if (input <= max) {
    $('#'+label_id).text('(' + input + '/' + max + ')')
  }
}