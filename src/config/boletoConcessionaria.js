var ChecarModulo = require('./checarModulos');
var ChecarData = require('./checarData');

module.exports = {
    converterConceissionaria : function(value) {


        const camposSeparados = [{ inicio: 0, fim: 11 }, { inicio: 12, fim: 23 }, { inicio: 24, fim: 35 }, { inicio: 36, fim: 47 }]
    
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
    
        var valorDoBoleto = value.slice(4, 11);
        valorDoBoleto = `${valorDoBoleto + value.slice(12, 16)}`
    
        var data = value.slice(16, 24);
        var boletoValorAbsoluto = value.slice(0, 11);
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(12, 23);
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(24, 35);
        boletoValorAbsoluto = boletoValorAbsoluto + value.slice(36, 47);
    
        var dataVencimento = new Date(`${data.slice(0, 4)}-${data.slice(4, 6)}-${data.slice(6, 8)}`);
        if (dataVencimento != "Invalid Date") {
            obj.expirationDate = ChecarData.checarSeExpirou(dataVencimento);
        }
        else {
            obj.expirationDate = 'Data Inválida ou inexistente';
        }
    
        obj.amount = Number(`${valorDoBoleto.slice(0, valorDoBoleto.length - 2)}.${valorDoBoleto.slice(valorDoBoleto.length - 2, valorDoBoleto.length)}`)
        obj.barCode = boletoValorAbsoluto;
    
        return obj;
    }
    
}