
    var nota;
    var promedio;
    var suma=0;
    var cnotas = parseInt (prompt("¿CUANTAS NOTAS QUIERES PROMEDIAR?"))

    for (i =0 ; i < cnotas; i++) {
        var nota= parseInt (prompt("digite nota"+ i));
        suma = suma + nota;
    }
    promedio = suma/cnotas;

    
    document.write ("Tu promedio es " + promedio);