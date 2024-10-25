import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

@Get()
  FindPosts(): object{
    return this.postsService.getPostById(12);
  }

@Post('/create')
 CreatePost(): string{
     return this.postsService.createPost('Hello','Grantik');
     }
}
