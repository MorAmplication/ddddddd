import { Module } from "@nestjs/common";
import { ShaiModuleBase } from "./base/shai.module.base";
import { ShaiService } from "./shai.service";
import { ShaiController } from "./shai.controller";
import { ShaiResolver } from "./shai.resolver";

@Module({
  imports: [ShaiModuleBase],
  controllers: [ShaiController],
  providers: [ShaiService, ShaiResolver],
  exports: [ShaiService],
})
export class ShaiModule {}
