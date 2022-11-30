import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form3',
  templateUrl: './template-driven-form3.component.html',
  styleUrls: ['./template-driven-form3.component.css']
})
export class TemplateDrivenForm3Component implements OnInit {
  myForm: FormGroup = new FormGroup(    {email: new FormControl(null, [Validators.required, Validators.email]),
name:new FormControl(null,[Validators.required]),number:new FormControl(null,[Validators.required])

  });
  constructor() { }

  ngOnInit(): void {

  }
  ajouter()
  {
    if (this.myForm.invalid) {
      alert(`now we're safe - an invalid form will not be submitted :)`);
      return;
    }
    alert('I AM SUBMITTING THE FORM TO THE BACKEND!');
  }


}
