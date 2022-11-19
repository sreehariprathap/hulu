import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import Nav from "../components/Nav"
import Results from "../components/Results"
import requests from "../Utils/requests"
export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/Hulu-Logo.wine.png" />
      </Head>

      {/* Header  */}
      <Header />
      {/* Navbar  */}
      <Nav />

      {/* Results  */}
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.getTrending.url
    }`
  ).then((res) => res.json())
  return {
    props: {
      results: request.results,
    },
  }
}
