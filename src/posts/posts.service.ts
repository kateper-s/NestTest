import { Injectable } from '@nestjs/common';
import {CreatePostDto} from './posts.dto';

@Injectable()
export class PostsService {
    constructor() {}

    getPostById() {
        return {
            id: 1,
            title: 'hello',
            userId: 'pomogite'
            }
        }

    createPost(title: CreatePostDto, userId: CreatePostDto) {
        return 'Пост с заголовком '+ title + ' был создан пользователем '+ userId;
    }
}