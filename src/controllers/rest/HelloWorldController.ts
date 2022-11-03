import { PathParams } from "@tsed/common";
import {Controller} from "@tsed/di";
import {Get, Returns, Summary} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return this.aFunction();
  }

  // @Get("/suma/:a/:b")
  // @Summary("Obtiene la suma de dos numeros")
  // @(Returns(200).Description("Obtiene expediente con datos para pago"))
  // suma(@PathParams("a") a: number, 
  //      @PathParams("b") b: number): number {
  //   try {
  //     if (a == 1) {
  //       return this._sumarDosNumeros(a, b);
  //     }
  //     return a + b;
  //   }
  //   catch (x) {
  //     x.status = 400;
  //     throw x;
  //   }
  // }

  aFunction() {
    return "hello";
  }

  _sumarDosNumeros(a: number, b: number){
    return a + b;
  }

  _dividirNumero (a:number, b:number){
    return a/b;
  }

  _multiplicarNumero (a:number, b:number){
    return a*b;
  }

  _convertirContrario (a: number){
    return a * (-1);
  }

  _sumaDigitos (a: number){
    if (a > 0){
      var digito = 0;
      for (let index = 0; index < a.toString().length; index++) {
         digito += Number (a.toString()[index]);
      }
      return digito;
    }
    else{
      return 0;
    }
  }

  _dividirNumeroCiclo (dividendo: number, divisor: number, cantidadVeces: number){
    var cociente = 0;
    for (let index = 0; index < cantidadVeces; index++) {
      cociente = this._dividirNumero(dividendo,divisor);
      dividendo = cociente;
   }
   return this._sumaDigitos(cociente);
  }

  _multiplicarNumeroCiclo (primerFactor: number, segundoFactor: number, cantidadVeces: number){
    var producto = 0;
    for (let index = 0; index < cantidadVeces; index++) {
      producto = this._multiplicarNumero(primerFactor,segundoFactor);
      primerFactor = producto;
   }
   return producto;
  }
}
