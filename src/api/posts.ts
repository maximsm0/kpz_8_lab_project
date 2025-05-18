import api from './axios';

export interface Post {
	id: string;
	title: string;
	content: string;
}

export const getAllEntities = async (): Promise<Post[]> => {
	const res = await api.get<Post[]>('/posts');
	return res.data.data;
};

export const getEntityById = async (id: string): Promise<Post | undefined> => {
	const res = await api.get<Post>(`/posts/${id}`);
	return res.data.data;
};

export const createEntity = async (data: { title: string; content: string }): Promise<Post> => {
	const res = await api.post<Post>('/posts', data);
	return res.data;
};

export const updateEntity = async (id: number, data: { title: string; content: string }): Promise<Post> => {
	const res = await api.patch<Post>(`/posts/${id}`, data);
	return res.data;
};

export const deleteEntity = async (id: number): Promise<void> => {
	await api.delete(`/posts/${id}`);
};
