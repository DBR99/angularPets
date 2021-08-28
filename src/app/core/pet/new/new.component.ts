import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PetService} from '../../../infraestructure/services/pet.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  formRegister: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private _pet: PetService
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formRegister = this.fb.group({
      name: this.fb.control('', Validators.required),
      type: this.fb.control('', Validators.required),
      age: this.fb.control('', Validators.required),
      size: this.fb.control('', Validators.required),
    });
  }

  get form() {
    return this.formRegister.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }
    this._pet.newPet(this.formRegister.getRawValue());
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formRegister.value, null, 4));
  }
}
