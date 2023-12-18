import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService
{
  private http = inject(HttpClient)
  private user = {};

  public setUser = this.http.post(
    'https://restapi.fr/api/maximehdevweb',
    {
      firstName: 'John',
      lastname: 'Doe',
    }
)

  public async changeUserName ()
  {
    const changeUser = { firstName: 'Marine', lastname: 'Dupont' }

    this.user = await firstValueFrom(this.http.put('https://restapi.fr/api/maximehdevweb', changeUser));
    return this.user
  }

  public async init(){
    await firstValueFrom(this.http.delete('https://restapi.fr/api/maximehdevweb'));
    this.user = await firstValueFrom(this.setUser);
    return this.user
  }

  public async getUser() {
    this.user = await firstValueFrom(this.http.get('https://restapi.fr/api/maximehdevweb'))
    return this.user
  }
}
