import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import {CreatePostDto} from './posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

@Get(':id')

  FindPosts(@Param('id')id: number){
    return this.postsService.getPostById(id);
  }

@Post('/create')
 CreatePost(@Body() createPostDto: CreatePostDto){
     return this.postsService.createPost(createPostDto.title, createPostDto.userId);
     }
}
