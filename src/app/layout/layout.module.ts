import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { WhiteboardComponent } from './components/whiteboard/whiteboard.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { CoreModule } from '../core/core.module';
import { PlItemsComponent } from './components/playlist/pl-items/pl-items.component';


@NgModule({
  declarations: [
    LayoutComponent,
    WhiteboardComponent,
    PlaylistComponent,
    PlItemsComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CoreModule
  ]
})
export class LayoutModule { }
