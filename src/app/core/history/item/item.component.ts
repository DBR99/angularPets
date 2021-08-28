import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {inputNames} from '@angular/cdk/schematics';
import {DescriptionHistoryDTO} from '../../../domain/DescriptionHistoryDTO';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  displayModal: boolean;
  templateForm: FormGroup;
  @Input() item: DescriptionHistoryDTO;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.templateForm = this.formBuilder.group({
      idTemplate: ['', Validators.required],
      asuntoTemplate: ['', Validators.required],
      contenidoTemplate: ['', Validators.required],
      tipoTemplate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


}
