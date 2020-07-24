import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
    Pogas:
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle >Beidzot sanaca</mat-button-toggle>
      <mat-button-toggle >Domaju ka bus grutak</mat-button-toggle>
      <mat-button-toggle >bet tomer nebija tik gruti</mat-button-toggle>
    </mat-button-toggle-group>
    </p>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
