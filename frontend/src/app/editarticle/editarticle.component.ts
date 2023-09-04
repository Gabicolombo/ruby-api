import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent {

  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl('')
  });
  article:any;
  id: any;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.id = params['articleId'];
    });
    
    this.articleService.findArticle(this.id)
      .subscribe(article => {
        this.article = article;
        this.articleForm = new FormGroup({
          title: new FormControl(this.article.title),
          body: new FormControl(this.article.body),
          author: new FormControl(this.article.author)
        });
      })
  }

  onSubmit(){
    this.articleService.updateArticle(this.articleForm.value, this.id)
      .subscribe(res => console.log('This article has been updated'));
    
    this.router.navigate(['']);
  }

}
