import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}


export function ensureAuthenticated (req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [ , token ] = authToken.split(" ");

    try {
        const { sub } = verify(token, "1b8daf7f2eb170fbea27bd0a7d59095a") as IPayload;

        req.user_id = sub;
        return next();

    } catch (err) {
        res.status(401).end();
    }
}