import '../styles/Footer.scss'

const Footer = () => {
  const toTop = (e) => {
    e.preventDefault()
    window.scroll(0, 0)
  }
  return (
    <>
      <div className='footer-top'>
        <div className='ft-container'>
          <h1>CHECK24 – Deutschlands größtes Vergleichsportal</h1>
          <div className='footer-about'>
            <div className='about-desc'>
              <h2>Transparent</h2>
              <p>
                Wir bieten Ihnen einen Überblick über Preise und Leistungen von
                tausenden Anbietern. Und das alles über eigene Vergleichsrechner
              </p>
            </div>
            <div className='about-desc'>
              <h2>Kostenlos</h2>
              <p>
                Für Kunden ist unser Service kostenlos. Wir finanzieren uns über
                Provisionen, die wir im Erfolgsfall von Anbietern erhalten.
              </p>
            </div>
            <div className='about-desc'>
              <h2>Vertrauenswürdig</h2>
              <p>
                Bei uns können Kunden erst nach einem Abschluss eine Bewertung
                abgeben. Dadurch sehen Sie nur echte Kundenbewertungen.
              </p>
            </div>
            <div className='about-desc'>
              <h2>Erfahren</h2>
              <p>
                Seit 1999 haben unsere Experten über 15 Millionen Kunden beim
                Vergleichen und Sparen geholfen.
              </p>
            </div>
          </div>
          <span>mehr erfahren</span>
        </div>
      </div>
      <div className='footer-jump-to-top'>
        <div className='fjtt-container'>
          <a onClick={toTop} href=''>
            zurück zum Seitenanfang
          </a>
        </div>
      </div>
      <div className='footer-bottom-links'>
        <div className='fb-container'>
          <ul>
            <li className='title'>Über CHECK24</li>
            <li>Karriere bei CHECK24</li>
            <li>News</li>
            <li>News </li>
            <li>Unternehmen</li>
          </ul>
          <ul>
            <li className='title'>Geld verdienen mit CHECK24</li>
            <li>Partner</li>
            <li>Marktplatz-Partner</li>
            <li>Affiliate-Programm</li>
          </ul>
          <ul>
            <li className='title'>Unser Engagement</li>
            <li>Nachhaltigkeit</li>
            <li>CHECK24 hilft Kindern</li>
            <li>CHECK24 hilft der Natur</li>
          </ul>
          <ul>
            <li className='title'>Wir helfen Ihnen</li>
            <li>Hilfe und Kontakt</li>
            <li>CHECK24 App</li>
            <li>CHECK24 Gutscheine</li>
            <li>CHECK24 Punkte</li>
            <li>CHECK24 Cashback</li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom-copyright'>
        <div className='fb-copyright-container'>
          <h1>CHECK24</h1>
          <ul>
            <li>Unsere AGB</li>
            <li>Datenschutz</li>
            <li>Impressum</li>
            <li>Erstinformation</li>
          </ul>
          <span>
            © 2022 CHECK24 Vergleichsportal GmbH München. Alle Inhalte
            unterliegen unserem Copyright.
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
