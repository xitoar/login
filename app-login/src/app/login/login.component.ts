import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(4)]],
      nombre:['', [Validators.required]],
   })
  }

  ngOnInit(): void {
  }

}
