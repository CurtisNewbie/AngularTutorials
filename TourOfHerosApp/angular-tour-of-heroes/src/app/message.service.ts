import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  addMessage(mess: string): void {
    if (mess != null) {
      this.messages.push("[" + new Date().toString() + '] "' + mess + '"');
    }
  }

  clearMessages(): void {
    this.messages = [];
  }
}
