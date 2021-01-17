import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public employees = [
    {
      first_name: 'Kate',
      last_name: 'Odey',
      age: 30,
      department: 'Histo Pathology',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
