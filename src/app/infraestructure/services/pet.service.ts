import {Injectable} from '@angular/core';
import {PetDTO} from '../../domain/PetDTO';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private router: Router) {
  }

  public newPet(body: PetDTO) {
    localStorage.setItem('currentPet', JSON.stringify(body));
    this.router.navigate(['/']);
  }

  clear() {
    localStorage.clear();
  }
}

