import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerUpdateMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log(`Logging UPDATE request Ip: ${req.ip}`);
        console.log(`Logging UPDATE request Path: ${req.path}`);
        console.log(`Logging UPDATE request Headers: ${req.headers}`);
        next();
    }
}