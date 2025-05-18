import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { createEntity } from '../api/posts.ts';
import '../styles/CreateNewPostPage.css';

const CreateNewPostPage = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await createEntity({ title, content: body });
		navigate({ to: '/posts' });
	};

	return (
		<div className="create-post-page">
			<h1>Create New Post</h1>
			<form className="create-post-form" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						id="title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
							e.currentTarget.setCustomValidity('');
						}}
						onInvalid={(e) =>
							e.currentTarget.setCustomValidity('Please fill out this field')
						}
						required
						placeholder="Enter post title"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="body">Body</label>
					<textarea
						id="body"
						value={body}
						onChange={(e) => {
							setBody(e.target.value);
							e.currentTarget.setCustomValidity('');
						}}
						onInvalid={(e) =>
							e.currentTarget.setCustomValidity('Please fill out this field')
						}
						required
						placeholder="Enter post content"
					/>
				</div>
				<div className="form-actions">
					<button type="submit" className="btn-primary">Create Post</button>
				</div>
			</form>
		</div>
	);
};

export default CreateNewPostPage;
