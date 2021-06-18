import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.css']
})
export class StylePanelComponent implements OnInit {
  @Output() changeStyle = new EventEmitter<any>();
  fonts: string[];
  selectedFont: string;
  fontsSize: string[];
  selectedSize: string;
  colors: string[];
  visibleColor: boolean;
  visibleBgColor: boolean;
  selectedColor: string;
  selectedBgColor: string;
  selectedBoldStyle: boolean;
  selectedItalicStyle: boolean;
  selectedUnderlineStyle:boolean;
  constructor() {
    this.fonts = [
      'Times New Roman',
      'Tahoma',
      'Verdana'
    ];
    this.fontsSize = [
      '12pt',
      '14pt',
      '16pt',
      '18pt',
      '20pt',
      '22pt',
      '24pt'
    ];
    this.colors = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'white', 'blueviolet', 'darkcyan'];
    this.selectedFont = this.fonts[0];
    this.selectedSize = this.fontsSize[0];
    this.selectedColor = '#ffffff' ;
    this.selectedBgColor = '#4c4a4d';
    this.visibleColor = false;
    this.visibleBgColor = false;
    this.selectedBoldStyle = false;
    this.selectedItalicStyle = false;
    this.selectedUnderlineStyle=false;
  }

  ngOnInit(): void {
  }

  fontChange(font: string) {
    this.selectedFont = font;
    this.emitChangeStyle();
  }
  sizeChange(size: string) {
    this.selectedSize = size;
    this.emitChangeStyle();
  }
  colorChange(color:any){
    this.selectedColor = color;
    this.emitChangeStyle();
  }
  colorBgChange(bgColor:any){
    this.selectedBgColor = bgColor;
    this.emitChangeStyle();
  }
  weightChange(bold: boolean) {
    this.selectedBoldStyle = bold;
    this.emitChangeStyle();
  }
  styleChange(italic: boolean) {
    this.selectedItalicStyle = italic;
    this.emitChangeStyle();
  }
  underlineChange(underline: boolean) {
    this.selectedUnderlineStyle = underline;
    this.emitChangeStyle();
  }

  emitChangeStyle(){
    this.changeStyle.emit({
      font: this.selectedFont,
      size: this.selectedSize,
      color: this.selectedColor,
      bgColor: this.selectedBgColor,
      weight: this.selectedBoldStyle,
      italic: this.selectedItalicStyle,
      underline:this.selectedUnderlineStyle
    });
  }

}
