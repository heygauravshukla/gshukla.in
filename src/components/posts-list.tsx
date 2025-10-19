import Link from "next/link";

interface PostProps {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

interface PostsListProps {
  posts: PostProps[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li key={post._id} className="hover:underline">
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
