import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { QuestionDto } from './dtos/question.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Post("create-thread")
async handleCreateThread(){
 return this.appService.handleCreateThread()
}
@Post("user-question")
async handleUserQuestion(@Body() questionDto: QuestionDto){
  return this.appService.handleMakeAQuestion(questionDto);
}
}
