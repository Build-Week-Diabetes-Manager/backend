
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
server.use( helmet());
server.use( cors());
server.use( express.json());
server.use( morgan('dev'));

//SANITY CHECk ⬇︎
server.get( '/' , ( req , res ) => {
    res.status(200).json({ message: 'Sup ✌🏼 -Server' })
});

//APPLYING ROUTES ⬇︎
 server.use( '/api/manager'  , restricted , managerRoute);
 server.use( '/api/users' , userRoute );

//EXPORTS ⬇︎
module.exports = server;