import { Pipe } from '@angular/core';

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
