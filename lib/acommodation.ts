type AccommodationsData = {
  subtitle?: string;
  title?: string;
  Lodwig_card_title?: string;
  Lodwig_card_des?: string;
  Lodwig_card_des2?: string;
  Lodwig_card_des3?: string;
  Lodwig_money?: string;

  Benedikt_card_title?: string;
  Benedikt_card_des?: string;
  Benedikt_card_des2?: string;
  Benedikt_card_des3?: string;
  Benedikt_money?: string;

  Lota_card_title?: string;
  Lota_card_des?: string;
  Lota_card_des2?: string;
  Lota_card_des3?: string;
  Lota_money?: string;

  Ruta_card_title?: string;
  Ruta_card_des?: string;
  Ruta_card_des2?: string;
  Ruta_card_des3?: string;
  Ruta_money?: string;
};

type DataObject = {
  data: AccommodationsData[];
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

const createAccommodation = (
  subtitle: string,
  title: string,

  Lodwig_card_title: string,
  Lodwig_card_des: string,
  Lodwig_card_des2: string,
  Lodwig_card_des3: string,
  Lodwig_money: string,

  Benedikt_card_title: string,
  Benedikt_card_des: string,
  Benedikt_card_des2: string,
  Benedikt_card_des3: string,
  Benedikt_money: string,

  Lota_card_title: string,
  Lota_card_des: string,
  Lota_card_des2: string,
  Lota_card_des3: string,
  Lota_money: string,

  Ruta_card_title: string,
  Ruta_card_des: string,
  Ruta_card_des2: string,
  Ruta_card_des3: string,
  Ruta_money: string
): AccommodationsData => {
  return {
    subtitle,
    title,
    Lodwig_card_title,
    Lodwig_card_des,
    Lodwig_card_des2,
    Lodwig_card_des3,
    Lodwig_money,

    Benedikt_card_title,
    Benedikt_card_des,
    Benedikt_card_des2,
    Benedikt_card_des3,
    Benedikt_money,

    Lota_card_title,
    Lota_card_des,
    Lota_card_des2,
    Lota_card_des3,
    Lota_money,

    Ruta_card_title,
    Ruta_card_des,
    Ruta_card_des2,
    Ruta_card_des3,
    Ruta_money,
  };
};

// Define the data object
export const AccommodationDataEn: DataObject = {
  data: [
    createAccommodation(
      enData.Acommodation.subtitle,
      enData.Acommodation.title,

      enData.Acommodation.Ludwig.card_title,
      enData.Acommodation.Ludwig.card_des,
      enData.Acommodation.Ludwig.card_des2,
      enData.Acommodation.Ludwig.card_des3,
      enData.Acommodation.Ludwig.money,

      enData.Acommodation.Benedikt.card_title,
      enData.Acommodation.Benedikt.card_des,
      enData.Acommodation.Benedikt.card_des2,
      enData.Acommodation.Benedikt.card_des3,
      enData.Acommodation.Benedikt.money,

      enData.Acommodation.Lota.card_title,
      enData.Acommodation.Lota.card_des,
      enData.Acommodation.Lota.card_des2,
      enData.Acommodation.Lota.card_des3,
      enData.Acommodation.Lota.money,

      enData.Acommodation.Ruta.card_title,
      enData.Acommodation.Ruta.card_des,
      enData.Acommodation.Ruta.card_des2,
      enData.Acommodation.Ruta.card_des3,
      enData.Acommodation.Ruta.money
    ),
  ],
};

// export const AccommodationDataDE: DataObject = {
//   data: [
//     createAccommodation(
//       deData.Acommodation.subtitle,
//       deData.Acommodation.title,
//       deData.Acommodation.card_title,
//       deData.Acommodation.card_des,
//       deData.Acommodation.card_des2,
//       deData.Acommodation.card_des3
//     ),
//   ],
// };

export const AccommodationDataHR: DataObject = {
  data: [
    createAccommodation(
      hrData.Acommodation.subtitle,
      hrData.Acommodation.title,
      hrData.Acommodation.Ludwig.card_title,
      hrData.Acommodation.Ludwig.card_des,
      hrData.Acommodation.Ludwig.card_des2,
      hrData.Acommodation.Ludwig.card_des3,
      hrData.Acommodation.Ludwig.money,

      hrData.Acommodation.Benedikt.card_title,
      hrData.Acommodation.Benedikt.card_des,
      hrData.Acommodation.Benedikt.card_des2,
      hrData.Acommodation.Benedikt.card_des3,
      hrData.Acommodation.Benedikt.money,

      hrData.Acommodation.Lota.card_title,
      hrData.Acommodation.Lota.card_des,
      hrData.Acommodation.Lota.card_des2,
      hrData.Acommodation.Lota.card_des3,
      hrData.Acommodation.Lota.money,

      hrData.Acommodation.Ruta.card_title,
      hrData.Acommodation.Ruta.card_des,
      hrData.Acommodation.Ruta.card_des2,
      hrData.Acommodation.Ruta.card_des3,
      hrData.Acommodation.Ruta.money
    ),
  ],
};

// export const AccommodationDataIT: DataObject = {
//   data: [
//     createAccommodation(
//       itData.Acommodation.subtitle,
//       itData.Acommodation.title,
//       itData.Acommodation.card_title,
//       itData.Acommodation.card_des,
//       itData.Acommodation.card_des2,
//       itData.Acommodation.card_des3
//     ),
//   ],
// };

export const getAccommodationData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return AccommodationDataEn;
    // case "de":
    //   return AccommodationDataDE;
    case "hr":
      return AccommodationDataHR;
    // case "it":
    //   return AccommodationDataIT;
    default:
      return AccommodationDataEn;
  }
};
