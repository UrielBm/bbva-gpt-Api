import OpenAI from "openai"

interface Options{ 
    threadId: string;
}
export const getMessageListUseCase = async(openia: OpenAI, {threadId}:Options) => {
    try {
        const messageList = await openia.beta.threads.messages.list(threadId);

        const messages = messageList.data.map(message => ({
            role: message.role,
            content: message.content.map(content => (content as any).text.value)
        }))
        return messages
    } catch (error) {
    console.log(error)       
    }
}