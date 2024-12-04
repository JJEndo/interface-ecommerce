<footer>
  <div class="footer-container">
    <!-- Logo and Social Media -->
    <div class="footer-section logo-social">
      <img src="./img/logoMercapp.png" alt="Mercapp logo" class="logo" />
      <div class="social-icons">
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <img src="./img/x.svg" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <img src="./img/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" aria-label="YouTube">
          <img src="./img/youtube.svg" alt="YouTube" />
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <img src="./img/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>

    <!-- Links Section -->
    <div class="footer-section links">
      <div>
        <h3>Mercapp</h3>
        <ul>
          <li><a href="/about">About us</a></li>
          <li><a href="/press">Press</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/sustainability">Sustainability</a></li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li><a href="/help-center">Help Center</a></li>
          <li><a href="/community-guidelines">Community guidelines</a></li>
          <li><a href="/security-tips">Security tips</a></li>
        </ul>
      </div>
      <div>
        <h3>Legal</h3>
        <ul>
          <li><a href="/legal-notice">Legal notice</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/cookies-policy">Cookies policy</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
    </div>
  </div>
    <!-- Copyright Section -->
    <div class="footer-copyright">
      © {new Date().getFullYear()} Mercapp. All rights reserved.
    </div>
</footer>

<style>
  footer {
    padding: 2rem;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    text-align: center;
    font-size: 0.9rem;
    color: #333;
    margin-top: 2rem;
    justify-content: center;
    justify-items: center;
  }

  .footer-container {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-section {
    display: flex;
    flex-direction: row;
    gap: 6rem;
    justify-content: space-between;
  }

  .logo-social {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: 100px;
    margin-bottom: 1rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons img {
    width: 24px;
    height: 24px;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
  }

  a:hover {
    text-decoration: underline;
  }
  .footer-copyright {
    margin-top: 1rem;
    font-size: 0.85rem;
    color: #777;
  }
</style>
