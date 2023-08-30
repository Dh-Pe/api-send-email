import { Request, Response } from "express";
import nodemailer from "nodemailer";
import transporterConfig from "../configs/transporterConfig.ts";
import targetConfig from "../configs/targetConfig.ts";

export const handle = async (req: Request, res: Response) => {
  const { temperatura, umidade } = req.body;
  const transporter = nodemailer.createTransport(transporterConfig);
  const target = targetConfig(temperatura, umidade);

  transporter
    .sendMail(target)
    .then(() => res.send({ send: true }))
    .catch((err) => res.send({ send: false, error: err.toString() }))
    .finally(() => transporter.close());
};
