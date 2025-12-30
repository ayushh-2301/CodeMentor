
import OpenAI from "openai"

export const openai = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL || "https://api.deepseek.com/v1",
})

export async function generateHint(code: string, problemContent: string, previousHints: string[]) {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are an intelligent coding mentor. 
        Your goal is to help the user solve a programming problem WITHOUT giving the direct solution.
        Analyze the user's code and the problem description.
        Provide a concise, helpful hint that nudges them in the right direction.
        If previous hints were given, provide a more specific hint this time.
        Format your response in Markdown.`
            },
            {
                role: "user",
                content: `
        Problem: ${problemContent}
        
        User's Code:
        \`\`\`
        ${code}
        \`\`\`
        
        Previous Hints:
        ${previousHints.join("\n")}
        `
            }
        ],
        model: "deepseek-chat", // or appropriate model name
        stream: true,
    })

    return completion
}
