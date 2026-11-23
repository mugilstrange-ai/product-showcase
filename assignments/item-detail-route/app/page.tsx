import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6", { cache: "no-store" });
  if (!res.ok) throw new Error("Unable to load the posts list.");
  const posts: Post[] = await res.json();

  return (
    <main className="list">
      <div className="site-brand"><span>✳</span> POSTMARK <small>/ STORIES FOR THE CURIOUS</small></div>
      <div className="list-intro">
        <p className="eyebrow">THE MINI BLOG / COLLECTION 01</p>
        <h1>Little stories.<br /><em>Big ideas.</em></h1>
        <p>Six stories to explore. Select a title to read its full post, fetched live from JSONPlaceholder.</p>
      </div>
      <p className="section-label">EXPLORE THE POSTS <span>0{posts.length} ARTICLES</span></p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <span className="post-index">{String(post.id).padStart(2, "0")}</span>
              <span className="post-title">{post.title}</span>
              <span className="post-arrow" aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="site-footer">POSTMARK <span>BUILT WITH NEXT.JS + TYPESCRIPT</span></div>
    </main>
  );
}
