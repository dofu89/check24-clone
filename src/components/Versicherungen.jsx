import '../styles/Versicherungen.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Versicherungen = () => {
  const [show, setShow] = useState(false)

  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className='versicherungen'
      title='Versicherung'
    >
      Versicherung
      <div
        className={
          show ? 'versicherungen-content' : 'versicherungen-content hide'
        }
      >
        <div className='main-content'>
          <div className='content-top'>
            <div className='content-item'>
              <h1>Auto & Fahrzeuge</h1>
              <h3>
                <Link to={'/kfz-versicherung'}>Kfz-Versicherung</Link>
              </h3>
              <h3>Motorradversicherung</h3>
              <h3>Kfz-Moped oder E-Scooter</h3>
              <h3>Schutzbrief/Automobilclub</h3>
              <h3>Fahrradversicherung</h3>
            </div>
            <div className='content-item'>
              <h1>Haus & Wohnung</h1>
              <h3>Hausratversicherung</h3>
              <h3>Wohngebäudeversicherung</h3>
              <h3>Neubauversicherung</h3>
              <h3>Elementarversicherung</h3>
              <h3>Mietkautionsversicherung</h3>
            </div>
            <div className='content-item'>
              <h1>Tierversicherungen</h1>
              <h3>Hundehaftpflicht</h3>
              <h3>Hundekrankenversicherung</h3>
              <h3>Katzenversicherung</h3>
              <h3>Pferdehaftpflicht</h3>
              <h3>Pferde-OP-Versicherung</h3>
            </div>
            <div className='content-item'>
              <h1> Haftpflicht & Recht</h1>
              <h3>Privathaftpflicht</h3>
              <h3>Diensthaftpflicht</h3>
              <h3>Rechtsschutzversicherung</h3>
              <h3>Sofortige Rechtshilfe</h3>
            </div>
          </div>
          <div className='content-bottom'>
            <div className='content-item'>
              <h1>Krankenversicherung</h1>
              <h3>Private Krankenversicherung</h3>
              <h3>Gesetzliche Krankenkassen</h3>
              <h3>Zahnzusatzversicherung</h3>
              <h3>Krankenhauszusatz</h3>
              <h3>Heilpraktiker und Brille</h3>
            </div>
            <div className='content-item'>
              <h1>Risiko & Vorsorge</h1>
              <h3>Risikolebensversicherung</h3>
              <h3>Unfallversicherung</h3>
              <h3>Berufsunfähigkeit</h3>
              <h3>Grundfähigkeitsversicherung</h3>
              <h3>Sterbegeldversicherung</h3>
            </div>
            <div className='content-item'>
              <h1>Altersvorsorge & Pflege</h1>
              <h3>Rentenversicherung</h3>
              <h3>Riester-Rente</h3>
              <h3>Rürup-Rente</h3>
              <h3>Sofort-Rente</h3>
              <h3>Pflegeversicherung</h3>
            </div>
            <div className='content-item'>
              <h1>Handy & Reise</h1>
              <h3>Handyversicherung</h3>
              <h3>Reiseversicherung</h3>
              <h3>Auslandskrankenversicherung</h3>
            </div>
          </div>
        </div>
        <div className='fotter'>
          <h1>
            <span>Versicherungscenter</span> - Versicherungen verwalten und
            optimieren
          </h1>
          <h1>
            <span>Kündigungsservice</span> - Versicherungen kostenlos kündigen
          </h1>
          <h1>
            <span>Adresse, Bankverbindung & Name</span>- Versicherungen über
            Änderungen informieren
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Versicherungen
