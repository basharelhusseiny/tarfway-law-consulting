import { notFound } from "next/navigation";
import { blogsData } from "@/data";
import { BlogDetailPage } from "@/components/pages/blog";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { id } = await params;
  const post = blogsData.find((b) => b.id === Number(id));

  if (!post) notFound();

  return <BlogDetailPage post={post} />;
};

export async function generateStaticParams() {
  return blogsData.map((post) => ({ id: String(post.id) }));
}

export default BlogPostPage;
