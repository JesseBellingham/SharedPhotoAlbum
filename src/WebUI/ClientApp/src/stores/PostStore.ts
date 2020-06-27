import { action, decorate, observable } from 'mobx'
import { PostDto, IPostsClient, CreatePostCommand, PostsVm } from '../Client'

class PostStore {
    posts: PostDto[] | undefined = []

    constructor(private postClient: IPostsClient) {
        this.postClient.get().then((result: PostsVm) => {
            this.posts = result.posts
        })
    }

    async createPost(post: CreatePostCommand): Promise<void> {
        await this.postClient.create(CreatePostCommand.fromJS({ ...post }))
        this.posts?.unshift(post)
    }
}

decorate(PostStore, {
    posts: observable,
    createPost: action,
})

export default PostStore
