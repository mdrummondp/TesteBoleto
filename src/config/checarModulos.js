module.exports = {
    checarModulo10 : function(valor, numeroVerificacao) {
        
        var array = [];
        var multiplicador = 1;
        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        for (var i = valor.length - 1; i >= 0; i--) {
    
            if (multiplicador == 1) {
                multiplicador++;
            } else if (multiplicador == 2) {
                multiplicador--;
            }
    
            array.push(`${valor[i] * multiplicador}`);
    
        }
    
    
        var arrayTratado = array.map(e => {
            if (e.length > 1) {
                return Number(e[0]) + Number(e[1])
            } else {
                return Number(e[0])
            }
        })
    
        let valorTratado = (10 - arrayTratado.reduce(reducer) % 10) == 10 ? 0 : 10 - (arrayTratado.reduce(reducer) % 10);
    
        return valorTratado == numeroVerificacao ? true : false;
    },
    checarModulo11 : function (valor, numeroVerificacao) {

        var array = [];
        var multiplicador = 1;
        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        for (var i = valor.length - 1; i >= 0; i--) {
    
            if (multiplicador <= 9) {
                multiplicador++;
            }
    
            if (multiplicador == 10) {
                multiplicador = 2;
            }
            array.push(valor[i] * multiplicador);
    
        }
    
        let valorTratado = (array.reduce(reducer) * 10) % 11;
        return valorTratado == numeroVerificacao ? true : false;
    
    }
}