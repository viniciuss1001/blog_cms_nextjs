import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repositories";
import { parse, resolve } from "path";
import { readFile } from 'fs/promises'

const ROOT_DIR = process.cwd()
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seeds', 'posts.json')

export class JsonPostRepository implements PostRepository {
	private async readFromDisk() {
		const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8')
		const parsedJson = JSON.parse(jsonContent)
		const { posts } = parsedJson
		return posts
	}


	async findAll(): Promise<PostModel[]> { 
		const posts = await this.readFromDisk()
		return posts
	}

	async findById(id: string): Promise<PostModel> {
		const posts = await this.findAll()
	
		const post = posts.find(post => post.id === id)

		if(!post) throw new Error("Post não encontrado.")

		return post
	}
}

