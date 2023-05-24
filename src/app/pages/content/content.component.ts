import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://disneyplusbrasil.com.br/wp-content/uploads/2021/05/Tony-Stark-Substituto.jpg';
  contentTitle: string = 'Minha notícia';
  contentDescription: string = 'ola';

  constructor() {}

  ngOnInit(): void {}
}
