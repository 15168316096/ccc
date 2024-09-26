import { ccc } from "@ckb-ccc/ccc";

export class SelectClientEvent extends Event {
  constructor(public client: ccc.Client) {
    super("select-client");
  }
}

export class ConnectedEvent extends Event {
  constructor(
    public readonly walletName: string,
    public readonly signerName: string,
  ) {
    super("connected");
  }
}

export class CloseEvent extends Event {
  constructor(public callback?: () => void) {
    super("close", { bubbles: true, composed: true });
  }
}
