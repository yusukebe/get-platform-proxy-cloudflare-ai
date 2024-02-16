import { getPlatformProxy } from 'wrangler';
import { Ai } from '@cloudflare/ai';

const proxy = await getPlatformProxy();
const ai = new Ai(proxy.env.AI);

const answer = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
	prompt: 'What is the origin of the phrase Hello, World',
});

console.log(answer);

proxy.dispose();
