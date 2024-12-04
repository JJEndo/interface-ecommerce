<script>
    export let title;
    export let price;
    export let image;
    export let isNew;
  </script>
  
  <div class="product-card">
    {#if isNew}
      <span class="badge">NEW</span>
    {/if}
    <img src={image} alt={title} class="product-image" />
    <h3>{title}</h3>
    <p class="price">€{price}</p>
  </div>
  
  <style>
    .product-card {
      position: relative;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      background-color: #fff;
      width: 200px; /* Tamaño fijo para todos los productos */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    .badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ff5252;
      color: white;
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
      border-radius: 4px;
    }
  
    .product-image {
      width: 100%;
      height: 150px; /* Altura fija para que todas las imágenes sean iguales */
      object-fit: cover; /* Asegura que las imágenes mantengan proporciones */
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }
  
    h3 {
      font-size: 1rem;
      margin: 0.5rem 0;
    }
  
    .price {
      font-size: 1.2rem;
      font-weight: bold;
      color: #2c3e50;
    }
  </style>
  