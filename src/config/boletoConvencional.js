var ChecarModulo = require('./checarModulos');
var ChecarData = require('./checarData');

module.exports = {
    converterConvencional : function (value) {
    
        const camposSeparados = [{ inicio: 0, fim: 9 }, { inicio: 10, fim: 20 }, { inicio: 21, fim: 31 }]
    
        var modulos = { modulo10: true, modulo11: true };
    
        camposSeparados.map(e => {
    
            if (modulos.modulo10 == true) {
                if (ChecarModulo.checarModulo10(value.slice(e.inicio, e.fim), value.slice(e.fim, e.fim + 1)) == false) {
                    modulos.modulo10 = false;
                }
            }
    
            if (modulos.modulo11 == true) {
                if (ChecarModulo.checarModulo11(value.slice(e.inicio, e.fim), value.slice(e.fim, e.fim + 1)) == false) {
                    modulos.modulo11 = false;
                }
            }
        })
        
        if (modulos.modulo10 == false && modulos.modulo11 == false)
            return {error:'Numeração errada do boleto'}
    
    
        var obj = {};
    
        var valorDoBoleto = value.slice(37, 47);
        var boletoValorAbsoluto = value.slice(0, 4);//1
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(32, 33);//5
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(33, 47);//6
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(4, 9);//2
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(10, 20);//3
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(21, 31);//4
    
        var vencimento = value.slice(33, 37);
        var date = new Date('10/07/1997');
        date.setTime(date.getTime() + (vencimento * 24 * 60 * 60 * 1000));
        if (date != "Invalid Date") {
            obj.expirationDate = ChecarData.checarSeExpirou(date);
        }
        else {
            obj.expirationDate = 'Data Inválida';
        }
    
        obj.barCode = boletoValorAbsoluto;
        obj.amount = Number(`${valorDoBoleto.slice(0, valorDoBoleto.length - 2)}.${valorDoBoleto.slice(valorDoBoleto.length - 2, valorDoBoleto.length)}`).toFixed(2);
    
        return obj;
    }

}