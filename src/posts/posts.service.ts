import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    constructor() {}

    getPostById(id: number) {
        return {
            id: id,
            title: 'Hello',
            userId: 'Grantik'
            }
        }

    createPost(title: string, userId: string) {
        return 'Пост с заголовком '+ title + ' был создан пользователем '+ userId;
    }
}