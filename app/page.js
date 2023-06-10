import Container from "./components/Container";
import localFont from '@next/font/local'

const roboto = localFont({
  src: [
    {
      path: '.././public/fonts/Roboto-Regular.ttf',
      weight: '400'
    },
    {
      path: '.././public/fonts/Roboto-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-roboto'
})

async function getCardData() {
  const res = await fetch(`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020`);
  const data = await res.json()
  return data;
}

export default async function Home() {
  const data = await getCardData();
  return (
    <div className="font-sans " >
      <Container data={data} />
    </div>
  );
}
