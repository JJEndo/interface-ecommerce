<script>
  export let title = "MercApp";
</script>

<header>
  <h1>{title}</h1>
  <div class="search">
    <input placeholder="Search in MercApp" type="text" />
    <button>Search</button>
  </div>
  <nav>
    <a class="register" href="/">Register or sign in</a>
    <a class="sell" href="/sell">Sell</a>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f5f5f5;
  }
  h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 00;
    color: #416954;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .register {
    display: flex;
    color: #416954;
    text-decoration: none;
    border: #416954 solid 1px;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #d9d9d9;
  }
  .sell {
    display: flex;
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #416954;
  }
</style>
