import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FinalTextComponent } from './components/final-text/final-text.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';
import { StylePanelComponent } from './components/style-panel/style-panel.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    FinalTextComponent,
    ButtonsComponent,
    EditPanelComponent,
    StylePanelComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
