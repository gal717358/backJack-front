/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
const customFetch: (url: string, headers: RequestInit) => Promise<any> = (
  url: string,
  headers: RequestInit
) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );

class Api {
  baseUrl: string;

  headers: RequestInit;

  constructor({ baseUrl, headers }: { baseUrl: string; headers?: any }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  startGame() {
    return customFetch(`${this.baseUrl}/start`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  hit() {
    return customFetch(`${this.baseUrl}/hit`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  stay() {
    return customFetch(`${this.baseUrl}/stay`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
});

export default api;
