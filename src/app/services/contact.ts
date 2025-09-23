import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contact {
  sendMessage(payload: { name: string; email: string; message: string }): Promise<void> {
    // Simulate async send
    return new Promise((resolve) => setTimeout(resolve, 500));
  }
}
