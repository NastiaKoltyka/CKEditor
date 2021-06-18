import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {
  @Input() inputHTML:any;
  @Output() innerHTMLChange = new EventEmitter<string>();
  str:string;
  buttons:string[];
  newTag:string;
  visibleCreatePanel:boolean;
  constructor() { 
    this.str='';
    this.visibleCreatePanel=false;
    this.buttons=['p','h1','h2','h3','h4','h5','h6','a'];
    this.newTag='';
  }

  ngOnInit(): void {
    this.str=this.inputHTML;
  }
  save(){
    this.innerHTMLChange.emit(this.str);
  }
  create(){
    this.visibleCreatePanel=true;
  }
  newTable(table:string){
    this.visibleCreatePanel=false;
    this.str += table;
  }
  newList(list:string){
    this.visibleCreatePanel=false;
    this.str += list;
  }
  newOrdList(ordList:string){
    this.visibleCreatePanel=false;
    this.str += ordList;
  }
  addTag(button:string){
    this.newTag=`<${button}></${button}>`;
    this.str += this.newTag;;
  }

}
