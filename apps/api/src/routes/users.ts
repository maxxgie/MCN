import { FastifyPluginAsync } from 'fastify';
import { CreateUserUseCase } from '@mcn/application';
import { SQLiteUserRepository } from '@mcn/database';

export const userRoutes: FastifyPluginAsync = async (fastify) => {
  const userRepository = new SQLiteUserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  fastify.post('/', async (request, reply) => {
    try {
      const body = request.body as any;
      const user = await createUserUseCase.execute(body);
      return { success: true, data: user };
    } catch (error: any) {
      reply.code(400);
      return { success: false, error: error.message };
    }
  });

  fastify.get('/', async () => {
    const users = await userRepository.findAll();
    return { success: true, data: users };
  });

  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const user = await userRepository.findById(id);
    if (!user) {
      reply.code(404);
      return { success: false, error: 'User not found' };
    }
    return { success: true, data: user };
  });
};
