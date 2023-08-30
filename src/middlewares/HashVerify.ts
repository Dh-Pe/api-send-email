import { NextFunction, Request, Response } from "express";

export const HashVerify = (req: Request, res: Response, next: NextFunction) => {
  const { hash } = req.headers;
  const { temperatura, umidade } = req.body;

  if (hash == process.env.HASH) {
    if (temperatura && umidade) next();
    else res.status(400).send({ body: "Temperatura ou Umidade não especificado." });
  } else res.status(400).send({ body: "Hash inválido." });
};
