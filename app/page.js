import Container from "./Container";

async function getCardData() {
  const res = await fetch(`/api/card`);
  const data = await res.json()
  return data;
}

export default async function Home() {
  const data = await getCardData();
  console.log(data)
  return (
    <div>
      <Container data={data} />
    </div>
  );
}
