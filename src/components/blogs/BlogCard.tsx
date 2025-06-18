import Link from 'next/link';
import { Blog } from '../../types/blog';

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug.current}`} className="block bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
      <img src={blog?.mainImage?.asset?.url} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{blog?.excerpt?.substring(0, 100)}...</p>
        <p className="text-xs text-gray-500 mt-2">{new Date(blog.publishedAt).toDateString()}</p>
      </div>
    </Link>
  );
}
