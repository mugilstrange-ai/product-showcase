# Orbit Supply — Product Showcase (Typed Props)

An original responsive mini-store built from the `kalviumcommunity/product-showcase` starter, with **three reusable, typed React components** and **zero untyped props**.

## Assignment checklist

- `app/components/Greeting.tsx` declares `type Props = { name: string }`; renders `{name}`.
- `app/components/PriceTag.tsx` declares `type Props = { amount: number }`; renders formatted `{amount.toFixed(2)}`.
- `app/components/ProductCard.tsx` declares `title: string`, `price: number`, `inStock: boolean`; renders title, stock badge and a shared `PriceTag` component.
- `app/page.tsx` passes `name="Explorer"` and reuses `ProductCard` with **different values**: `price={49} inStock={true}` and `price={25} inStock={false}`.
- Custom responsive green/charcoal design; no external UI dependencies.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For independent verification:

```bash
npm run typecheck
npm run build
```

## Submission

This repository is the **personal fork**, not the Kalvium Community original. Open a PR from `feature/typed-props` into **this fork's** `main`.

The PR and CI workflow include proof of the production render, compiled TypeScript, and component usage. The required screenshots are available in the workflow's downloadable artifact.
