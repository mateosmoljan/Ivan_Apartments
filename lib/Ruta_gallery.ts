import { StaticImageData } from "next/image";

import image1 from "@/public/assets/images/Ruta/1.jpeg";
import image2 from "@/public/assets/images/Ruta/2.jpeg";
import image3 from "@/public/assets/images/Ruta/3.jpeg";
import image4 from "@/public/assets/images/Ruta/4.jpeg";
import image5 from "@/public/assets/images/Ruta/5.jpeg";
import image6 from "@/public/assets/images/Ruta/6.jpg";
import image7 from "@/public/assets/images/Ruta/7.jpg";
import image8 from "@/public/assets/images/Ruta/8.jpg";
import image9 from "@/public/assets/images/Ruta/9.jpg";
import image10 from "@/public/assets/images/Ruta/10.jpg";
import image11 from "@/public/assets/images/Ruta/11.jpg";
import image12 from "@/public/assets/images/Ruta/12.jpg";
import image13 from "@/public/assets/images/Ruta/13.jpg";
import image14 from "@/public/assets/images/Ruta/14.jpg";
import image15 from "@/public/assets/images/Ruta/15.jpg";
import image16 from "@/public/assets/images/Ruta/16.jpg";
import image17 from "@/public/assets/images/Ruta/17.jpg";
import image18 from "@/public/assets/images/Ruta/18.jpg";
import image19 from "@/public/assets/images/Ruta/19.jpg";
import image20 from "@/public/assets/images/Ruta/20.jpg";
import image21 from "@/public/assets/images/Ruta/21.jpg";

type LocationData = {
  src: StaticImageData;
  alt: string;
};

type DataObject = {
  images: LocationData[];
};

export const RutaGalleryLib: DataObject = {
  images: [
    { src: image1, alt: "Ludwig Zagreb Center Apartment" },
    { src: image2, alt: "Ludwig Zagreb Center Apartment" },
    { src: image3, alt: "Ludwig Zagreb Center Apartment" },
    { src: image4, alt: "Ludwig Zagreb Center Apartment" },
    { src: image5, alt: "Ludwig Zagreb Center Apartment" },
    { src: image6, alt: "Ludwig Zagreb Center Apartment" },
    { src: image7, alt: "Ludwig Zagreb Center Apartment" },
    { src: image8, alt: "Ludwig Zagreb Center Apartment" },
    { src: image9, alt: "Ludwig Zagreb Center Apartment" },
    { src: image10, alt: "Ludwig Zagreb Center Apartment" },
    { src: image11, alt: "Ludwig Zagreb Center Apartment" },
    { src: image12, alt: "Ludwig Zagreb Center Apartment" },
    { src: image13, alt: "Ludwig Zagreb Center Apartment" },
    { src: image14, alt: "Ludwig Zagreb Center Apartment" },
    { src: image15, alt: "Ludwig Zagreb Center Apartment" },
    { src: image16, alt: "Ludwig Zagreb Center Apartment" },
    { src: image17, alt: "Ludwig Zagreb Center Apartment" },
    { src: image18, alt: "Ludwig Zagreb Center Apartment" },
    { src: image19, alt: "Ludwig Zagreb Center Apartment" },
    { src: image20, alt: "Ludwig Zagreb Center Apartment" },
    { src: image21, alt: "Ludwig Zagreb Center Apartment" },
  ],
};
