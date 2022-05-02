import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { HomeComponent } from '../home/home.component';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginOk: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceService: ServiceService, private dataService: DataServiceService){ 
  
    this.form = this.formBuilder.group({      
      usuario:['', [Validators.required]],
      password:['',[Validators.required, Validators.minLength(4)]],
   })
  }

  logear(){
    if (this.form.valid){      
      this.serviceService.login(this.form.value).subscribe(data => {
        this.loginOk = data;
        if (data == true){
        this.router.navigate(['/home']);        
        this.dataService.mensaje = "LOGIN OK"
        }else{
          alert("Datos cargados erroneos")
        }
      });
    }else{
      alert("Datos cargados incompletos")
    }
  }

  

  ngOnInit(): void {
  }

}
