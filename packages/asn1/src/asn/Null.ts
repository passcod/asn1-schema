import { ASNObject } from "./Object";

export class ASNNull extends ASNObject {

  public static override readonly DEFAULT_BER_IDENTIFIER = new Uint8Array([0x05]);

  public value = null;
}