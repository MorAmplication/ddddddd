import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShaiService } from "./shai.service";
import { ShaiControllerBase } from "./base/shai.controller.base";

@swagger.ApiTags("shais")
@common.Controller("shais")
export class ShaiController extends ShaiControllerBase {
  constructor(
    protected readonly service: ShaiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
