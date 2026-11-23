import Link from "next/link";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = { params: { id: string } };

// One typed page handles /posts/1, /posts/5 and every other valid post id.
export default async function PostDetail({ params }: Props) {
  const id = params.id;

  // Reject invalid ids before they reach the API.
  if (!/^\d+$/.test(id) || Number(id) < 1) notFound();

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Unable to load this post.");

  const post: Post = await res.json();

  return (
    <main className="detail">
      <div className="site-brand"><span>✳</span> POSTMARK <small>/ STORIES FOR THE CURIOUS</small></div>
      <nav className="detail-nav" aria-label="Breadcrumb">
        <Link className="back" href="/">← All posts</Link>
        <span>THE MINI BLOG / POST {String(post.id).padStart(2, "0")}</span>
      </nav>
      <article className="post-article">
        <p className="eyebrow">FEATURED STORY / {String(post.id).padStart(2, "0")}</p>
        <div className="post-number" aria-hidden="true">{String(post.id).padStart(2, "0")}</div>
        <h1>{post.title}</h1>
        <div className="article-divider"><span>✳</span> THE STORY <span>✳</span></div>
        <p className="article-body">{post.body}</p>
        <div className="article-footer">
          <span>POST ID / {post.id}</span>
          <span>LIVE DATA / JSONPLACEHOLDER</span>
        </div>
      </article>
      <div className="bottom-back"><Link href="/">← Back to all stories</Link></div>
      <div className="site-footer">POSTMARK <span>BUILT WITH NEXT.JS + TYPESCRIPT</span></div>
    </main>
  );
}
