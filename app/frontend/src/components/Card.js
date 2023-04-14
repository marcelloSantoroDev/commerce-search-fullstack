import React from 'react'
import './CSS/Card.css'

// need to add description and category to the card

function Card(props) {
  const { product: { thumbnail, title, original_price, permalink } } = props;

  return (
    <div className="card">
      <section className="photo">
        <img  src={ thumbnail } alt={title} width="180px"/>
      </section>
      <section className="title-descrip-price">
        <div className="title" >
          <h4>
            { title }
          </h4>
        </div>
        <div className="category">

        </div>
        <div className="price" >
          <h3>
            { original_price }
          </h3>
        </div>
      </section>
      <section className="product-button">
          <a  href={ permalink } target='_blank' rel='noreferrer' className="product-link-button">
            Ir à Web
          </a>
      </section>
    </div>
  )
}

export default Card;