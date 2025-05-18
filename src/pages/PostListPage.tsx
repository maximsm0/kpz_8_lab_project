import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import PostItem from '../components/ui/PostItem';
import { getAllEntities } from '../api/posts.ts';
import '../styles/PostListPage.css';

const PostListPage = () => {
	const [posts, setPosts] = useState<any[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const postsData = await getAllEntities();
			setPosts(postsData);
		};
		fetchPosts();
	}, []);

	const handleDelete = (id: string) => {
		setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
	};


	return (
		<div className="post-list-page">
			<h1 className="post-list-title">Posts</h1>
			<div className="post-list">
				{posts.map(post => (
					<PostItem key={post.id} post={post} onDelete={handleDelete} />
				))}
			</div>
			<div className="actions">
				<Link to="/posts/new">
					<button className="btn btn-primary">Create New Post</button>
				</Link>
			</div>
		</div>
	);
};

export default PostListPage;
