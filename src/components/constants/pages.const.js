import whiteCar from '../../assets/white-car.png';
import car2 from '../../assets/car5.png';
import car3 from '../../assets/car6.png';


export const heroPageConfig = {
  heading: {
    text: ' श्री राम',
    subText: 'Tour & Travels ',
  },
  description: `Discover amazing places with our tours. We make trips just for you. 
    See beautiful landscapes and learn about different cultures. 
    Our tours are fun and relaxing. Join us for your next adventure!`,
  contact: {
    mobile: ['+91 8423004997', '+91 9235297778'],
    email: [],
  },
  cta: {
    label: 'Book Now',
  },
};

export const aboutConfig = {
  heading: {
    text: 'About Us',
    subText: 'Welcome to our world of adventure!',
  },
  description: [
    ` We're passionate travelers just like you. 
        Our mission is simple: to make your travel dreams come true. 
        With us, you'll explore fascinating destinations, meet friendly locals, and create unforgettable memories. 
        Let's embark on a journey together – your adventure starts here!`,
  ],
  tracker: [
    {
      label: 'One Way',
    },
    {
      label: 'Round Trip',
    },
    {
      label: 'Tour Package',
    }
  ],
  cta: {
    icon: '',
    label: 'Get Started Journey',
  },
};

import dezire from '../../assets/dezire.png';
import ertiga from '../../assets/ertiga-new.png';
import inova from '../../assets/inova.png';
import verna from '../../assets/verna.png';
import traveller from '../../assets/traveller.png';
import aura from '../../assets/aura-no-bg.png';

export const carListConfig = {
  heading: {
    text: 'Vehicle & Services',
    subText:
      'We are offering these vehicles to ensure the best experience for your journey.',
  },
  content: [
    {
      name: 'Swift Dezire',
      price: '₹13/KM',
      image: dezire,
      aosDelay: '0',
      track: [
        {
          label: 'Gorkhpur'
        }, {
          label: 'Khalilabad'
        },
        {
          label: 'Lucknow'
        }
      ],
      track2: [
        {
          label: 'Mumbai'
        }, {
          label: 'Hyderabad'
        },
        {
          label: 'All India'
        }
      ]
    },
    {
      name: 'Ertiga',
      price: '₹16/KM',
      image: ertiga,
      aosDelay: '500',
      track: [
        {
          label: 'Gorkhpur'
        }, {
          label: 'Khalilabad'
        },
        {
          label: 'Lucknow'
        }
      ], track2: [
        {
          label: 'Mumbai'
        }, {
          label: 'Hyderabad'
        },
        {
          label: 'All India'
        }
      ]
    },
    {
      name: 'Innova',
      price: '₹18/KM',
      image: inova,
      aosDelay: '1000',
      track: [
        {
          label: 'Gorkhpur'
        }, {
          label: 'Khalilabad'
        },
        {
          label: 'Lucknow'
        }
      ], track2: [
        {
          label: 'Mumbai'
        }, {
          label: 'Hyderabad'
        },
        {
          label: 'All India'
        }
      ]
    }, {
      name: 'Verna',
      price: '₹18/KM',
      image: verna,
      aosDelay: '1500',
      track: [
        {
          label: 'Gorkhpur'
        }, {
          label: 'Khalilabad'
        },
        {
          label: 'Lucknow'
        }
      ], track2: [
        {
          label: 'Mumbai'
        }, {
          label: 'Hyderabad'
        },
        {
          label: 'All India'
        }
      ]
    }, {
      name: 'Traveler',
      price: '₹35/KM',
      image: traveller,
      aosDelay: '2000',
      track: [
        {
          label: 'Gorkhpur'
        }, {
          label: 'Khalilabad'
        },
        {
          label: 'Lucknow'
        }
      ], track2: [
        {
          label: 'Mumbai'
        }, {
          label: 'Hyderabad'
        },
        {
          label: 'All India'
        }
      ]
    }, {
      name: 'Aura',
      price: '₹13/KM',
      image: aura,
      aosDelay: '2500',
      track: [
        {
          label: 'Gorkhpur'
        }, {
          label: 'Khalilabad'
        },
        {
          label: 'Lucknow'
        }
      ], track2: [
        {
          label: 'Mumbai'
        }, {
          label: 'Hyderabad'
        },
        {
          label: 'All India'
        }
      ]
    },
  ],
};


export const footerConfig = {
  left: {
    label: 'Car Booking',
    description: 'Mehdawal Bypass Samrat Restaurant, Khalilabad, Sant Kabir Nagar, Uttar Pradesh 272175',
    location: 'Khalilabad, Uttar Pradesh',
  },
  right:{
    label: 'We Are Available All Over India',
    description: `Explore the diverse tapestry of India with Shri Ram Tour and Travels! Our journeys span the length and breadth of this enchanting land, offering you a kaleidoscope of experiences from the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, from the bustling streets of Delhi to the tranquil backwaters of Kerala. Immerse yourself in the rich history, vibrant culture, and tantalizing cuisine that India has to offer, guided by our knowledgeable experts who ensure every moment is filled with wonder. Join us on an unforgettable adventure and let Shri Ram Tour and Travels be your gateway to the extraordinary beauty of India.`
  }
  // right: [
  //   {
  //     label: 'Explore',
  //     items: [
  //       {
  //         title: 'Home',
  //         link: '/'
  //       },
  //       {
  //         title: 'About',
  //         link: '/about'
  //       },
  //       {
  //         title: 'Services',
  //         link: '/services'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Contact',
  //     items: [
  //       {
  //         title: 'Phone',
  //         link: '/contact/phone'
  //       },
  //       {
  //         title: 'Email',
  //         link: '/contact/email'
  //       },
  //       {
  //         title: 'Address',
  //         link: '/contact/address'
  //       }
  //     ]
  //   }
  // ]
};
import OwnerCard from "../../assets/owner/card.jpeg";
export const appStoreBanner = {
  label: `Give the chance to us to provide you the best service`,
  image: OwnerCard
}


export const contactConfig = {
  label: 'Get 30% OFF ONE WAY TRIP, BOOK NOW',
  description: `Book your one-way trip now and get 30% off on your booking. `,
  cta: {
    label: 'Contact Us',
    link: '/contact'
  }
}
