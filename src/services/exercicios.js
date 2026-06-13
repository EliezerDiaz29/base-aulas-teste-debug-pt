class Service {

    validarParametroRaiz(num1) {
            if (num1 === null) {
                throw new Error("Envie todos os campos!");
            }
    
            if (isNaN(num1)) {
                throw new Error("Enviar somente números");
            }
        }

    validarParametros(num1, num2) {
        if (num1 === null || num2 === null) {
            throw new Error("Envie todos os campos!");
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Enviar somente números");
        }
    }

    Somar(num1, num2) {
        this.validarParametros(num1, num2);
        return num1 + num2;
    }

    Subtrair(num1, num2) {
        this.validarParametros(num1, num2);
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        this.validarParametros(num1, num2);
        return num1 * num2;
    }

    Dividir(num1, num2) { 
        this.validarParametros(num1, num2);

        if (num2 === 0) {
            return undefined;
        }

        return num1 / num2;
    }

    Potencia(num1, num2) {

        this.validarParametros(num1, num2);

        if (num1 < 0) {
            throw new Error("Não existe raiz real de número negativo");
        }
        
        return Math.pow(num1, num2);
    }
    
    Raiz(num1) {
        this.validarParametroRaiz(num1);
        return Math.sqrt(num1);
    }
}

export default new Service()