import {Component, OnInit} from '@angular/core';
import {DescriptionHistoryDTO} from '../../../domain/DescriptionHistoryDTO';
import {PetDTO} from '../../../domain/PetDTO';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  items = new Array<DescriptionHistoryDTO>();
  pet: PetDTO;

  constructor() {
    this.items = [
      {
        description: 'vacunacion',
        date: '10/03/2020',
        observations: 'Sin observaciones'
      },
      {
        description: 'consulta',
        date: '10/03/2020',
        observations: 'Fiebre'
      },
      {
        description: 'corte de pelo',
        date: '10/03/2020',
        observations: 'Sin observaciones'
      },
      {
        description: 'corte de pelo',
        date: '10/03/2020',
        observations: 'Sin observaciones'
      },
      {
        description: 'corte de pelo',
        date: '10/03/2020',
        observations: 'Sin observaciones'
      }
    ];
    for (const item of this.items) {
      switch (item.description) {
        case 'vacunacion':
          item.icon = ' icon-syringe color-purple font-30';
          break;
        case 'consulta':
          item.icon = 'icon-local_hospital color-blue icon-circle font-30';
          break;
        case 'corte de pelo':
          item.icon = ' icon-content_cut color-coral font-30';
          break;
      }
    }
  }

  ngOnInit() {
  }

}
