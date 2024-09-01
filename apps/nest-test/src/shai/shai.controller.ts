import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShaiService } from "./shai.service";
import { ShaiControllerBase } from "./base/shai.controller.base";

@swagger.ApiTags("shais")
@common.Controller("shais")
export class ShaiController extends ShaiControllerBase {
  constructor(protected readonly service: ShaiService) {
    super(service);
  }
}
