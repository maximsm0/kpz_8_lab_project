import { useEffect, useState } from 'react';
import { Link, useMatch } from '@tanstack/react-router';
import { getEntityById, updateEntity } from '../api/posts.ts';
import { Route } from '../routes/posts/$id';
import '../styles/PostDetailPage.css';

const PostDetailPage = () => {
	// Приводим к типу с параметром id
	const { params } = useMatch({ from: Route }) as { params: { id: string } };
	const id = params.id;

	const [post, setPost] = useState<any | null>(null);
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState({ title: '', content: '' });

	useEffect(() => {
		const fetchPost = async () => {
			const postData = await getEntityById(id);
			setPost(postData || null);
			if (postData) {
				setFormData({ title: postData.title, content: postData.content });
			}
		};
		fetchPost();
	}, [id]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const numericId = Number(id);

	const handleUpdate = async () => {
		await updateEntity(numericId, formData);
		const updatedPost = await getEntityById(id);
		setPost(updatedPost);
		setIsEditing(false);
	};

	if (!post) {
		return <div className="not-found">Post not found</div>;
	}

	return (
		<div className="post-detail-page">
			{isEditing ? (
				<>
					<h2>Edit Post</h2>
					<div className="form-group">
						<label>Title:</label>
						<input
							type="text"
							name="title"
							value={formData.title}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Content:</label>
						<textarea
							name="content"
							value={formData.content}
							onChange={handleChange}
						/>
					</div>
					<div className="actions">
						<button className="btn btn-success" onClick={handleUpdate}>Update</button>
						<button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
					</div>
				</>
			) : (
				<>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
					<div className="actions">
						<button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit Post</button>
						<Link to="/posts">
							<button className="btn btn-secondary">Back to Posts</button>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default PostDetailPage;
