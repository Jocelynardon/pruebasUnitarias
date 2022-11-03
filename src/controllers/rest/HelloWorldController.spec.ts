import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("1 + 1 debe ser 2", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    const primerNumero = 1;
    const segundoNumero = 1;
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toBe(2);
  });

  test("Convierte el -18 a positivo", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    const numeroConvertir = -18;
    expect(instance._convertirContrario(numeroConvertir)).toBe(18);
  });
  
  test("Suma cada posición de un número", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    const numeroSumar = 46980;
    expect(instance._sumaDigitos(numeroSumar)).toBe(27);
  });

  test("Divide dos números la cantidad de veces que se le indique y suma los dígitos del resultado", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    const dividendo = 15450;
    const divisor = 5;
    const cantidadVeces = 2
    let controlDivision = jest.spyOn (instance, "_dividirNumero");
    expect(instance._dividirNumeroCiclo(dividendo,divisor,cantidadVeces)).toBe(15);
    expect(controlDivision).toBeCalledTimes(2);
  });

  test("Multiplicación con cantidad de veces", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    const primerFactor = 4;
    const segundoFactor = 6;
    const cantidadVeces = 3
    jest.spyOn(instance, "_multiplicarNumero").mockReturnValueOnce(12);
    expect(instance._multiplicarNumeroCiclo(primerFactor,segundoFactor,cantidadVeces)).toStrictEqual(432);
    expect(instance._multiplicarNumeroCiclo(primerFactor,segundoFactor,cantidadVeces)).toBe(864);
  });

  // 
});
