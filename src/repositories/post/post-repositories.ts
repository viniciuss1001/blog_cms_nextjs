import { PostModel } from "@/models/post/post-model";

//use for interface
export interface PostRepository {
	findAll(): Promise<PostModel>[]
}