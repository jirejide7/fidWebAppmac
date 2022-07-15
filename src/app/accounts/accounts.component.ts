import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  customer: Customer = {
    id: 1,
    name: 'Olajire, Olajide',
    email: 'oolajide@gmail.com',
    phone: 123-456-7890
  };

  constructor() { }

  ngOnInit(): void {
  }

}
