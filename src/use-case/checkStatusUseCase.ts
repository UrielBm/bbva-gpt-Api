import OpenAI from "openai";

interface Options {
    threadId: string,
    runId: string,
}
export const checkStatusUseCase = async(openia: OpenAI,{threadId,runId}: Options) => {
    try {
        const runStatus = await openia.beta.threads.runs.retrieve(threadId,runId)
        if(runStatus.status === "completed"){
            return runStatus
        }
        //Esperar un segundo
        await new Promise(resolve => setTimeout(resolve,1000));
        //Función recursiva.
        return await checkStatusUseCase(openia,{threadId,runId});
    } catch (error) {
        console.log(error)
    }
}