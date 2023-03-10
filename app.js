const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonResult = document.getElementsByName('data-result')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

/*PARA COMPROBAR SI APARECEN EN INSPECCIONAR EN HTML*/
//console.log(botonNumeros); 
//console.log(botonOpera);
//console.log(botonResult);
//console.log(botonDelete);

var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

/*PARA COMPROBAR SI APARECEN EN INSPECCIONAR EN HTML*/
//console.log(result);

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
        //alert(boton.innerText); /*COMPROBAR SI APARECEN NUMEROS EN ALERT*/
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        //alert(boton.innerText); /*COMPROBAR SI APARECEN OPERACIONES EN ALERT*/
    })
});

botonResult.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){    
    if(opeActual === '') return;
    if(opeAnterior !== '')
    {
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);    
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();
