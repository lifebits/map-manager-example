import { Component, OnInit } from '@angular/core';

const NEWS_LIST = [
  {
    title: 'Посади свое дерево друже, сделай город зеленее',
    userName: 'Татьяна',
    data: '1 июня 2020',
    viewCount: '11к',
    msgCount: '1001',
    likeCount: '101'
  },{
    title: 'В Бийске ввели режим ЧС из-за скопившегося мусора',
    userName: 'Татьяна',
    data: '1 июня 2020',
    viewCount: '11к',
    msgCount: '1001',
  },{
    title: 'Пройдет мирное шествие в защиту бэкендеров',
    userName: 'Татьяна',
    data: '1 июня 2020',
    viewCount: '11к',
    msgCount: '1001',
  },
];

@Component({
  selector: 'app-aggregaation-news-base',
  templateUrl: './aggregaation-news-base.component.html',
  styleUrls: ['./aggregaation-news-base.component.scss']
})
export class AggregaationNewsBaseComponent implements OnInit {

  newsList: typeof NEWS_LIST = NEWS_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
