import { Component } from '@angular/core';

@Component({
  selector: 'app-graphica1',
  templateUrl: './graphica1.component.html',
  styles: [
  ]
})
export class Graphica1Component {

  public labels1 = ['Pan', 'Leche', 'huevos'];
  public data1 = [
    [5, 2, 12]
  ];
  public colors1 = [
    { backgroundColor: ['#4fb914', '#c85400', '#b31f95'] }
  ]
}
