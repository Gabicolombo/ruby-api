import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.scss']
})
export class ListarticlesComponent {

  articles: any;

  constructor(private articleService: ArticleService){}

  ngOnInit(){
    this.ArticleList();
  }

  ArticleList(){
    this.articles = this.articleService.listArticle()
      .subscribe(article => {
        this.articles = article;
      })
  }

  deleteArticle(id: any){
    this.articleService.deleteArticle(id)
      .subscribe(article => {
        console.log('Article has been deleted');
      })
  }

}
