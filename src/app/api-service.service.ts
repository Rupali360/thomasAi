import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(public client: HttpClient) {}
  askAi(query: string) {
    return this.client.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyALK4trzVfOYUJE_YqipvbD-cLPpoMFCUA',
      {
        contents: [
          {
            parts: [{ text: query }],
          },
        ],
      }
    );
  }
}
