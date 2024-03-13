import { Injectable, Logger } from '@nestjs/common';
import pino from 'pino';

@Injectable()
export class MyLoggerService {
  private readonly logger: pino.Logger;

  constructor() {
    this.logger = pino({
      level: 'info',
    });
  }

  log(message: string, context?: string) {
    this.logger.info(message, context);
  }

  error(message: string, trace?: string) {
    this.logger.error(message, trace);
  }
}
