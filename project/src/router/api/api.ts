import express from "express";

const apiRouter = express.Router();

apiRouter.use( '/a', () => {
    console.log( 0 );
} )

export = apiRouter;