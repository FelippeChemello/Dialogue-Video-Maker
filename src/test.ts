import { GrokClient } from './clients/grok'
import { Agent } from './clients/interfaces/LLM';

export const grokClient = new GrokClient();

await grokClient.complete(Agent.NEWS_RESEARCHER, 'Generate detailed research about the latest news in technology, science, health, and world events. Provide comprehensive information with relevant data and context.');