function comprarProductos() {
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Queres comprar helado de chocolate, vainilla o ambos?', 'Ej: ambos');
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'chocolate':
                precio = 700;
                break;
            case 'vainilla':
                precio = 700;
                break;
            case 'ambos':
                precio = 1400;
                break;
            default:
                alert('Alguno de los datos ingresados no es correcto.');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;
        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)


    return totalCompra;
}

function validarCantidad(cantidad) {
    while(Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe agregar un número.')
        } else {
            alert('Debe ingresar un número distinto de cero.')
        }
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));
    }

    return cantidad;
}

const totalCompra = comprarProductos();

function calcularTotalAPagar(totalCompra) {
    totalCompra = totalCompra;
    alert('El total a pagar es: $'+totalCompra);
}

calcularTotalAPagar(totalCompra);


