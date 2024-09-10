import {
  DatePipe,
  DecimalPipe,
  NgClass,
  NgStyle,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    DatePipe,
    UpperCasePipe,
    DecimalPipe,
    MatPaginatorModule,
  ],

  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css',
})
export class TvListComponent implements OnInit {
  tvList: any[] = [];
  // tvServ: TvService;
  // DI->Dependancy Injection
  constructor(private tvServ:TvService) {
    // this.tvServ = new TvService();
  }
  ngOnInit() {
    this.tvList = this.tvServ.getTvList();
  }
}
