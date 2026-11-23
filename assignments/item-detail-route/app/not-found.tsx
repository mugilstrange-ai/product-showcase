import Link from "next/link";

export default function NotFound() {
  return <main className="detail"><div className="site-brand"><span>✳</span> POSTMARK</div>
    <section className="not-found"><p className="eyebrow">404 / POST NOT FOUND</p>
      <h1>That story doesn’t exist.</h1><p>Try a post from the collection instead.</p>
      <Link href="/">← Explore all stories</Link></section></main>;
}
