import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { checkStatusUseCase, createMessageUseCase, createRunUseCase, createThreadUseCase, getMessageListUseCase } from './use-case';
import { QuestionDto } from './dtos/question.dto';

@Injectable()
export class AppService {
  private openia = new OpenAI({
    apiKey: process.env.OPENIA_API_KEY
  })
  private assistantId = process.env.ASSISTANT_ID
  handleCreateThread = async() => {
    return  await createThreadUseCase(this.openia)
  }
  handleMakeAQuestion = async({threadId,question}: QuestionDto) => {
    await createMessageUseCase(this.openia,{threadId,question});
    const run = await createRunUseCase(this.openia,{threadId,assistantId: this.assistantId})
    await checkStatusUseCase(this.openia,{threadId,runId:run.id})
    const messages = await getMessageListUseCase(this.openia,{threadId})
    return messages.reverse();
  }
}
