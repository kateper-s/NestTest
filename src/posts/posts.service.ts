import { Injectable } from '@nestjs/common';
import {CreatePostDto} from './posts.dto';

@Injectable()
export class PostsService {
    constructor() {}

    getPostById(id: number) {
        return {
            id: id,
            title: 'hello',
            userId: 'pomogite'
            }
        }

    createPost(title: string, userId: string) {
        return `Пост с заголовком ${title} был создан пользователем ${userId}`;
    }
}