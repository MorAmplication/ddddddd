import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShaiServiceBase } from "./base/shai.service.base";

@Injectable()
export class ShaiService extends ShaiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
