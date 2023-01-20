import Head from "next/head";

var foo = 5;
var bar = 3;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <button className="btn">Hello daisyUI</button>
    </div>
  );
}
