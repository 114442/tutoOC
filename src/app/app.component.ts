import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post>;

  constructor() {
    this.posts = new Array<Post>();
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const date = new Date();

    var post = new Post();

    post.title = 'Mon premier post';
    post.content = content;
    post.created_at = date;
    post.loveIts = 1;
    this.posts.push(post);

    post = new Post();
    post.title = 'Mon deuxième post';
    post.content = content;
    post.created_at = date;
    post.loveIts = -1;
    this.posts.push(post);

    post = new Post();
    post.title = 'Encore un post';
    post.content = content;
    post.created_at = date;
    post.loveIts = 0;
    this.posts.push(post);

  }
}
