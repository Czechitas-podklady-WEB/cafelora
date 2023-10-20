import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <header>
        <div className="header__content container">
          <div className="site-logo"></div>

          <nav className="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>

        </div>
      </header>

      <main className="order">
        <div className="order__content container">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
          <div className="order__items">
            <div className="order-item">
              <img
                src="/cups/espresso.png" 
                className="order-item__image"
              />
              <div className="order-item__name">
                Espresso
              </div>
            </div>

            <div className="order-item">
              <img 
                src="/cups/doppio.png" 
                className="order-item__image"
              />
              <div className="order-item__name">
                Doppio
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer__content">
            Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
          </div>
        </div>
      </footer>
    </div>
  </div>
);
