import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  person = this.loadData();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    alert(this.person.name);
    localStorage.setItem('person', JSON.stringify(this.person));
  }

  private loadData(){
    const data = localStorage.getItem('person');
    return data    
    ? JSON.parse(data)
    : { name: 'Anonymous', email: '' }
  }

}
