import { FastifyPluginAsync } from 'fastify';

export const courseRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async () => {
    return { success: true, data: [], message: 'Courses endpoint' };
  });

  fastify.post('/', async () => {
    return { success: true, message: 'Create course endpoint' };
  });
};
