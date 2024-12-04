<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Products from "../components/Products.svelte";
  import { products } from "../stores/stores.js";

  let title = "MercApp";

  let productList = [];

  $: products.subscribe((value) => {
    productList = value;
  });

</script>

<main>
  <div class="page-container">
    <Header {title} />
    <div class="container-main">
      <div class="container">
        <div>
          <h1>
            Here, old is the new <span class="highlight">new</span>.
          </h1>
          <h1>
            Buy and sell second-hand items <span class="highlight">easily</span
            >.
          </h1>
        </div>
        <img src="./img/homePicture.png" alt="home" />
      </div>
      <h2>The best, at the best price</h2>
      <section class="carousel">
        {#each productList as product (product.id)}
          <div class="carousel-item">
            <Products
              title={product.title}
              price={product.price}
              image={product.image}
              isNew={product.isNew}
            />
          </div>
        {/each}
      </section>
    </div>
    <Footer />
  </div>
</main>

<style>
  .page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  main {
    padding: 0;
    display: flex;
  }

  .container-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .container {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 3rem;
    text-align: left;
    margin-bottom: 1rem;
    font-weight: bold;
    color: black;
  }
h2 {
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: bold;
  color: black;
}
  .highlight {
    color: #416954;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  .carousel {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    gap: 1rem;
    overflow-x: auto; 
    padding: 1rem;
    scroll-snap-type: x mandatory; 
    white-space: nowrap; 
  }

  .carousel::-webkit-scrollbar {
    display: none; 
  }

  .carousel-item {
    scroll-snap-align: center; 
    flex: 0 0 auto; 
  }
</style>
