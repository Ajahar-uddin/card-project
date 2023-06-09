import Container from "./Container";

async function getCardData() {
  const res = await fetch(`/api/card`);
  return res.json();
}

export default async function Home() {
  const data = await getCardData();
  return (
    <div>
      <Container data={data} />
    </div>
  );
}
