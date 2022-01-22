import h1 from './shop-photos/hat1.png'
import h2 from './shop-photos/hat2.png'
import h3 from './shop-photos/hat3.png'
import h4 from './shop-photos/hat4.png'
import h5 from './shop-photos/hat5.png'
import h6 from './shop-photos/hat6.png'
import h7 from './shop-photos/hat7.png'
import h8 from './shop-photos/hat8.png'
import h9 from './shop-photos/hat9.png'
import j1 from './shop-photos/jacket1.png'
import j2 from './shop-photos/jacket2.png'
import j3 from './shop-photos/jacket3.png'
import j6 from './shop-photos/jacket6.png'
import j5 from './shop-photos/jacket5.png'
import m1 from './shop-photos/men1.png'
import m2 from './shop-photos/men2.png'
import m3 from './shop-photos/men3.png'
import m4 from './shop-photos/men4.png'
import m5 from './shop-photos/men5.png'
import m6 from './shop-photos/men6.png'
import snk1 from './shop-photos/snk1.png'
import snk2 from './shop-photos/snk2.png'
import snk3 from './shop-photos/snk3.png'
import snk4 from './shop-photos/snk4.png'
import snk5 from './shop-photos/snk5.png'
import snk6 from './shop-photos/snk6.png'
import snk7 from './shop-photos/snk7.png'
import snk8 from './shop-photos/snk8.png'
import wm6 from './shop-photos/wmen6.png'
import wm7 from './shop-photos/wmen7.png'
import wm1 from './shop-photos/wmen1.png'
import wm2 from './shop-photos/wmen2.png'
import wm3 from './shop-photos/wmen3.png'
import wm4 from './shop-photos/wmen4.png'
import wm5 from './shop-photos/wmen5.png'

const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: h1,
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: h2,
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: h3,
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: h4,
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: h5,
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: h6,
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: h7,
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: h8,
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: h9,
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: snk1,
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: snk2,
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: snk3,
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: snk4,
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: snk5,
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: snk6,
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: snk7,
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: snk8,
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: j2,
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: j3,
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: j6,
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: j1,
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: j5,
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1, 
          name: 'Blue Tanktop',
          imageUrl: wm1,
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: wm2,
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: wm3,
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: wm4,
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: wm5,
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: wm6,
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: wm7,
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: m1,
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: m6,
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: m2,
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: m3,
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: m4,
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: m5,
          price: 25
        }
      ]
    }
  ]

export default SHOP_DATA;