import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../providers/post.provider';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.scss']
})

export class ApiPostComponent implements OnInit {
  posts: any;
  post: any;
  multiPost: boolean = true;

  constructor(private postProvider: PostProvider) {
  }

  ngOnInit() {
    this.postProvider.getPosts().subscribe((data) => {
        this.posts = data; 
        //console.log(this.posts);
    });
  }
  
  getId(id){
    this.multiPost = false;
    this.post = this.posts[id-1];
  }

  getPosts(){
    this.multiPost = true;
  }
}
