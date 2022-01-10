var configs = require('../../config/boletoFunctions');

class BoletoRepository {
  
    async getBoleto({boletoValue}) {
        return configs.checarTipoBoleto(String(boletoValue));
    }
}

module.exports = BoletoRepository