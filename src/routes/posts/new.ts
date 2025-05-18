import { createFileRoute } from '@tanstack/react-router'
import PostCreatePage from "../../pages/PostCreatePage.tsx";

export const Route = createFileRoute('/posts/new')({
	component: PostCreatePage,
})
