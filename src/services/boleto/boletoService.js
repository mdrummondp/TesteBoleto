const { BoletoRepository } = require('../../repositories')

class BoletoService {
    /** @type {BoletoRepository} */
    #repository

    /**
     * @param {BoletoRepository} repository 
     */
    constructor(repository) {
        this.#repository = repository
    }

    async getBoleto({ boletoValue }) {
        return await this.#repository.getBoleto({ boletoValue })
    }

}

module.exports = BoletoService