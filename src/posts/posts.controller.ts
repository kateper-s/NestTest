import { Controller, Get, Post, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import {CreatePostDto} from './posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

@Get()
  FindPosts(id: number){
    return this.postsService.getPostById();
  }

@Post('/create')
 CreatePost(createPostDto: CreatePostDto){
     return this.postsService.createPost(createPostDto,createPostDto);
     }
}
