import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService
{
  private http = inject(HttpClient)
  private nameSubject = new BehaviorSubject<any>([
    {
      firstName: 'John',
      lastname: 'Doe',
    },
  ])

  name$ = this.nameSubject.asObservable()

  public initUser = [
    {
      firstName: 'John',
      lastname: 'Doe',
    },
  ]

  public setUser = this.http.post(
    'https://restapi.fr/api/maximehdevweb', this.initUser)

  public changeUserName ()
  {
    // this.http.delete('https://restapi.fr/api/maximehdevweb').subscribe()
    // this.setUser.subscribe()
    const changeUser = { firstName: 'Marine', lastname: 'Dupont' }

    this.http.put('https://restapi.fr/api/maximehdevweb', changeUser).subscribe(
      updatedUser => {
      this.nameSubject.next(updatedUser)
    })
  }

  public getName() {
    this.http.get('https://restapi.fr/api/maximehdevweb')
    .subscribe(userData => {
      this.nameSubject.next(userData);
    });

    return this.name$;
  }
}
