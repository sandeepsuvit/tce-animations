import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/core/service/fake-api.service';
import { ListAnimation } from 'src/app/core/animations/list.animation';

@Component({
  selector: 'app-pl-items',
  templateUrl: './pl-items.component.html',
  styleUrls: ['./pl-items.component.scss'],
  animations: [
    ListAnimation
  ]
})
export class PlItemsComponent implements OnInit {
  playlist: any[] = [];

  constructor(
    private fakseService: FakeApiService
  ) { }

  ngOnInit() {
    this._loadData();
  }

  /**
   * Dummy data loader
   *
   * @private
   * @memberof PlItemsComponent
   */
  private _loadData() {
    this.fakseService.getFakeData().subscribe(res => {
      this.playlist = res.data || [];
    });
  }
}
