import { FastifyPluginAsync } from 'fastify';

export const aiRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/models', async () => {
    return { 
      success: true, 
      data: [
        { id: 'gpt-4', name: 'GPT-4', provider: 'openai' },
        { id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'claude' },
        { id: 'gemini-pro', name: 'Gemini Pro', provider: 'gemini' },
        { id: 'deepseek-chat', name: 'DeepSeek Chat', provider: 'deepseek' },
        { id: 'llama-2', name: 'Llama 2', provider: 'llama' }
      ]
    };
  });

  fastify.post('/chat', async (request, reply) => {
    return { success: true, message: 'AI chat endpoint - Campus AI' };
  });
};
