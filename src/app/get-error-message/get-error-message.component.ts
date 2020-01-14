import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-get-error-message',
  templateUrl: './get-error-message.component.html',
  styleUrls: ['./get-error-message.component.scss']
})
export class GetErrorMessageComponent implements OnInit {
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
