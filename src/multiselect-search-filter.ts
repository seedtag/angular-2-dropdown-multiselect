import { Pipe } from '@angular/core';

import { IMultiSelectOption } from './multiselect-interfaces';

@Pipe({
  name: 'searchFilter'
})
export class MultiSelectSearchFilter {
  transform(options: Array<IMultiSelectOption>, args: string): Array<IMultiSelectOption> {
    return options.filter((option: IMultiSelectOption) =>
      option.name
        .toLowerCase()
        .indexOf((args || '').toLowerCase()) > -1);
  }
}
