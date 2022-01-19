import Head from 'next/head';
import { Header, Banner, ProductFeed } from '../components/index';

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
