import Container from "./Container";

async function getCardData() {
  const res = await fetch(`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020`);
  const data = await res.json()
  return data;
}

export default async function Home() {
  const data = await getCardData();
  return (
    <div>
      <Container data={data} />
    </div>
  );
}
