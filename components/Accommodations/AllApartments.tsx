"use client";

import React from "react";
import PropertyCard from "./PropertyCard";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}

export default AllApartments;
