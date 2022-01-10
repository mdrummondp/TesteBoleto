var BoletoConvencional = require('./boletoConvencional');
var BoletoConcessionaria = require('./boletoConcessionaria')


module.exports = {
    checarTipoBoleto: function (value) {

        if (isNaN(value)) {
            return {error: 'Precisam ser apenas números'}
        }

        if (value.length < 47 || value.length > 48)
            return {error: 'Boleto inválido erro na quantidade de números!'};

        switch (value.length) {
            case 47:
                return BoletoConvencional.converterConvencional(value)
            case 48:
                return BoletoConcessionaria.converterConceissionaria(value)

        }
    }

}