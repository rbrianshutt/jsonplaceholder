import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

async function fetchJson() {
	const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	return response.json();
}

export default async function Home() {
	const posts = await fetchJson();
	console.log(posts);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{posts.map((post) => (
				<ul key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<h1 className="text-xl font-medium text-gray-900">UserId: {post.userId}</h1>
					<h2 className="text-gray-700 text-base">id: {post.id}</h2>
					<h3 className="mt-2 text-gray-600 text-sm">title: {post.title}</h3>
					<Link href={post.url}>
						<Image src={post.url} width={200} height={200} className="h-48 w-full object-cover"/>
					</Link>
				</ul>
			))}
		</div>
	);
}
