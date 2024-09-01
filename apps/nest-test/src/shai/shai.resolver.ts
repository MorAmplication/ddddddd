import * as graphql from "@nestjs/graphql";
import { ShaiResolverBase } from "./base/shai.resolver.base";
import { Shai } from "./base/Shai";
import { ShaiService } from "./shai.service";

@graphql.Resolver(() => Shai)
export class ShaiResolver extends ShaiResolverBase {
  constructor(protected readonly service: ShaiService) {
    super(service);
  }
}
