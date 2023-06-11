import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';

process.on('uncaughtException', err => {
  // eslint-disable-next-line no-console
  console.log('Uncaught Exception is detected ', err);
  process.exit(1);
});

let server: Server;
async function connectDb() {
  try {
    await mongoose.connect(config.mongo_uri as string);
    logger.info(`Database is connected successfully`);
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error(err);
  }

  process.on('unhandledRejection', error => {
    // eslint-disable-next-line no-console
    console.log('Unhandled Rejection is detected ,we are closing our server');
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

connectDb();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is Received');
  if (server) {
    server.close();
  }
});
