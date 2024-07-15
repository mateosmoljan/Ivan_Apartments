import { StaticImageData } from "next/image";

import one from "@/public/assets/images/jelacica_desktop.jpeg";
import two from "@/public/assets/images/Benedikta/21.jpg";
import three from "@/public/assets/images/Lota/7.jpeg";

import one1 from "@/public/assets/images/jelacica_mobile.jpg";
import two2 from "@/public/assets/images/tomislav.jpg";
import three3 from "@/public/assets/images/Lota/7.jpeg";

type LocationData = {
  src: string;
  srcMobile: string;
  alt: string;
  title?: string;
  des?: string;
  button?: string;
};

type DataObject = {
  images: LocationData[];
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

// Define image data
const imageData: LocationData[] = [
  {
    src: "/assets/images/jelacica_desktop.jpeg",
    srcMobile: "/assets/images/jelacica_mobile.jpg",
    alt: "Ludwig Center",
  },
  {
    src: "/assets/images/Benedikta/21.jpg",
    srcMobile: "/assets/images/tomislav.jpg",
    alt: "Benedikt with Parking",
  },
  {
    src: "/assets/images/Lota/7.jpeg",
    srcMobile: "/assets/images/Lota/7.jpeg",
    alt: "Ruta & Lota - Bus Proximity",
  },
  // Define other image data similarly
];

// Function to replace titles and descriptions with translations from JSON files
const replaceTitlesAndDescriptions = (
  data: LocationData[],
  titles: string[],
  descriptions: string[],
  button: string
) => {
  return data.map((image, index) => ({
    ...image,
    title: titles[index],
    des: descriptions[index],
    button: button,
  }));
};

// Define the data object
export const HeadSwiperLibEN: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    enData.HeaderSwiper.titles,
    enData.HeaderSwiper.descriptions,
    enData.HeaderSwiper.button
  ),
};

// export const HeadSwiperLibDE: DataObject = {
//   images: replaceTitlesAndDescriptions(
//     imageData,
//     deData.HeaderSwiper.titles,
//     deData.HeaderSwiper.descriptions,
//     deData.HeaderSwiper.button
//   ),
// };

export const HeadSwiperLibHR: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    hrData.HeaderSwiper.titles,
    hrData.HeaderSwiper.descriptions,
    hrData.HeaderSwiper.button
  ),
};

// export const HeadSwiperLibIT: DataObject = {
//   images: replaceTitlesAndDescriptions(
//     imageData,
//     itData.HeaderSwiper.titles,
//     itData.HeaderSwiper.descriptions,
//     itData.HeaderSwiper.button
//   ),
// };

export const getHeadSwiperLib = (language: string): DataObject => {
  switch (language) {
    case "en":
      return HeadSwiperLibEN;
    // case "de":
    //   return HeadSwiperLibDE;
    case "hr":
      return HeadSwiperLibHR;
    // case "it":
    //   return HeadSwiperLibIT;
    default:
      return HeadSwiperLibEN; // Default to English
  }
};
