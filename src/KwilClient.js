import { kwil, dbid, signer } from "./hello";
import { Utils } from "kwil";

export class KwilClient {
  async addGreeting(id, msg) {
    const inputs = new Utils.ActionInput().put("$id", id).put("$message", msg);

    const actionTx = await kwil
      .actionBuilder()
      .dbid(dbid)
      .name("insert_greeting")
      .concat(inputs)
      .signer(signer)
      .buildTx();

    return await kwil.broadcast(actionTx);
  }

  async readGreetings() {
    const actionTx = await kwil
      .actionBuilder()
      .dbid(dbid)
      .name("select_greetings")
      .signer(signer)
      .buildTx();

    return await kwil.broadcast(actionTx);
  }
}
