import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginOk: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceService: ServiceService ){ 
  
    this.form= this.formBuilder.group({      
      nombre:['', [Validators.required]],
      password:['',[Validators.required, Validators.minLength(4)]],
   })
  }

  logear(){
    if (this.form.valid){      
      this.serviceService.login(this.form.value).subscribe(data => {
        this.loginOk = data;
        this.router.navigate(['/home']);
        console.log(this.loginOk);
      });
    }else{
      alert("Datos cargados incompletos")
    }
  }

  

  ngOnInit(): void {
  }

}
