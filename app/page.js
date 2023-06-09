import Container from "./Container";

async function getCardData() {
  const res = await fetch(`${process.env.BASE_URL}/api/card`);
  return res.json();
}

export default async function Home() {
  const data = await getCardData();
  return (
    <>
      <Container data={data} />
    </>
  );
}