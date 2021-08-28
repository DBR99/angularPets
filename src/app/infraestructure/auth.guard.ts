import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let pet = JSON.parse(localStorage.getItem('currentPet'));
    if (pet) {
      return true;
    }
    this.router.navigate(['/', 'ingreso']);
    return false;
  }
}
