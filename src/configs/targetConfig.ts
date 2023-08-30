import Target from "../interfaces/TargetInterface.ts";
import messageConfig from "./messageConfig.ts";

const targetConfig = (t: number, u: number) => {
  return {
    subject: "Assunto Importante",
    from: "Arduino Server <noreply.arduinoserver@gmail.com>",
    to: ["lucasrrodrigues2001@gmail.com", "raphaelassumpcao00@gmail.com", "dhominidasilvapereira@gmail.com", "renatocarvalho01234@gmail.com"],
    html: messageConfig(t, u),
  } as Target;
};

export default targetConfig;
