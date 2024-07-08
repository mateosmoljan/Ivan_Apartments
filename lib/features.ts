import { StaticImageData } from "next/image";
import hairdryer from "@/public/assets/icons/hairdryer.png";
import hot_water from "@/public/assets/icons/hot-water.png";
import washer from "@/public/assets/icons/washer.png";
import dryer from "@/public/assets/icons/dryer.png";
import essentials from "@/public/assets/icons/essentials.png";
import hangers from "@/public/assets/icons/hangers.png";
import bed_linens from "@/public/assets/icons/bed_linens.png";
import pillows_blankets from "@/public/assets/icons/pillows_blankets.png";
import darkening_shades from "@/public/assets/icons/darkening_shades.png";
import iron from "@/public/assets/icons/iron.png";
import television from "@/public/assets/icons/television.png";
import crib from "@/public/assets/icons/crib.png";
import books_toys from "@/public/assets/icons/books_toys.png";
import high_chair from "@/public/assets/icons/high-chair.png";
import fireplace_guard from "@/public/assets/icons/fireplace_guard.png";
import window_guards from "@/public/assets/icons/window_guards.png";
import outlet_covers from "@/public/assets/icons/outlet_cover.png";
import baby_safety_gates from "@/public/assets/icons/baby_safety_gates.png";
import table_corner_guards from "@/public/assets/icons/table_corner_guards.png";
import air_conditioner from "@/public/assets/icons/air_conditioner.png";
import indoor_fireplace from "@/public/assets/icons/indoor_fireplace.png";
import heating from "@/public/assets/icons/heating.png";
import fire_extinguisher from "@/public/assets/icons/fire-extinguisher.png";
import aid_kit from "@/public/assets/icons/aid_kit.png";
import wifi from "@/public/assets/icons/wifi.png";
import dishes from "@/public/assets/icons/dishes.png";
import kitchen from "@/public/assets/icons/kitchen.png";
import microwave from "@/public/assets/icons/microwave.png";
import refrigerator from "@/public/assets/icons/refrigerator.png";
import cooking_basics from "@/public/assets/icons/cooking_basics.png";
import dishwasher from "@/public/assets/icons/dishwasher.png";
import stove from "@/public/assets/icons/stove.png";
import oven from "@/public/assets/icons/oven.png";
import coffee_maker from "@/public/assets/icons/coffee_maker.png";
import sheet from "@/public/assets/icons/sheet.png";
import grill from "@/public/assets/icons/grill.png";
import backyard from "@/public/assets/icons/backyard.png";
import parking from "@/public/assets/icons/parking.png";
import pool from "@/public/assets/icons/pool.png";
import luggage from "@/public/assets/icons/luggage.png";
import smoking from "@/public/assets/icons/smoking.png";
import long_term_stays from "@/public/assets/icons/long_term_stays.png";
import key from "@/public/assets/icons/key.png";
import smoke_detektor from "@/public/assets/icons/smoke-detector.png";
import carbon from "@/public/assets/icons/carbon.png";

type features = {
  Apartment_Ludwig: string[];
  Apartment_Benedikta: string[];
  Room_Lota: string[];
  Room_Ruta: string[];
};

type DataObject = {
  data: features;
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

const replaceFeaturesData = (
  Apartment_Ludwig: string[],
  Apartment_Benedikta: string[],
  Room_Lota: string[],
  Room_Ruta: string[]
): features => {
  return {
    Apartment_Ludwig,
    Apartment_Benedikta,
    Room_Lota,
    Room_Ruta,
  };
};

// Define the data object
export const FeaturesDataEn: DataObject = {
  data: replaceFeaturesData(
    enData.Features.Apartment_Ludwig,
    enData.Features.Apartment_Benedikta,
    enData.Features.Room_Lota,
    enData.Features.Room_Ruta
  ),
};

// export const FeaturesDataDE: DataObject = {
//   data: replaceFeaturesData(
//     Features,
//     deData.Villa_Features.card.title,
//     deData.Villa_Features.card.title,
//     deData.Villa_Features.card.des
//   ),
// };

export const FeaturesDataHR: DataObject = {
  data: replaceFeaturesData(
    hrData.Features.Apartment_Ludwig,
    hrData.Features.Apartment_Benedikta,
    hrData.Features.Room_Lota,
    hrData.Features.Room_Ruta
  ),
};

// export const FeaturesDataIT: DataObject = {
//   data: replaceFeaturesData(
//     Features,
//     itData.Villa_Features.card.title,
//     itData.Villa_Features.card.title,
//     itData.Villa_Features.card.des
//   ),
// };

export const getFeaturesData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return FeaturesDataEn;
    // case "de":
    //   return FeaturesDataDE;
    case "hr":
      return FeaturesDataHR;
    // case "it":
    //   return FeaturesDataIT;
    default:
      // Return default language if specified language is not found
      return FeaturesDataEn;
  }
};
