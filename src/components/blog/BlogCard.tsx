import { format } from 'date-fns';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  created_at: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {format(new Date(post.created_at), 'MMM d, yyyy')}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-secondary font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}