import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() AddTable = new EventEmitter<string>()
  @Output() AddList = new EventEmitter<string>()
  selectedItem: string;
  defaultColor: string;
  defaultBorder: string;
  defaultType: string
  constructor() {
    this.selectedItem = 'table'
    this.defaultColor = 'black'
    this.defaultBorder = 'solid'
    this.defaultType = 'circle'
  }

  ngOnInit(): void {
  }
  createTable(settings: any) {
    let table = `<table>`;
    for (let i = 0; i < settings.countRow; i++) {
      table += `<tr>`;
      for (let j = 0; j < settings.countCell; j++) {
        table += `<td style="width:${settings.widthCell}px; height:${settings.heightCell}px; border:${settings.borderWidth}px ${settings.borderType} ${settings.borderColor}">TD</td>`;
      }
      table += `</tr>`;
    }
    table += '</table>';
    this.AddTable.emit(table)
  }
  createList(settingsList: any) {
    let list = `<ul style="list-style-type: ${settingsList.type}">`;
    for (let i = 0; i < settingsList.countLi; i++) {
      list += `<li>item ${i + 1}</li>`;
    }
    list += '</ul>';
    this.AddList.emit(list)
  }

}
