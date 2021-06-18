import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-final-text',
  templateUrl: './final-text.component.html',
  styleUrls: ['./final-text.component.css']
})
export class FinalTextComponent implements OnInit {
  innerHTML: string;
  safeHtml:any;
  info:any;
  locked: boolean;
  style:any;
  sanitizer: DomSanitizer;
  constructor(private domSanitizer: DomSanitizer) {
    this.sanitizer = domSanitizer;
    this.innerHTML = '<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>';
    this.safeHtml = this.innerHTML;
    this.locked = false;
    this.info={
      edit:false,
      style:false,
    };
    this.style={
      font:'Times New Roman',
      size: "12pt",
      color:"white",
      bgColor:"#4c4a4d",
      weight:false,
      italic: false
    };
  }

  ngOnInit(): void {
  }
  isVisible(messege:any){
    this.info=messege;
  }
  newInnerHtml(messege:string){
    this.innerHTML = messege;
    this.safeHtml=this.sanitizer.bypassSecurityTrustHtml(messege);
  }
  changeStyle(newStyle:any){
    this.style=newStyle;
  }
  lock(){
    this.locked = true;
  }
  unlock(){
    this.locked = false;
  }
}
