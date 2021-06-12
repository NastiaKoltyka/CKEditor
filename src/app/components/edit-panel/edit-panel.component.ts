import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {
  @Input() inputHTML:any
  @Output() innerHTMLChange = new EventEmitter<string>()
  str:string
  visibleCreatePanel:boolean
  constructor() { 
    this.str=''
    this.visibleCreatePanel=false
  }

  ngOnInit(): void {
    this.str=this.inputHTML
  }
  save(){
    this.innerHTMLChange.emit(this.str)
    this.str=''
  }
  create(){
    this.visibleCreatePanel=true
  }
  newTable(table:string){
    this.visibleCreatePanel=false
    this.str += table;
  }
  newList(list:string){
    this.visibleCreatePanel=false
    this.str += list;
  }

}
