type Props = {
  amount: number;
};

export default function PriceTag({ amount }: Props) {
  return (
    <span className="price" aria-label={"Price $" + amount.toFixed(2)}>
      {"$"}{amount.toFixed(2)}
    </span>
  );
}
