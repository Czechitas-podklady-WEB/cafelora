import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <header>
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>

      </div>
    </header>
    <main>
      <section className="banner">
        <div className="container">
          <div className="banner__content">
            <h1>Přijď to ochutnat!</h1>
            <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/espresso.png" />
                </div>
                <div className="drink__info">
                  <h3>Espresso</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="0" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>

            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/doppio.png" />
                </div>
                <div className="drink__info">
                  <h3>Doppio</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="1" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>

            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/lungo.png" />
                </div>
                <div className="drink__info">
                  <h3>Lungo</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#b0dee1' }} />
                    <div className="layer__label">voda</div>
                  </div>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="2" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery__content">
            <h2>Nově otevřeno!</h2>
            <div className="gallery__cols">
              <p className="gallery__col">
                Máte chuť na trochu nostalgie? Rádi vás u nás uvidíme. Atmosféra podniku Vás pohltí a přivede do
                uvolněné nálady.
              </p>
              <p className="gallery__col">
                V přízemí Cafe Lóra se nachází nově vystavěný bar a restaurant, kde Vám nabízíme koktejly z nově
                navržené řady "Cocktails &amp; Desires". V suterénu najdete music club se světelnou disco podlahou,
                barem, VIP loungem, a hrají tam ti nejlepší DJ's!
              </p>
              <p className="gallery__col">
                Jsme podnik pro všechny generace. Součástí kavárny je dětský koutek, který zabaví vaše ratolesti
                abyste si mohli v klidu vychutnat šálek Vaší oblíbené kávy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Kde nás najdete</h2>
          <div className="contact">
            <div className="contact__address">
              Na Mýtě 240 <br />
              514 03 Byšky nad Jizerou <br />
              Tel: +420 775 334 427
            </div>
            <table className="contact__hours">
              <tr><td>Pondělí</td><td>ZAVŘENO</td></tr>
              <tr><td>Úterý</td><td>11:00 - 22:00</td></tr>
              <tr><td>Středa</td><td>11:00 - 22:00</td></tr>
              <tr><td>Čtvrtek</td><td>11:00 - 22:00</td></tr>
              <tr><td>Sobota</td><td>9:00 - 02:00</td></tr>
              <tr><td>Neděle</td><td>9:00 - 02:00</td></tr>
            </table>
            <iframe src="https://mapy.cz/s/paloregama" width="100%" height="600" frameBorder="0" title="Café Lóra na mapě."></iframe>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="container">
        <div className="footer__content">
          Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
        </div>
      </div>
    </footer>
  </div>
);
