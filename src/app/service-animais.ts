import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceAnimais {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/listar/animais';

  listar(){
    return this.http.get<any[]>(this.apiUrl);
  }
}
