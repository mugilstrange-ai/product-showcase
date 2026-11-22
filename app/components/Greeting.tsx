type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return (
    <div className="greeting">
      <span className="greeting-dot" aria-hidden="true" />
      <h2>Hello, {name}! <span aria-hidden="true">✳</span></h2>
      <p>Explore everyday essentials selected to keep you in your flow.</p>
    </div>
  );
}
