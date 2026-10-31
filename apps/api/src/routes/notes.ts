import { FastifyPluginAsync } from 'fastify';

export const noteRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async () => {
    return { success: true, data: [], message: 'Notes endpoint' };
  });

  fastify.post('/', async (request, reply) => {
    return { success: true, message: 'Create note endpoint' };
  });
};
