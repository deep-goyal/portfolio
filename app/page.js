import NavBar from "../components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white dark:bg-white dark:text-black">
      <Head>
        <title>Deep Goyal Portfolio</title>
        <meta name="description" content="Portfolio of Deep Goyal" />
      </Head>
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-8xl font-bold mb-4">Hi! I'm Deep.</h1>
          <h2 className="text-8xl">I'm a software engineer.</h2>
        </div>
      </main>
    </div>
  );
}
