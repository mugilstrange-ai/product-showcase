# Postmark — Item Detail Dynamic Route (Completed)

A finished solution based on the Kalvium Community `item-detail-route` starter. One Next.js App Router template reads `params.id`, requests the selected post from `https://jsonplaceholder.typicode.com/posts/<id>`, parses typed JSON, and displays its `title` and `body`.

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000/posts/1** or **http://localhost:3000/posts/5**. The list at http://localhost:3000 links to both and other posts. Unrecognized IDs show a friendly 404.

## Requirements addressed
- `app/posts/[id]/page.tsx` with the literal `[id]` folder.
- Typed params, `const id = params.id`.
- `async` page with `await fetch(...)` and `const post: Post = await res.json()`.
- `type Post = { id: number; title: string; body: string }`, no `any`.
- JSX renders `{post.title}` and `{post.body}`.
- Proper errors (404 for invalid/missing ids, fetch error handling).

## Verify

```bash
npm run typecheck
npm run build
npm run start
```

The accompanying GitHub Actions proof checks the actual /posts/1 and /posts/5 pages and captures screenshots from the running production server, including the URL bar.
