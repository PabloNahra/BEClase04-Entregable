/*
Desafio entregable
https://docs.google.com/presentation/d/1FJBmpiiweu7_GWpMI239H-YWmQLEJ1nmeyCWdluDL2o/edit#slide=id.g124cbfe83dc_4_8

Consigna
Realizar una clase “ProductManager” que gestione un conjunto de productos.

Aspectos a incluir
- Debe crearse desde su constructor con el elemento products, el cual será un arreglo (Lista de Python) vacío.
- Cada producto que gestione debe contar con las propiedades:
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)

Aspectos a incluir

- Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al agregarlo, debe crearse con un id autoincrementable

- Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados 
hasta ese momento

- Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”

*/

class ProductManager{
    constructor(){
        this.products = [];
    }

    static id = 0;

    getProducts(){
        return this.products
    }

    #getProduct(productCode){
        console.log("Producto a buscar")
        console.log(productCode)
        console.log(this.products.find(product => product.code === productCode))
        return this.products.find(product => product.code === productCode)
    }

    getProductById(productId){
        //const prod = ""
        const product = this.products.find(product => product.id === productId)
        if(product){
            return product
        }else{
            return "Not Found"
        }
    }

    addProduct(title, description, price, thumbnail, code, stock){
        // Validar que todas las variables tengan datos utilizables
        if (title && description && price && thumbnail && code && stock !== undefined && stock !== null) {
            ProductManager.id++

            const product = {
                id: ProductManager.id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }

            const prod = this.#getProduct(code)
            if (!prod){
                console.log("Agregar el producto porque no existe el codigo")
                this.products.push(product)
            }else{
                console.log("Código de producto existente")
            }
        }else{
            console.log("Debe completar todas las variables de productos con datos correctos")
        }
    }
}


// Probando el funcionamiento
const productos1 = new ProductManager

productos1.addProduct('Amiguris', 
'Muñecos de crochet', 
10, 
'https://www.littlebee.cl/ballena-l',
'001',
1
)

pro = productos1.getProducts()
console.log(pro)

productos1.addProduct('Amiguris 2', 
'Muñecos de crochet 2', 
20, 
'https://www.littlebee.cl/ballena-l',
'001',
2
)


pro = productos1.getProducts()
console.log(pro)


productos1.addProduct('Amiguris 2', 
'', 
20, 
'',
'003',
''
)

pro = productos1.getProducts()
console.log(pro)

console.log("proById")
proById = productos1.getProductById(1)
console.log(proById)

console.log("proById - Inexistente")
proById = productos1.getProductById(999)
console.log(proById)
