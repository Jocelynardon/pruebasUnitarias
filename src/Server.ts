import {join} from "path";
import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import "@tsed/ajv";
import {config} from "./config/index";
import * as rest from "./controllers/rest/index";
import {Controller} from "@tsed/di";
import {Get, Returns, Summary} from "@tsed/schema";
import { PathParams } from "@tsed/common";

@Controller("/hello-world")
export class Server {

  @Get("/multiplicar/:a/:b")
  @Summary("Obtiene la multiplicación de dos numeros")
  @(Returns(200).Description("Obtiene expediente con datos para pago"))
  multiplicar(@PathParams("a") a: number, 
       @PathParams("b") b: number): number {
    try {
      if (a == 1) {
        return this._multiplicarDosNumeros(a, b);
      }
      return a + b;
    }
    catch (x) {
      x.status = 400;
      throw x;
    }
  }

  _multiplicarDosNumeros(a: number, b: number){
    return a * b;
  }
  
}
