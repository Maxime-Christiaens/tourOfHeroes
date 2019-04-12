import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostProvider } from '../providers/post.provider';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.scss']
})

export class ApiPostComponent implements OnInit {
  posts: any;

  constructor(private postProvider: PostProvider, private route: ActivatedRoute) {
    /*
    this.route.params.subscribe((params) => { 
      if (params.id) {
        this.posts = this.route.snapshot.data.post;
      } else {
        this.posts = this.route.snapshot.data.posts;
      }
  });
  */
  }

  ngOnInit() {
    this.postProvider.getPosts().subscribe((data) => {
        //this.posts = data; 
        console.log(this.posts);
    });
  }
  

}
