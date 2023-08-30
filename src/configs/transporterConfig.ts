import dotenv from 'dotenv';
import Transporter from "../interfaces/TransporterInterface.ts";
dotenv.config();

const config = {
  host: process.env.HOST,
  user: process.env.USER,
  pass: process.env.PASS,
};

const transporterConfig: Transporter = {
  host: config.host,
  port: 587,
  secure: false,
  auth: {
    user: config.user,
    pass: config.pass,
  },
  requireTLS: true,
};

export default transporterConfig;
