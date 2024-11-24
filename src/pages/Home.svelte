<script>    
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    
    let title = "MercApp";
    

</script>

<Header title={title}/>
<main>
    <h1>Home</h1>
</main>
<Footer/>

<style>
    main {
        padding: 1rem;
    }
</style>    