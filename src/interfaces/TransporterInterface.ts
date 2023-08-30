import Auth from "./AuthInterface";

export default interface Transporter {
  host: string | undefined;
  port: number | undefined;
  secure: boolean | undefined;
  auth: Auth | undefined;
  requireTLS: boolean | undefined;
}
