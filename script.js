// Inicio del programa

// alert("Bienvenido a Todo Movil")

/*const pedirDatosdeUsuario = () => {
    let nombre = "";
    let correo = "";
    
    do {
        nombre = prompt("Ingrese su nombre:").toLowerCase()
    }while(!isNaN(nombre || nombre.length <0));
    
    do {
        correo = prompt("Ingrese su correo:").toLowerCase()
    }while(!isNaN(correo || correo.length <0));

    cotizar(nombre);  
};

const cotizar = (nombre) => {
    let marca = "";
    let precio = 0;

    do {
        alert(
        "Las marcas disponibles son: SAMSUNG, APPLE, LG, MOTOROLA, HUAWEI, XIAOMI"
        );
    
    do {
        marca = prompt("Ingrese la marca que prefiera").toUpperCase();
    } while(!isNaN(marca || marca.length <0));

    switch(marca) {

        case "SAMSUNG":
            precio = 45000
            imprimirCotizacion(nombre, marca, precio);
            break;
    
        case "APPLE":
            precio = 90000
            imprimirCotizacion(nombre, marca, precio);
            break;
    
        case "LG":
            precio = 75000
            imprimirCotizacion(nombre, marca, precio);
            break;
    
        case "MOTOROLA":
            precio = 38000
            imprimirCotizacion(nombre, marca, precio);
            break;
    
        case "HUAWEI":
            precio = 23000
            imprimirCotizacion(nombre, marca, precio);
            break;
    
        case "XIAOMI":
            precio = 32000
            imprimirCotizacion(nombre, marca, precio);
            break;
        }   

        recotizar = prompt("¿Desea realizar una nueva consulta?").toLowerCase();
     } while(recotizar !="no");
};

const imprimirCotizacion = (nombre, marca, precio) => {
    alert(
        `Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`
    );
};

const precioFinal = (precio, cuota) => {
    return (precio/cuota).toFixed(2);
};

pedirDatosdeUsuario();*/

// Se agregan arrays de modelos de productos de todas las marcas anteriores


//Se crea un objeto 

const stock = [
    {
        "id": 1,
        "nombre": "Samsung Galaxy S20",
        "precio": 130000,
        "almacenamiento": 128,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 2,
        "nombre": "Samsung Galaxy S21",
        "precio": 140000,
        "almacenamiento": 256,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 3,
        "nombre": "Samsung Galaxy S22",
        "precio": 150000,
        "almacenamiento": 512,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 4,
        "nombre": "Apple Iphone 11",
        "precio": 260000,
        "almacenamiento": 512,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 5,
        "nombre": "Apple Iphone 12",
        "precio": 240000,
        "almacenamiento": 128,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 6,
        "nombre": "Apple Iphone 13",
        "precio": 250000,
        "almacenamiento": 256,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 7,
        "nombre": "LG Velvet 5G",
        "precio": 120000,
        "almacenamiento": 512,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 8,
        "nombre": "LG Oled Z2",
        "precio": 130000,
        "almacenamiento": 128,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 9,
        "nombre": "LG Oled A2",
        "precio": 150000,
        "almacenamiento": 512,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 10,
        "nombre": "Huawei P30",
        "precio": 80000,
        "almacenamiento": 256,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 11,
        "nombre": "Huawei P40",
        "precio": 90000,
        "almacenamiento": 128,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 12,
        "nombre": "Huawei P50",
        "precio": 100000,
        "almacenamiento": 512,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 13,
        "nombre": "Motorola Edge 20 Pro",
        "precio": 150000,
        "almacenamiento": 128,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 14,
        "nombre": "Motorola Edge 30 Pro",
        "precio": 160000,
        "almacenamiento": 256,
        "img": "http://",
        "cantidad": 10
    },
    {
        "id": 15,
        "nombre": "Motorola G Stylus",
        "precio": 170000,
        "almacenamiento": 512,
        "img": "http://",
        "cantidad": 10
    },

];

function renderizarProductos(){

    const tienda = document.getElementById('tienda');

    const filtro = [
        'Alfabeticamente', 
        'Mas vendidos', 
        'Mayor Precio',
        'Menor precio', 
    ];

    const divContainer = document.createElement('div');
    divContainer.classList.add('container', 'text-center');

    filtro.forEach((btn)=> {
        
        const boton = document.createElement('button');
        boton.textContent = btn;
        boton.classList.add('btn', 'btn-danger', 'm-2');

        tienda.appendChild(boton);
    });

    const mayorPrecio = document.querySelector('button');
    mayorPrecio.addEventListener('click', () =>{

        const product = stock.sort((a,b) => b.precio - a.precio);

        console.log(product);
        
        tienda.innerHTML = '';

        product.forEach((c)=>{
            
            console.log(c);
            const div = document.createElement('div');

            div.classList.add('col-12');
            div.classList.add('col-md-4');
            div.classList.add('mb-5');
            div.classList.add('d-flex');
            div.classList.add('justify-content-center');

            div.innerHTML = `
            <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${c.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${c.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>${c.precio}€</p>
                <button class="btn btn-primary" id="${c.id}">Añadir al carrito</button>
            </div>
            </div>
        `

            div.querySelector('button').addEventListener('click', ()=>{
                agregarProductosAlCarrito(c.id);
            
            })

            tienda.appendChild(div);
        })
    })


    stock.forEach((p)=> {

        const producto = document.createElement('div');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML += `
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>${p.precio}€</p>
                <button class="btn btn-danger" id="${p.id}">Añadir al carrito</button>
            </div>
        </div>
        `
        
        tienda.appendChild(producto);
        
    })
    
    
}

const carrito = [];

renderizarProductos();

function agregarProductosAlCarrito(id){
    
    let producto = stock.find(producto => producto.id === id);

    let añadirCarrito = carrito.find(producto => producto.id === id);

    if(añadirCarrito){
        
        añadirCarrito.cantidad++;

        console.log(carrito);

        alert(`La cantidad del producto ${producto.nombre} fue modificada`);

    }else {
        
        producto.cantidad = 1;

        carrito.push(producto);

        console.log(carrito);

        alert('Producto agregado correctamente al carrito')
    }

    precioTotal();
}

function precioTotal(){

    let total = 0;

    carrito.forEach((p)=>{
    
        total += p.precio * p.cantidad;
    })

    console.log(total);

    const t = document.getElementById('total');

    t.innerHTML = `<h5>${total}€</h5>`

}
