//Desafio de la clase 4
const fs = require ( 'fs' );

let products = [];

class Contenedor {

  //METODOS:
  //recibe un objeto, lo guarda en el archivo 'productos.txt' y devuelve el ID asignado:
  async save( objet ){

    try {
      objet.id = products.length + 1;
      products.push( objet );
      await fs.promises.writeFile( './productos.txt', JSON.stringify( products, null, '\t' ) );
      console.log( `El producto fue agregado con éxito. ID asignado: ${ objet.id }`);
    }
    catch ( err ) {
      console.log( 'Hubo un error al intentar agregar el objeto: ' + err )
    }

    return objet.id;
  }

  //recibe un ID y devuelve el objeto correspondiente. devuelve null si el id no existe
  async getById( id ){

    try {
      const read = await fs.promises.readFile( './productos.txt', 'utf-8' );
      const readArray = JSON.parse( read );

      const product = readArray.find( prod => {
        return prod.id === id;
      });

      if ( product === undefined ){
        return null;
      } else {
        return product;
      }
    }
    catch ( err ) {
      console.log( 'Error al buscar producto por ID: ', err )
    }

  }

  //devuelve un ARRAY con los objetos presentes en el archivo
  async getAll(){

    try {
      const read = await fs.promises.readFile( './productos.txt', 'utf-8' );
      const readArray = JSON.parse( read );

      return readArray;
    }
    catch ( err ) {
      console.log( 'Error al retornar los objetos: ', err )
    }

  }

  //elimina del archivo el objeto con el id buscado
  async deleteById( id ){

    try {
      const read = await fs.promises.readFile( './productos.txt', 'utf-8' );
      const readArray = JSON.parse( read );

      const prodDeleteIndex = readArray.findIndex( prod => {
        return prod.id === id
      } );

      readArray.splice( prodDeleteIndex, 1 );

      await fs.promises.writeFile( './productos.txt', JSON.stringify( readArray, null, '\t' ) );
      console.log( 'El producto fue eliminado satisfactoriamente.' );
    }
    catch ( err ) {
      console.log( 'Error al eliminar producto: ', err );
    }


  }

  //elimina todos los objetos presentes en el archivo
  async deleteAll(){

    try {
      products = [];
      await fs.promises.writeFile( './productos.txt', JSON.stringify( products ) );
      console.log( 'Los productos han sido eliminados con exito.' );
    }
    catch ( err ) {
      console.log( 'Error al borrar los productos: ', err );
    }

  }

}

module.exports = Contenedor;