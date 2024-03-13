import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const contextId = 'Global';

    Logger.log(
      `[${contextId}] Incoming Request: ${req.method} ${req.url}`,
      'Request',
    );

    if (req.body) {
      Logger.log(
        `[${contextId}] Request Body: ${JSON.stringify(req.body)}`,
        'Request',
      );
    }

    res.on('finish', () => {
      Logger.log(
        `[${contextId}] Outgoing Response: ${res.statusCode} ${
          Date.now() - startTime
        }ms`,
        'Response',
      );
    });

    next();
  }
}
