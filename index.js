//IMPORTS ⬇︎
require( 'dotenv' ).config();
const server = require( './api/server' );

//PORT SETUP ⬇︎
const port = process.env.PORT || 4000;

//INITIATING PORT ⬇︎
server.listen( port , () => {
    console.log( `\n Your server is up on http://localhost:${port} \n` )
});
