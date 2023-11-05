class ProductManager {
    products = [];
    constructor () {

    }

    addProducto = (title, description, thumbnail, code, stock) => {
        let productoExistente = this.products.find(producto => producto.code === code);
        if (productoExistente) {
            console.log("El code del producto a agregar ya está siendo utilizado")
            return;
        }
        let producto = {
            id: this.generarIdUnico(),
            code: code,
            title: title,
            description: description,
            thumbnail: thumbnail,
            stock: stock
        }
        this.products.push(producto);
    }
    generarIdUnico() {
        const parteAleatoria = Math.random().toString(36).substr(2, 9); // Genera una cadena aleatoria de 9 caracteres
        const marcaDeTiempo = Date.now().toString(36); // Convierte la marca de tiempo a una cadena hexadecimal
        const idUnico = parteAleatoria + marcaDeTiempo; // Combina la parte aleatoria con la marca de tiempo
        return idUnico;
    }
    getProducts = () => {
        return(this.products)
    }

    getProductById = (id) => {
        let producto = this.products.find(producto => { 
            if (producto.id === id) {
                return (this.products);
            }else{
                
                return(null);
            } 
        })
        if (!producto) {
            console.log("Not found!")
        }
        return(producto);
    }
}

//*************************************************************** */
//****PRUEBA DE LA CLASE ProductManager ****/

let productoManager = new ProductManager()

productoManager.addProducto("Artic1", "Tomate al natural", "/imagenes.artic1", "1", "5")
productoManager.addProducto("Artic1", "Tomate al natural", "/imagenes.artic2", "2", "5")
// console.log("****Productos******")
// console.log(...productoManager.products)
console.log("***Validacion en addProducto de Code ya existente")
productoManager.addProducto("Artic3", "Tomate al natural", "/imagenes.artic3", "2", "5")


console.log("****Productos x getProducts******");
const productos = productoManager.getProducts();
console.log(...productos);

console.log("***Prueba getProductById *****")
console.log("Con id existente");
// console.log("Id. producto posicion 1: " + productos[1].id)
let productoById = productoManager.getProductById(productos[1].id);
console.log(productoById);
// productoById = productoManager.getProductById(1);
console.log("**** Con id inexistente***");
productoById = productoManager.getProductById(1);
console.log(productoById);

//*********** FIN PRUEBAS ****************************** */
