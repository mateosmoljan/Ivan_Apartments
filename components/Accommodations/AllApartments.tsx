"use client";

import React from "react";
import PropertyCard from "./PropertyCard";
import Slider from "react-slick";
import { useLocale } from "next-intl";
import { getAccommodationData } from "@/lib/acommodation";
import { PropertyGalleryLib } from "@/lib/Ludwig_gallery";
import { BenediktaGalleryLib } from "@/lib/Benedikta_gallery";
import { LotaGalleryLib } from "@/lib/Lota_gallery";
import { RutaGalleryLib } from "@/lib/Ruta_gallery";

function AllApartments() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  const localeActive = useLocale();
  const AccommodationsData = getAccommodationData(localeActive);

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <PropertyCard
            props={{
              card_title: AccommodationsData.data[0].Lodwig_card_title,
              card_des: AccommodationsData.data[0].Lodwig_card_des,
              card_des2: AccommodationsData.data[0].Lodwig_card_des2,
              card_des3: AccommodationsData.data[0].Lodwig_card_des3,
              money: AccommodationsData.data[0].Lodwig_money,
              PropertyGallery: PropertyGalleryLib,
            }}
          />
        </div>
        <div>
          <PropertyCard
            props={{
              card_title: AccommodationsData.data[0].Benedikt_card_title,
              card_des: AccommodationsData.data[0].Benedikt_card_des,
              card_des2: AccommodationsData.data[0].Benedikt_card_des2,
              card_des3: AccommodationsData.data[0].Benedikt_card_des3,
              money: AccommodationsData.data[0].Benedikt_money,
              PropertyGallery: BenediktaGalleryLib,
            }}
          />
        </div>
        <div>
          <PropertyCard
            props={{
              card_title: AccommodationsData.data[0].Lota_card_title,
              card_des: AccommodationsData.data[0].Lota_card_des,
              card_des2: AccommodationsData.data[0].Lota_card_des2,
              card_des3: AccommodationsData.data[0].Lota_card_des3,
              money: AccommodationsData.data[0].Lota_money,
              PropertyGallery: LotaGalleryLib,
            }}
          />
        </div>
        <div>
          <PropertyCard
            props={{
              card_title: AccommodationsData.data[0].Ruta_card_title,
              card_des: AccommodationsData.data[0].Ruta_card_des,
              card_des2: AccommodationsData.data[0].Ruta_card_des2,
              card_des3: AccommodationsData.data[0].Ruta_card_des3,
              money: AccommodationsData.data[0].Ruta_money,
              PropertyGallery: RutaGalleryLib,
            }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default AllApartments;
