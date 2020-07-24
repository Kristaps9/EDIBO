import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      
<mat-form-field class="example-full-width" appearance="fill">
<mat-label>Izvelies datumu</mat-label>
<input matInput [matDatepicker]="picker">
<mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<button mat-raised-button (click)="picker.open()">Open</button>

<router-outlet></router-outlet>


    </p>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
