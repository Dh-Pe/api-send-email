import { NextFunction, Request, Response } from "express";

export const HashVerify = (req: Request, res: Response, next: NextFunction) => {
  const { hash } = req.headers;
  const { temperatura } = req.body;

  if (hash == process.env.HASH) {
    if (temperatura) next();
    else res.status(400).send({ body: "Temperatura não especificada." });
  } else res.status(400).send({ body: "Hash inválido." });

  console.log('> Request Received');
};
