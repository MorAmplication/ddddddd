/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ShaiService } from "../shai.service";
import { ShaiCreateInput } from "./ShaiCreateInput";
import { Shai } from "./Shai";
import { ShaiFindManyArgs } from "./ShaiFindManyArgs";
import { ShaiWhereUniqueInput } from "./ShaiWhereUniqueInput";
import { ShaiUpdateInput } from "./ShaiUpdateInput";

export class ShaiControllerBase {
  constructor(protected readonly service: ShaiService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Shai })
  async createShai(@common.Body() data: ShaiCreateInput): Promise<Shai> {
    return await this.service.createShai({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Shai] })
  @ApiNestedQuery(ShaiFindManyArgs)
  async shais(@common.Req() request: Request): Promise<Shai[]> {
    const args = plainToClass(ShaiFindManyArgs, request.query);
    return this.service.shais({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Shai })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shai(
    @common.Param() params: ShaiWhereUniqueInput
  ): Promise<Shai | null> {
    const result = await this.service.shai({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Shai })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateShai(
    @common.Param() params: ShaiWhereUniqueInput,
    @common.Body() data: ShaiUpdateInput
  ): Promise<Shai | null> {
    try {
      return await this.service.updateShai({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Shai })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShai(
    @common.Param() params: ShaiWhereUniqueInput
  ): Promise<Shai | null> {
    try {
      return await this.service.deleteShai({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
