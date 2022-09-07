import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neemly - Collections</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
      </Head>
      <div class="row text-center">
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/11/16/02/flowers-6170181_960_720.png"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/art"><a>Art</a></Link></figcaption>
          </figure>
        </div>
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2022/08/22/10/28/tihany-7403356_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/pets"><a>Pets</a></Link></figcaption>
          </figure>
        </div>
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/nature"><a>Nature</a></Link></figcaption>
          </figure>
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2022/08/10/18/57/lake-7377942_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/sunset"><a>Sunset</a></Link></figcaption>
          </figure>
        </div>
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2022/06/12/02/11/family-7257182_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/family"><a>Family</a></Link></figcaption>
          </figure>
        </div>
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/31/11/16/dinner-791142_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/gifting"><a>Gifting</a></Link></figcaption>
          </figure>
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2016/12/11/20/47/elephants-1900332_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/bonding"><a>Bonding</a></Link></figcaption>
          </figure>
        </div>
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/11/07/11/beach-4398269_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/travel"><a>Travel</a></Link></figcaption>
          </figure>
        </div>
        <div class="col">
          {" "}
          <figure class="figure">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/01/05/13/table-setting-2107600_960_720.jpg"
              class="img-fluid img-thumbnail w-50 text-center"
              alt="..."
            ></img>
            <figcaption class="figure-caption"><Link href="/posts/lunch"><a>Lunch</a></Link></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
