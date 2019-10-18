import { ICoolThingInput } from "./models/cool-thing-input.interface";
import { ICoolThingOutput } from "./models/cool-thing-output.interface";

export const doCoolThings = (input: ICoolThingInput): ICoolThingOutput => {
  const returnObj: ICoolThingOutput = {
    id: input.id ? input.id : Math.floor(Math.random() * 1000 * 10),
    message: {
      code: Math.floor(Math.random() * 100),
      text: input.message
    },
    name: input.message
  };

  return returnObj;
}