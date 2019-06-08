import React from 'react'

import Plx from 'react-plx';
import shoppingcart from '../../shoppingcart.svg'

 const NoResultCaro = () => {
    const phoneData = [
        {
          start: 'self',
          startOffset: '1vh',
          duration: 300,
          easing: [0.25, 0.1, 0.6,0.5],
          properties: [
            {
              startValue: 90,
              endValue: 0,
              property: 'rotate',
            },
            {
              startValue: 0,
              endValue: 1,
              property: 'scale',
            },
          ],
        },
      ];
    
    return (
        <div>
              <Plx
        className='Phone'
        parallaxData={ phoneData }
      >
 <img  width="25%" src={shoppingcart}></img>
      </Plx>  
     
        </div>
    )
}
export default NoResultCaro;