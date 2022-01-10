const { database } = require('../config')
const { BoletoRepository } = require('../repositories')
const { BoletoService } = require('../services')
const { BoletoController } = require('../controllers')

const repository = new BoletoRepository(database)
const service = new BoletoService(repository)
const controller = new BoletoController(service)

module.exports = {
    repository, 
    service, 
    controller
}