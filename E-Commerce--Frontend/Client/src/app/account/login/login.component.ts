import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [NgIf,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.returnUrl=this.activatedRoute.snapshot.queryParams['returnUrl'] || '/shop';
   }
  returnUrl:string="";
  loginForm= new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })


  ngOnInit(): void {
  }

  onSubmit()
  {
    this.accountService.login(this.loginForm.value).subscribe({
      next:user=>this.router.navigateByUrl(this.returnUrl)
    })
  }

}
