import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() visibleChanged = new EventEmitter<any>();
  visibleEdit: boolean;
  visibleStyle: boolean;
  constructor() {
    this.visibleEdit = false;
    this.visibleStyle = false;
  }

  ngOnInit(): void {
  }
  isVisibleEdit() {
    if (!this.visibleEdit) {
      this.visibleEdit = true;
      this.visibleStyle = false;
    }
    else {
      this.visibleEdit = false;
    }
    this.emitVisibleChanged()
  }
  isVisibleStyle() {
    if (!this.visibleStyle) {
      this.visibleStyle = true;
      this.visibleEdit = false;
    }
    else {
      this.visibleStyle = false;
    }
    this.emitVisibleChanged();
  }

  emitVisibleChanged() {
    this.visibleChanged.emit({
      edit: this.visibleEdit,
      style: this.visibleStyle
    })
  };
}
