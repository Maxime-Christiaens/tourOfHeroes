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

  getId(id: number): void {
    this.multiPost = false;
    console.log(id)
    //If the id that we get (by the click) is equal to the id of a post then it show the id 
    /*
    this.post = this.posts.find(function(post){
      if(post.id = id){
        return post
      }
    })
    */
    this.post = this.posts.find(post => post.id === id);
    console.log(this.post)
  }

  getPosts() {
    this.multiPost = true;
  }
}


