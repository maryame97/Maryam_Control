import { Component, OnInit } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ContactUser } from 'src/modules/ContactUser';

import { NgModule } from '@angular/core';
import{ ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ContactComponent],
  imports: [
  CommonModule,
  ContactRoutingModule,
  ReactiveFormsModule,
  FormsModule

  ]

  })

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup;
  prenom: AbstractControl;
  nom: AbstractControl;
  email: AbstractControl;
  telephone: AbstractControl;
  contactUser : ContactUser;

  constructor() { }


  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formGroup.value.nom);
    console.log(this.formGroup.value.prenom);
    console.log(this.formGroup.value.telephone);
    console.log(this.formGroup.value.email);

     this.contactUser={
       nom:this.formGroup.value.nom,
       prenom: this.formGroup.value.prenom,
       email:this.formGroup.value.email,
       telephone:this.formGroup.value.telephone }

  }
}
