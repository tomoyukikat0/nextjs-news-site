import Head from "next/head";
import MainLayout from "../layouts";
import styles from "../styles/Home.module.scss";

export default function Home(props) {
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
    </MainLayout>
  );
}

