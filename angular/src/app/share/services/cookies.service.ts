import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: "root" })
export class CookiesService {

  constructor(private cookies: CookieService) { }
  get token() {
    return this.cookies.get("token")
  }

  get _id() {
    return this.cookies.get("_id")
  }

}