let NombreUsuario=prompt ("ingresa tu nombre")

let estado=prompt("Te gustan los helados? Responda con si o no ")
if(estado == "si"){
    console.log("Bienvenido")
}else{
    alert("Anda pa alla bobo, elegí igual")
}

let opcion = prompt (
    "selecciona un gusto de helado \n1-Americana \n2-Dulce de Leche \n3-Chocolate \n4-Menta Granizada \n5-Mas Sabores"
);

if (opcion == "1"){
    alert ("seleccionaste Americana")
} else if (opcion == "2"){
    alert ("seleccionaste Dulce de Leche")
} else if (opcion == "3"){
    alert ("seleccionaste Chocolate")
} else if (opcion == "4"){
    alert ("¿como vas a seleccionar Menta Granizada? un asco")
} else if (opcion == "5"){
    let opcion = prompt (
        "Selecciona un gusto de helado premium \n1-Frutilla \n2-Banana Split \n3-Higo al Coñac \n4-Todos menos Menta Granizada"
    );
    switch (opcion) {
        case "1":
            alert ("seleccionaste Frutilla");
            break;
        case "2":
            alert ("seleccionaste Banana Split");
            break;
        case "3":
            alert ("seleccionaste Higo al Coñac");
            break;
        case "4":
            alert ("seleccionaste Todos los sabores que valen la pena.");
            break;
            default:
                alert ("opción no válida")

    }
} else {
    alert ("opción no válida")
}

let Findecompra=prompt ("cuántos helados va a querer? seleccione hasta 3");
switch (Findecompra){
    case "1":
        alert ("seleccionaste 1 helado");
        let helado1
        break;
    case "2":
        alert ("seleccionaste 2 helados");
        let helado2
        break;    
    case "3":
        alert ("seleccionaste 3 helados");
        let helado3
        break;
        default:
            alert ("opción no válida");
        
}



function suorden(){
console.log(NombreUsuario +", tu orden está siendo preparada" )
}

for (let i = 0; i < 2; i++) {
    suorden()
}



