import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() AddTable = new EventEmitter<string>();
  @Output() AddList = new EventEmitter<string>();
  selectedItem: string;
  defaultColor: string;
  defaultBorder: string;
  defaultType: string;
  table:string
  list:string
  constructor() {
    this.selectedItem = 'table';
    this.defaultColor = 'black';
    this.defaultBorder = 'solid';
    this.defaultType = 'circle';
    this.table=''
    this.list=''
  }

  ngOnInit(): void {
  }
  addTable(settings: any) {
    this.createTable(settings)
    this.AddTable.emit(this.table);
  }
  addList(settings: any) {
    this.createList(settings)
    this.AddTable.emit(this.list);
  }
  showPreview(setting:any){
    this.createTable(setting)
  }
  showPreviewList(setting:any){
    this.createList(setting)
  }
  createTable(settings:any){
    this.table = `<table>`;
    for (let i = 0; i < settings.countRow; i++) {
      this.table += `<tr>`;
      for (let j = 0; j < settings.countCell; j++) {
        this.table += `<td style="width:${settings.widthCell}px; height:${settings.heightCell}px; border:${settings.borderWidth}px ${settings.borderType} ${settings.borderColor}">TD</td>`;
      }
      this.table += `</tr>`;
    }
    this.table += '</table>';
  }
  createList(settingsList: any) {
    this.list = `<ul style="list-style-type: ${settingsList.type}">`;
    for (let i = 0; i < settingsList.countLi; i++) {
      this.list += `<li>item ${i + 1}</li>`;
    }
    this.list += '</ul>';
  }
}
