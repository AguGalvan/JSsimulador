const arrayProductos = [];

const producto1 = new Producto(1, 'Chocolate', 530);
const producto2 = new Producto(2, 'Vainilla', 500);
const producto3 = new Producto(3, 'Ambos', 1030);

arrayProductos.push(producto1, producto2, producto3);

const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));
};


function comprarProductos() {
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt('¿Queres comprar Chocolate, Vainilla o Ambos?', 'Ej: Ambos');
        productoCantidad = parseInt(prompt('¿Cuantos Kilos queres comprar?'));

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert('El producto no se encuentra en stock.');
        }

        seguirComprando = confirm('¿Queres comprar mas?');

    } while (seguirComprando)

    aplicarDescuento(total);
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 2000) {
        totalCompra = totalCompra * 0.80;
        alert('Tenes un 20% de descuento!');
    }
    calcularEnvio(totalCompra)
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Queres envio a domicilio?');

    if (tieneEnvioADomicilio && totalCompra >= 2000) {
        alert('Tenes envio gratis. El total de la compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 500;
        alert('El envío cuesta $500. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de la compra es: '+totalCompra);
    }
};

function comprar() {
    const quieroOrdenar =confirm('¿Querés ordenar la lista de productos del mas barato al mas caro?');
    if (quieroOrdenar) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }

    comprarProductos();
};

comprar();