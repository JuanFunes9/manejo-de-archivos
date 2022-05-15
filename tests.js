const Contenedor = require ( './products' );

const productos = new Contenedor();

productos.save( {
  title: 'Escuadra',
  price: 123.45,
  thumbnail: 'https://skribeargentina.com/wp-content/uploads/2018/07/411101.png'
} );
productos.save( {
  title: 'calculadora',
  price: 234.56,
  thumbnail: 'https://pngimg.com/uploads/calculator/calculator_PNG7939.png'
} );
productos.save( {
  title: 'Globo terraqueo',
  price: 420.23,
  thumbnail: 'https://www.kindpng.com/picc/m/427-4271015_transparent-globo-terraqueo-png-globo-terraqueo-con-luz.png'
} );

productos.getById( 5 )
  .then( data => console.log( data ) );

productos.getAll()
  .then( data => console.log( data ) );

productos.deleteById( 3 );

productos.deleteAll();
