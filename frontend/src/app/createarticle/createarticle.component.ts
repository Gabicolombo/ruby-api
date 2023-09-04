import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.scss']
})
export class CreatearticleComponent {

  constructor(private articleService: ArticleService){}

  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl('')
  });

  article:any;

  onSubmit(){
    this.articleService.addArticle(this.articleForm.value)
      .subscribe((article => {
        this.article = article;
      }));
  }


}
