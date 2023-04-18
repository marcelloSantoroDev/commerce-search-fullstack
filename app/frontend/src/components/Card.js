import React from 'react'
import './CSS/Card.css'


function Card(props) {
  const { product: { thumbnail, title, original_price, permalink } } = props;

  return (
    <div className="card">
      <section className="photo">
        <img src={thumbnail} alt={title} width="180px" />
      </section>
      <section className="title-descrip-price">
        <div className="title" >
          <h4>
            {title}
          </h4>
        </div>
        <div className="category">

        </div>
        <div className="price" >
          <span id='string'>Price</span>
          <span id='value'>R${original_price},00</span>
        </div>
      </section>
      <section className="product-button">
        <a href={permalink} target='_blank' rel='noreferrer' className="product-link-button">
          {permalink.includes('buscape') ? 'Go to Buscapé' : 'Go to Meli'}
        </a>
      </section>
    </div>
  )
}

export default Card;

// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import Typography from '@mui/joy/Typography';

// export default function BasicCard(props) {
//   const { product: { thumbnail, title, original_price, permalink } } = props;

//   return (
//     <Card variant="outlined" sx={{ width: 550 }} className='card'>
//       <Typography level="h2" fontSize="md">
//         { title }
//       </Typography>
//       <AspectRatio minHeight="100px" maxHeight="200px" sx={{ width: '200px', height: '' }}>
//         <img
//           src={ thumbnail }
//           loading="lazy"
//           alt="product"
//           style={{ width: '100%' }}
//         />
//       </AspectRatio>
//       <Box sx={{ display: 'flex' }}>
//         <div>
//           <Typography level="body3">Price:</Typography>
//           <Typography fontSize="lg" fontWeight="lg">
//             { original_price }
//           </Typography>
//         </div>
//         <a href={ permalink } target="_blank" rel="noreferrer">
//         <Button
//           variant="solid"
//           size="sm"
//           color="primary"
//           sx={{ ml: '42px', mt: '10px', fontWeight: 600 }}
//         >
//           { permalink.includes('buscape') ? 'Go to Buscapé' : 'Go to Meli'  }
//         </Button>
//         </a>
//       </Box>
//     </Card>
//   );
// }