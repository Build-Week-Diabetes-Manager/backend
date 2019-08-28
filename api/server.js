
//IMPORTS ⬇︎
const express = require( 'express' );
const helmet = require( 'helmet' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );
const server = express();
const restricted = require( '../routers/auth/restricted' );


//GETTING ROUTES ⬇︎
const managerRoute = require( '../routers/manager/managerRouter' );
const userRoute = require( '../routers/auth/authRouter' );

//GLOBAL MIDDLEWARE ⬇︎
server.use( express.json());
server.use( helmet());
server.use( morgan('dev'));
server.use( cors());

//APPLYING ROUTES ⬇︎
 server.use( '/api/manager' , managerRoute , restricted );
 server.use( '/api/users' , userRoute );

//SANITY CHECk ⬇︎
server.get( '/' , ( req , res ) => {
    res.status(200).json({ message: 'Sup ✌🏼 -Server' })
});

//EXPORTS ⬇︎
module.exports = server;