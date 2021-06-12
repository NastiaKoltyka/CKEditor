import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-final-text',
  templateUrl: './final-text.component.html',
  styleUrls: ['./final-text.component.css']
})
export class FinalTextComponent implements OnInit {
  innerHTML: string
  safeHtml:any
  info:any
  style:any
  sanitizer: DomSanitizer
  constructor(private domSanitizer: DomSanitizer) {
    this.sanitizer = domSanitizer;
    this.innerHTML = '<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>'
    this.safeHtml = this.innerHTML;
    this.info={
      edit:false,
      style:false
    }
    this.style={
      font:'Times New Roman',
      size: "12pt",
      color:"black",
      bgColor:"rgb(255 252 229)",
      weight:false,
      italic: false
    }
    this.sanitizer = domSanitizer;
  }

  ngOnInit(): void {
  }
  IsVisible(messege:any){
    this.info=messege
  }
  newInnerHtml(messege:string){
    this.innerHTML = messege;
    this.safeHtml=this.sanitizer.bypassSecurityTrustHtml(messege);
  }
  changeStyle(newStyle:any){
    this.style=newStyle
  }
}
