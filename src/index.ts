import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MultiselectDropdown } from './multiselect-dropdown';
import { MultiSelectSearchFilter } from './multiselect-search-filter';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    MultiselectDropdown
  ],
  declarations: [
    MultiselectDropdown,
    MultiSelectSearchFilter
  ]
})
export class MultiselectDropdownModule {}
