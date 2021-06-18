import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Output() unlock = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.unlock.emit();
    }
  }
}
