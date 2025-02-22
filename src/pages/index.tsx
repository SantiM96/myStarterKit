import { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import { LangContext } from "@/context/langContext";
import { LangSelect } from "@/components/Global/LangSelect"


export default function Home() {
  const { t } = useContext(LangContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        < LangSelect />
        {t.title}
      </main>
    </>
  );
}
