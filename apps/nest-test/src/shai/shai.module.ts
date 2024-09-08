import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShaiModuleBase } from "./base/shai.module.base";
import { ShaiService } from "./shai.service";
import { ShaiController } from "./shai.controller";
import { ShaiResolver } from "./shai.resolver";

@Module({
  imports: [ShaiModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShaiController],
  providers: [ShaiService, ShaiResolver],
  exports: [ShaiService],
})
export class ShaiModule {}
