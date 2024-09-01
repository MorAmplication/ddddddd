import { Module } from "@nestjs/common";
import { OpenaiService } from "./src/providers/openai/openai.service";

@Module({
  providers: [OpenaiService],
  exports: [OpenaiService],
})
export class OpenAIModule {}