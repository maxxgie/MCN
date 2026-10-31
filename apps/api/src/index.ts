import Fastify from 'fastify';
import cors from '@fastify/cors';
import websocket from '@fastify/websocket';
import { DatabaseManager } from '@mcn/database';
import { userRoutes } from './routes/users';
import { noteRoutes } from './routes/notes';
import { courseRoutes } from './routes/courses';
import { aiRoutes } from './routes/ai';

const fastify = Fastify({
  logger: true
});

async function start() {
  try {
    // Initialize database
    const dbManager = DatabaseManager.getInstance('./data');
    await dbManager.initialize();
    console.log('Database initialized');

    // Register plugins
    await fastify.register(cors, {
      origin: true
    });
    await fastify.register(websocket);

    // Register routes
    await fastify.register(userRoutes, { prefix: '/api/users' });
    await fastify.register(noteRoutes, { prefix: '/api/notes' });
    await fastify.register(courseRoutes, { prefix: '/api/courses' });
    await fastify.register(aiRoutes, { prefix: '/api/ai' });

    // Health check
    fastify.get('/health', async () => {
      return { status: 'ok', timestamp: new Date().toISOString() };
    });

    // Root
    fastify.get('/', async () => {
      return { 
        name: 'MCN API',
        version: '0.1.0',
        description: 'Academic Operating System API'
      };
    });

    const port = parseInt(process.env.PORT || '3001');
    const host = process.env.HOST || '127.0.0.1';

    await fastify.listen({ port, host });
    console.log(`MCN API running on http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
