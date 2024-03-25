import OpenAI from "openai";
 interface Options {
    threadId: string;
    question: string;
 }
export const createMessageUseCase = async(openia: OpenAI, {threadId, question}: Options) => {
    const message = await openia.beta.threads.messages.create(threadId,{
        role: 'user',
        content: question
    });
    return message;
}