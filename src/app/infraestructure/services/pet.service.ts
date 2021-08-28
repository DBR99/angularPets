import { Injectable } from '@angular/core';
import {PetDTO} from '../../domain/PetDTO';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
  ) {
  }

  public newPet(body: PetDTO) {
      localStorage.setItem('currentPet', JSON.stringify(body));
  }

  clear() {
    localStorage.clear();
  }
}

