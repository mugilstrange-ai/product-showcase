import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <article className="card">
      <div className="card-art" aria-hidden="true">
        <div className="art-orbit art-orbit-one" />
        <div className="art-orbit art-orbit-two" />
        <div className="art-core">✳</div>
        <span className="art-label">CURATED / 001</span>
      </div>
      <div className="card-content">
        <div className="card-topline">
          <span className="card-kicker">THE ESSENTIALS</span>
          <span className={inStock ? "stock stock-yes" : "stock stock-no"}>
            <span className="stock-dot" aria-hidden="true" />
            {inStock ? "In stock" : "Sold out"}
          </span>
        </div>
        <h3>{title}</h3>
        <div className="card-bottom">
          <PriceTag amount={price} />
          <span className="card-link" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  );
}
