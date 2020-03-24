import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor() {
  }
}
