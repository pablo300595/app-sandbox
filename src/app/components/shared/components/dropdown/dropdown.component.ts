import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() options: any[] = ['default'];
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string = '';

  // isOpen: boolean = false;

  // toggleDropdown() {
  //   this.isOpen = !this.isOpen;
  // }

  // selectOption(option: any) {
  //   this.selectedOption = option.starship_class.toUpperCase();
  //   this.isOpen = false;
  // }

  onOptionSelected(event: any) {
    this.selectedOption = event.target.value;
    this.optionSelected.emit(this.selectedOption);
  }
}
