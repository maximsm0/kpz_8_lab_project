import { createFileRoute } from '@tanstack/react-router';
import PostDetailPage from '../../pages/PostDetailPage.tsx';

export const Route = createFileRoute('/posts/$id')({
	component: PostDetailPage,
});
