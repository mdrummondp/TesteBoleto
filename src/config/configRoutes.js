const { Express } = require('express')


/**
 * 
 * @param {Express} app 
 */


function configRoutes(app, { boleto }) {
    
    app.get('/boleto/:boletoValue', boleto.controller.index);
    
}

module.exports = configRoutes