import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-test-error',
  imports: [NgIf,NgFor],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})

export class TestErrorComponent implements OnInit {
  baseUrl =environment.apiUrl;
  validationErrors: string[] = []
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  get404Error() {
    this.http.get(this.baseUrl + 'products/42').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400ValidationError() {
    this.http.get(this.baseUrl + 'products/fortytwo').subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors = error.errors;
      }
    })
  }

}