import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService
{
  private http = inject(HttpClient)
  private user$ = new BehaviorSubject<any>({});

  public setUser = this.http.post(
    'https://restapi.fr/api/maximehdevweb',
    {
      firstName: 'John',
      lastname: 'Doe',
    }
)

  public changeUserName ()
  {
    const changeUser = { firstName: 'Marine', lastname: 'Dupont' }

    this.http.put('https://restapi.fr/api/maximehdevweb', changeUser).subscribe(
      updatedUser => {
      this.user$.next(updatedUser)
    })
  }

  public init(){
    this.http.delete('https://restapi.fr/api/maximehdevweb').subscribe()
    this.setUser.subscribe( updatedUser => {
      this.user$.next(updatedUser)
    })
  }

  public getUser() {
    this.http.get('https://restapi.fr/api/maximehdevweb')
    .subscribe(userData => {
      this.user$.next(userData);
    });

    return this.user$
  }
}
