import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private readonly secretKey = environment.encryptionKey;

  encrypt(data: unknown): string {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
    } catch {
      return '';
    }
  }

  decrypt<T = unknown>(encryptedText: string): T | null {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);

      if (!decrypted) {
        return null;
      }

      return JSON.parse(decrypted) as T;
    } catch {
      return null;
    }
  }
}
