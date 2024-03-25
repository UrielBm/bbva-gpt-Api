import OpenAI from 'openai';
interface Options {
    threadId: string;
    assistantId?: string;
}
export const createRunUseCase = async(openia:OpenAI,{threadId, assistantId="asst_NIDHo9QFEOYpiznOniN1T69X"}: Options) => {
try {
    const run = await openia.beta.threads.runs.create(threadId,{
        assistant_id: assistantId,
    })
    return run
} catch (error) {
    console.error(error)
}
}