type Post = {
	id: number;
	title: string;
	body: string;
};

let posts: Post[] = [
	{ id: 1, title: 'First Post', content: 'This is the first post.' },
	{ id: 2, title: 'Second Post', content: 'This is the second post.' },
];

export const getAllPosts = async () => {
	return posts;
};

export const getPostById = async (id: number) => {
	return posts.find(post => post.id === id);
};

export const createPost = async (data: Omit<Post, 'id'>) => {
	const newPost = { id: Date.now(), ...data };
	posts.push(newPost);
	return newPost;
};

export const updatePost = async (id: number, data: Partial<Omit<Post, 'id'>>) => {
	const post = posts.find(post => post.id === id);
	if (!post) throw new Error('Post not found');
	Object.assign(post, data);
	return post;
};

export const deletePost = async (id: number) => {
	const index = posts.findIndex(post => post.id === id);
	if (index !== -1) {
		posts.splice(index, 1);
		return true;
	}
	return false;
};
