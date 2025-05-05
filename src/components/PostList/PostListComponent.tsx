import { postRepository } from '@/repositories/post'
import React from 'react'

const PostListComponent = async() => {
	const posts = await postRepository.findAll()
  return (
	 <div>
		{posts.map(post => {
			return (
				<p key={post.id}>
					{post.title}
				</p>
			)
})}
	 </div>
  )
}

export default PostListComponent