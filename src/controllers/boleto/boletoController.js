const { Request, Response } = require('express')
const { BoletoService } = require('../../services')
const bcrypt = require('bcrypt')
const saltRounds = Number.parseInt(process.env.SALT_ROUNDS);
const jwt = require('jsonwebtoken');

class BoletoController {
    /** @type {BoletoService} */
    #service

    /**
     * @param {BoletoService} service 
     */
    constructor(service) {
        this.#service = service
    }

    /**
     * @param {Request} request 
     * @param {Response} response 
     */
    index = async (request, response) => {
        try {
           
            const result = await this.#service.getBoleto(request.params)
            
            if(result.error != undefined)
            return response.status(500).json(result)

            return response.status(200).json(result)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }
}

module.exports = BoletoController