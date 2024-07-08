import { StaticImageData } from "next/image";

import image1 from "@/public/assets/images/Lota/1.jpeg";
import image2 from "@/public/assets/images/Lota/2.jpeg";
import image3 from "@/public/assets/images/Lota/3.jpeg";
import image4 from "@/public/assets/images/Lota/4.jpeg";
import image5 from "@/public/assets/images/Lota/5.jpeg";
import image6 from "@/public/assets/images/Lota/6.jpeg";
import image7 from "@/public/assets/images/Lota/7.jpeg";
import image8 from "@/public/assets/images/Lota/8.jpg";
import image9 from "@/public/assets/images/Lota/9.jpg";
import image10 from "@/public/assets/images/Lota/10.jpg";
import image11 from "@/public/assets/images/Lota/11.jpg";
import image12 from "@/public/assets/images/Lota/12.jpg";
import image13 from "@/public/assets/images/Lota/13.jpg";
import image14 from "@/public/assets/images/Lota/14.jpg";
import image15 from "@/public/assets/images/Lota/15.jpg";

type LocationData = {
  src: StaticImageData;
  alt: string;
};

type DataObject = {
  images: LocationData[];
};

export const LotaGalleryLib: DataObject = {
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
  ],
};
