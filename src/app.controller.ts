import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { QuestionDto } from './dtos/question.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
@Get("/")
handleWelcom(){
  return {welcome: "la api esta funcionando"}
}
@Post("create-thread")
async handleCreateThread(){
 return this.appService.handleCreateThread()
}
@Post("user-question")
async handleUserQuestion(@Body() questionDto: QuestionDto){
  return this.appService.handleMakeAQuestion(questionDto);
}
}
