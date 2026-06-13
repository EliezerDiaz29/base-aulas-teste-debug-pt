import { describe, it, expect } from "@jest/globals";
import Service from "../src/services/exercicios.js";

describe("Testes para função somar", () => {
  it("Deve somar dois numeros positivos  2 e 1, retornar 3", () => {
    const result = Service.Somar(2, 1);
    expect(result).toBe(3);
  });

  it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
    const result = Service.Somar(-2, -1);
    expect(result).toBe(-3);
  });

  it("Deve somar uma letra e um numero, deve retornar un error", () => {
    const result = () => Service.Somar("a", 1);
    expect(result).toThrow("Enviar somente números");
  });

  it("CT-001: Chamar a função somar, e enviar como primeiro parámetro 2 e, como segundo parámetro 95, debe retornar 97", () => {
    const result = Service.Somar(2, 95);
    expect(result).toBe(97);
  });

  it("CT-002: Chamar a função somar, e enviar como primeiro parametro -5, como segundo parametro 10, debe retornar 5", () => {
    const result = Service.Somar(-5, 10);
    expect(result).toBe(5);
  });

  it("CT-003 Chamar a função somar, e enviar como primeiro parametro 10, como segundo parametro -5, debe retornar 5", () => {
    const result = Service.Somar(10, -5);
    expect(result).toBe(5);
  });

  it("CT-004 Chamar a função somar, e enviar como primeiro parametro -5, como segundo parametro -10, debe retornar -15", () => {
    const result = Service.Somar(-5, -10);
    expect(result).toBe(-15);
  });

  it("CT-005 Chamar a função somar, e enviar como primeiro parametro 0.5, como segundo parametro 1.7, debe retornar 2.2, debe retornar 2.2", () => {
    const result = Service.Somar(0.5, 1.7);
    expect(result).toBe(2.2);
  });

  it("CT-008 Chamar a função somar, e enviar como primeiro parametro 0, como segundo parametro 1, debe retornar 1", () => {
    const result = Service.Somar(0, 1);
    expect(result).toBe(1);
  });

  it("CT-009 Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 0, debe retornar 1", () => {
    const result = Service.Somar(1, 0);
    expect(result).toBe(1);
  });

  it("CT-010 Chamar a função somar sem o primeiro parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    const result = () => Service.Somar(null, 2);
    expect(result).toThrow("Envie todos os campos!");
  });

  it("CT-011 Chamar a função somar sem o segundo parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    const result = () => Service.Somar(2, null);
    expect(result).toThrow("Envie todos os campos!");
  });

  it("CT-012 Chamar a função somar sem dos dois parmetros, A função irá retornar um erro - Envie todos os campos!", () => {
    const result = () => Service.Somar(null, null);
    expect(result).toThrow("Envie todos os campos!");
  });
});

describe("Testes para função de subtrair", () => {
  it("Deve subtrair dois numeros 2 e 1, retornar 1", () => {
    const result = Service.Subtrair(2, 1);
    expect(result).toBe(1);
  });

  it("CT-013: Chamar a função subtrair, e enviar como primeiro parametro 2, como segundo parametro 95, A função irá retornar -93", () => {
    const result = Service.Subtrair(2, 95);
    expect(result).toBe(-93);
  });

  it("CT-014: Chamar a função subtrair, e enviar como primeiro parametro -5, como segundo parametro 10, A função irá retornar -15", () => {
    const result = Service.Subtrair(-5, 10);

    expect(result).toBe(-15);
  });

  it("CT-015: Chamar a função subtrair, e enviar como primeiro parametro 10, como segundo parametro -5,  A função irá retornar 15", () => {
    const result = Service.Subtrair(10, -5);
    expect(result).toBe(15);
  });

  it("CT-016: Chamar a função subtrair, e enviar como primeiro parametro -5, como segundo parametro -10,  A função irá retornar 5", () => {
    const result = Service.Subtrair(-5, -10);
    expect(result).toBe(5);
  });

  it("CT-017: Chamar a função subtrair, e enviar como primeiro parametro 0.5, como segundo parametro 1.7,  A função irá retornar -1.2", () => {
    const result = Service.Subtrair(0.5, 1.7);
    expect(result).toBe(-1.2);
  });

  it("CT-018: Chamar a função subtrair, e enviar como primeiro parametro 'a', como segundo parametro 1, A função irá retornar um erro - Enviar somente números", () => {
    const result = () => Service.Subtrair("a", 1);
    expect(result).toThrow("Enviar somente números");
  });
  it("CT-019: Chamar a função subtrair, e enviar como primeiro parametro, 1, como segundo parametro 'a', a funçao irá retornar um erro -  Enviar somente números", () => {
    const result = () => Service.Subtrair(1, "a");
    expect(result).toThrow("Enviar somente números");
  });
  it("CT-020: Chamar a função subtrair, e enviar como primeiro para 0, e como segundo parametro 1, a função irá retornar -1", () => {
    7;
    const result = Service.Subtrair(0, 1);
    expect(result).toBe(-1);
  });

  it("CT-021: Chamar a função subtrair, e enviar como primeiro para 1, e como segundo parametro 0, a função irá retornar 1", () => {
    const result = Service.Subtrair(1, 0);
    expect(result).toBe(1);
  });

  it("CT-022: Chamar a função subtrair sem o primeiro parametro, a função irá retornar um erro - Envie todos os campos", () => {
    const result = () => Service.Subtrair(null, 1);
    expect(result).toThrow("Envie todos os campos");
  });

  it("CT-024: Chamar a função subtrair sem o segundo parametro, a função irá retornar um erro - Envie todos os campos", () => {
    const result = () => Service.Subtrair(1, null);
    expect(result).toThrow("Envie todos os campos");
  });

  it("CT-025: Chamar a função subtrair sem os dois parametros, a função irá retornar um erro - Envie todos os campos", () => {
    const result = () => Service.Subtrair(null, null);
    expect(result).toThrow("Envie todos os campos");
  });
});

describe("Teste para função multiplicar", () => {
  it("Deve multiplicar dois numeros 2 e 2, retornar 4", () => {
    const result = Service.Multiplicar(2, 2);
    expect(result).toBe(4);
  });

  it("CT-025: Chamar a função multiplicar, e enviar como primeiro parametro 2, como segundo parametro 95, A função irá retornar 190", () => {
    const result = Service.Multiplicar(2, 95);
    expect(result).toBe(190);
  });

  it("CT-026: Chamar a função multiplicar, e enviar como primeiro parametro -5, como segundo parametro 10, A função irá retornar -50", () => {
    const result = Service.Multiplicar(-5, 10);
    expect(result).toBe(-50);
  });

  it("CT-027: Chamar a função multiplicar, e enviar como primeiro parametro 10, como segundo parametro -5, A função irá retornar -50", () => {
    const result = Service.Multiplicar(10, -5);
    expect(result).toBe(-50);
  });

  it("CT-028: Chamar a função multiplicar, e enviar como primeiro parametro -5, como segundo parametro -10, A função irá retornar 50", () => {
    const result = Service.Multiplicar(-5, -10);
    expect(result).toBe(50);
  });

  it("CT-029: Chamar a função multiplicar, e enviar como primeiro parametro 0.5, como segundo parametro 1.7, A função irá retornar 0.85", () => {
    const result = Service.Multiplicar(0.5, 1.7);
    expect(result).toBe(0.85);
  });

  it("CT-030: Chamar a função multiplicar, e enviar como primeiro parametro 'a', como segundo parametro 1, A função irá retornar um erro - Enviar somente números", () => {
    expect(() => Service.Multiplicar("a", 1)).toThrow("Enviar somente números");
  });

  it("CT-031: Chamar a função multiplicar, e enviar como primeiro parametro 1, como segundo parametro 'a', A função irá retornar um erro - Enviar somente números", () => {
    expect(() => Service.Multiplicar(1, "a")).toThrow("Enviar somente números");
  });

  it("CT-032: Chamar a função multiplicar, e enviar como primeiro parametro 0, como segundo parametro 1, A função irá retornar 0", () => {
    const result = Service.Multiplicar(0, 1);
    expect(result).toBe(0);
  });

  it("CT-033: Chamar a função multiplicar, e enviar como primeiro parametro 1, como segundo parametro 0, A função irá retornar 0", () => {
    const result = Service.Multiplicar(1, 0);
    expect(result).toBe(0);
  });

  it("CT-034: Chamar a função multiplicar sem o primeiro parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Multiplicar(null, 1)).toThrow(
      "Envie todos os campos!"
    );
  });

  it("CT-035: Chamar a função multiplicar sem o segundo parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Multiplicar(1, null)).toThrow(
      "Envie todos os campos!"
    );
  });

  it("CT-036: Chamar a função multiplicar sem os dois parâmetros, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Multiplicar(null, null)).toThrow(
      "Envie todos os campos!"
    );
  });
});

describe("Teste para função divisão", () => {
  it("Deve dividir dois numeros positivos, 2 e 2, retornar 1", () => {
    const result = Service.Dividir(2, 2);
    expect(result).toBe(1);
  });

  it("CT-037: Chamar a função dividir, e enviar como primeiro parametro 2, como segundo parametro 95, A função irá retornar 0.02105263157", () => {
    const result = Service.Dividir(2, 95);
    expect(result).toBeCloseTo(0.02105263157);
  });

  it("CT-038: Chamar a função dividir, e enviar como primeiro parametro -5, como segundo parametro 10, A função irá retornar -0.5", () => {
    const result = Service.Dividir(-5, 10);
    expect(result).toBe(-0.5);
  });

  it("CT-039: Chamar a função dividir, e enviar como primeiro parametro 10, como segundo parametro -5, A função irá retornar -2", () => {
    const result = Service.Dividir(10, -5);
    expect(result).toBe(-2);
  });

  it("CT-040: Chamar a função dividir, e enviar como primeiro parametro -5, como segundo parametro -10, A função irá retornar 0.5", () => {
    const result = Service.Dividir(-5, -10);
    expect(result).toBeCloseTo(0.5);
  });

  it("CT-041: Chamar a função dividir, e enviar como primeiro parametro 0.5, como segundo parametro 1.7, A função irá retornar 0.2941176", () => {
    const result = Service.Dividir(0.5, 1.7);
    expect(result).toBeCloseTo(0.2941176);
  });

  it("CT-042: Chamar a função dividir, e enviar como primeiro parametro 'a', como segundo parametro 1, A função irá retornar um erro - Enviar somente números", () => {
    expect(() => Service.Dividir("a", 1)).toThrow("Enviar somente números");
  });

  it("CT-043: Chamar a função dividir, e enviar como primeiro parametro 1, como segundo parametro 'a', A função irá retornar um erro - Enviar somente números", () => {
    expect(() => Service.Dividir(1, "a")).toThrow("Enviar somente números");
  });

  it("CT-044: Chamar a função dividir, e enviar como primeiro parametro 0, como segundo parametro 1, A função irá retornar 0", () => {
    const result = Service.Dividir(0, 1);
    expect(result).toBe(0);
  });

  it("CT-045: Chamar a função dividir, e enviar como primeiro parametro 1, como segundo parametro 0, A função irá retornar Undefined", () => {
    const result = Service.Dividir(1, 0);
    expect(result).toBeUndefined();
  });

  it("CT-046: Chamar a função dividir sem o primeiro parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Dividir(null, 1)).toThrow("Envie todos os campos!");
  });

  it("CT-047: Chamar a função dividir sem o segundo parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Dividir(1, null)).toThrow("Envie todos os campos!");
  });

  it("CT-048: Chamar a função dividir sem os dois parâmetros, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Dividir(null, null)).toThrow("Envie todos os campos!");
  });
});

describe("Testes para a função de Potencia", () => {
  it("CT-049: Chamar a função potencia, e enviar como primeiro parametro 2, como segundo parametro 3, A função irá retornar 8", () => {
    const result = Service.Potencia(2, 3);
    expect(result).toBe(8);
  });

  it("CT-050: Chamar a função potencia, e enviar como primeiro parametro 5, como segundo parametro 2, A função irá retornar 25", () => {
    const result = Service.Potencia(5, 2);
    expect(result).toBe(25);
  });

  it("CT-051: Chamar a função potencia, e enviar como primeiro parametro 10, como segundo parametro 0, A função irá retornar 1", () => {
    const result = Service.Potencia(10, 0);
    expect(result).toBe(1);
  });

  it("CT-052: Chamar a função potencia, e enviar como primeiro parametro 0, como segundo parametro 5, A função irá retornar 0", () => {
    const result = Service.Potencia(0, 5);
    expect(result).toBe(0);
  });

  it("CT-053: Chamar a função potencia, e enviar como primeiro parametro -2, como segundo parametro 2, A função irá retornar 4", () => {
    const result = Service.Potencia(-2, 2);
    expect(result).toBe(4);
  });

  it("CT-054: Chamar a função potencia, e enviar como primeiro parametro -2, como segundo parametro 3, A função irá retornar -8", () => {
    const result = Service.Potencia(-2, 3);
    expect(result).toBe(-8);
  });

  it("CT-055: Chamar a função potencia, e enviar como primeiro parametro 3, como segundo parametro 4, A função irá retornar 81", () => {
    const result = Service.Potencia(3, 4);
    expect(result).toBe(81);
  });

  it("CT-056: Chamar a função potencia, e enviar como primeiro parametro 1, como segundo parametro 100, A função irá retornar 1", () => {
    const result = Service.Potencia(1, 100);
    expect(result).toBe(1);
  });

  it("CT-057: Chamar a função potencia, e enviar como primeiro parametro 'a', como segundo parametro 2, A função irá retornar um erro - Enviar somente números", () => {
    expect(() => Service.Potencia("a", 2)).toThrow("Enviar somente números");
  });

  it("CT-058: Chamar a função potencia, e enviar como primeiro parametro 2, como segundo parametro 'a', A função irá retornar um erro - Enviar somente números", () => {
    expect(() => Service.Potencia(2, "a")).toThrow("Enviar somente números");
  });

  it("CT-059: Chamar a função potencia sem o primeiro parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Potencia(null, 2)).toThrow("Envie todos os campos!");
  });

  it("CT-060: Chamar a função potencia sem o segundo parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Potencia(2, null)).toThrow("Envie todos os campos!");
  });

  it("CT-061: Chamar a função potencia sem os dois parâmetros, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Potencia(null, null)).toThrow(
      "Envie todos os campos!"
    );
  });
});

describe("Testes para função Raiz", () => {
  it("CT-062: Chamar a função raiz, e enviar como parametro 25, A função irá retornar 5", () => {
    const result = Service.Raiz(25);
    expect(result).toBe(5);
  });

  it("CT-063: Chamar a função raiz, e enviar como parametro 100, A função irá retornar 10", () => {
    const result = Service.Raiz(100);
    expect(result).toBe(10);
  });

  it("CT-064: Chamar a função raiz, e enviar como parametro 1, A função irá retornar 1", () => {
    const result = Service.Raiz(1);
    expect(result).toBe(1);
  });

  it("CT-065: Chamar a função raiz, e enviar como parametro 0, A função irá retornar 0", () => {
    const result = Service.Raiz(0);
    expect(result).toBe(0);
  });

  it("CT-066: Chamar a função raiz, e enviar como parametro 4, A função irá retornar 2", () => {
    const result = Service.Raiz(4);
    expect(result).toBe(2);
  });

  it("CT-067: Chamar a função raiz, e enviar como parametro 9, A função irá retornar 3", () => {
    const result = Service.Raiz(9);
    expect(result).toBe(3);
  });

  it("CT-068: Chamar a função raiz, e enviar como parametro 16, A função irá retornar 4", () => {
    const result = Service.Raiz(16);
    expect(result).toBe(4);
  });

  it("CT-069: Chamar a função raiz, e enviar como parametro 36, A função irá retornar 6", () => {
    const result = Service.Raiz(36);
    expect(result).toBe(6);
  });

  it("CT-070: Chamar a função raiz, e enviar como parametro 49, A função irá retornar 7", () => {
    const result = Service.Raiz(49);
    expect(result).toBe(7);
  });

  it("CT-071: Chamar a função raiz, e enviar como parametro 64, A função irá retornar 8", () => {
    const result = Service.Raiz(64);
    expect(result).toBe(8);
  });

  it("CT-072: Chamar a função raiz, e enviar como parametro 81, A função irá retornar 9", () => {
    const result = Service.Raiz(81);
    expect(result).toBe(9);
  });

  it("CT-073: Chamar a função raiz, e enviar como parametro 121, A função irá retornar 11", () => {
    const result = Service.Raiz(121);
    expect(result).toBe(11);
  });

  it("CT-074: Chamar a função raiz, e enviar como parametro 'a', A função irá retornar um erro - Enviar somente números", () => {
    expect(() => Service.Raiz("a")).toThrow("Enviar somente números");
  });

  it("CT-075: Chamar a função raiz sem parâmetro, A função irá retornar um erro - Envie todos os campos!", () => {
    expect(() => Service.Raiz(null)).toThrow("Envie todos os campos!");
  });

  it("CT-076: Chamar a função raiz, e enviar como parametro 10000, A função irá retornar 100", () => {
    const result = Service.Raiz(10000);
    expect(result).toBe(100);
  });
});
