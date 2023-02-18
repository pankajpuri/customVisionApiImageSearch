const cars = [
  {
    id: 1,
    make: "toyota",
    bodystyle: "hatchback",
    color: "white",
    img: "/images/cars/1.jpg",
  },
  {
    id: 2,
    make: "toyota",
    color: "blue",
    bodystyle: "hatchback",
    img: "/images/cars/5.jpg",
  },
  {
    id: 3,
    make: "toyota",
    color: "silver",
    bodystyle: "sedan",
    img: "/images/cars/7.jpg",
  },

  {
    id: 4,
    make: "honda",
    img: "/images/cars/blueehondahatchback.jpg",
  },
  {
    id: 5,
    make: "toyota",
    img: "/images/cars/whitetoyotahatchback.jpg",
  },
  {
    id: 6,
    make: "toyota",
    img: "/images/cars/toyotasedansilver.jpg",
  },
  {
    id: 7,
    make: "toyota",
    img: "/images/cars/toyotasedanredcamry.jpg",
  },
  {
    id: 8,
    make: "toyota",
    img: "/images/cars/toyotasedanred.jpg",
  },
  {
    id: 9,
    make: "toyota",
    img: "/images/cars/toyotasedanblackcamry.jpg",
  },
  {
    id: 10,
    make: "toyota",
    img: "/images/cars/toyotasedanblack.jpg",
  },
  {
    id: 11,
    make: "toyota",
    img: "/images/cars/toyotabluehatchback.jpg",
  },
  {
    id: 12,
    make: "toyota",
    img: "/images/cars/toyotablack.jpg",
  },
  {
    id: 13,
    make: "toyota",
    img: "/images/cars/blacktoyotahatchblackk.jpg",
  },
  {
    id: 14,
    make: "toyota",
    img: "/images/cars/blacktoyotahatchback.jpg",
  },
  {
    id: 15,
    make: "honda",
    img: "/images/cars/10.jpg",
  },
  {
    id: 16,
    make: "honda",
    img: "/images/cars/12.jpg",
  },
  {
    id: 17,
    make: "honda",
    img: "/images/cars/11.jpg",
  },
  {
    id: 18,
    make: "honda",
    img: "/images/cars/whitehondasuv.jpg",
  },
  {
    id: 19,
    make: "honda",
    img: "/images/cars/silverhondasedan.jpg",
  },
  {
    id: 20,
    make: "honda",
    img: "/images/cars/sedanredhonda.jpg",
  },
  {
    id: 21,
    make: "honda",
    img: "/images/cars/redddsedanhonda.jpg",
  },
  {
    id: 22,
    make: "honda",
    img: "/images/cars/hondawhitehatchback.jpg",
  },
  {
    id: 23,
    make: "honda",
    img: "/images/cars/hondaredsuv.jpg",
  },
  {
    id: 24,
    make: "honda",
    img: "/images/cars/hondahatchbacksilver.jpg",
  },
  {
    id: 25,
    make: "honda",
    img: "/images/cars/hondahatchbackblue.jpg",
  },
  {
    id: 26,
    make: "honda",
    img: "/images/cars/hondablack.jpg",
  },
  {
    id: 27,
    make: "Ferrari",
    img: "/images/cars/ferrariwhiteChallenge.jpg",
  },
  {
    id: 28,
    make: "Ferrari",
    img: "/images/cars/ferrarisilver.jpg",
  },
  {
    id: 29,
    make: "Ferrari",
    img: "/images/cars/ferrariblack.jpg",
  },
  {
    id: 30,
    make: "Ferrari",
    img: "/images/cars/ferrariblue.jpg",
  },
  {
    id: 31,
    make: "Ferrari",
    img: "/images/cars/13.jpg",
  },
];
export function getcars() {
  return cars;
}

export function getCarsList(make) {
  return cars.filter((car) => car.make === make);
}
