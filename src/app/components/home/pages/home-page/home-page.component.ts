import { Component, computed } from '@angular/core';
import { StarshipService } from '../../../shared/services/starship.service';
import { map, mergeMap, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  starshipNameList$: any = this.starshipService.getNames().pipe(
    map(d => d.results)
  )
  starshipNameList: any = toSignal(this.starshipNameList$);

  constructor(private starshipService: StarshipService) {
  }

  ngOnInit(): void {
    
  }

}
