import { createFileRoute } from '@tanstack/react-router'
import PostListPage from "../../pages/PostListPage.tsx";

export const Route = createFileRoute('/posts/')({
	component: PostListPage,
})