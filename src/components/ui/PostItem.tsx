import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import '../../styles/PostItem.css';
import ConfirmModal from './ConfirmModal'; // Импортируем модалку
import { deleteEntity } from '../../api/posts.ts';

interface PostItemProps {
	post: {
		id: string;
		title: string;
		content: string;
	};
	onDelete: (id: string) => void;
}

const truncateText = (text: string, maxLength: number) =>
	text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

const PostItem: React.FC<PostItemProps> = ({ post, onDelete }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	
	const handleConfirmDelete = async () => {
		const numeric_id: number = Number(post.id);
		await deleteEntity(numeric_id);
		onDelete(post.id);
		closeModal();
	};

	return (
		<div className="post-item">
			<header className="post-item-header">
				<h2>{truncateText(post.title, 50)}</h2>
			</header>
			<p className="post-item-content">{post.content}</p>
			<footer className="post-item-footer">
				<Link to={`/posts/${post.id}`} className="btn btn-secondary">Read More</Link>
				<button onClick={openModal} className="btn btn-danger">Delete</button>
			</footer>

			<ConfirmModal
				message="Do you really want to delete this post?"
				isOpen={isModalOpen}
				onConfirm={handleConfirmDelete}
				onCancel={closeModal}
			/>
		</div>
	);
};

export default PostItem;
