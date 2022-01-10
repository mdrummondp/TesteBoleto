module.exports = {
    checarSeExpirou: function (data) {
        if (data >= new Date()) {

            return ("0" + (data.getDate())).slice(-2) + '/' + ("0" + (data.getMonth() + 1)).slice(-2) + '/' + data.getFullYear();

        } else {
            return "Data expirada no dia: " + ("0" + (data.getDate())).slice(-2) + '/' + ("0" + (data.getMonth() + 1)).slice(-2) + '/' + data.getFullYear();
        }
    }
}