"use strict";
const validarNotUSPhoneNumber = (numeroTelefonico) => {
    let formatoValido = /^(1\s)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return formatoValido.test(numeroTelefonico);
};
console.log(validarNotUSPhoneNumber("111 155 2345"));
//# sourceMappingURL=ejercicio4.js.map