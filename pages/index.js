import Head from "next/head";
import styles from "../styles/Home.module.css";
import Feature from "../components/features/Feaures";
import PizzaList from "../components/pizzalist/PizzaList";
import OurRest from "../components/footer/OurRest";
import axios from "axios";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Latakia</title>
        <meta name="description" content="best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
      <PizzaList products={products} />
      <OurRest />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`https://foor-ordering-app.vercel.app/api/products`);
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};

