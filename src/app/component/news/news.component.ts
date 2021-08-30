import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  msg = '这是新闻内容'
  constructor() { }

  ngOnInit(): void {
  }

}
