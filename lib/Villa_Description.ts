type Villa_DescriptionData = {
  Apartment_Ludwig_Des_des?: string;
  Apartment_Ludwig_Des_subtitle?: string;
  Apartment_Ludwig_Des_des2?: string;
  Apartment_Ludwig_Des_subtitle2?: string;
  Apartment_Ludwig_Des_des3?: string;

  Apartment_Benedikt_Des_des?: string;
  Apartment_Benedikt_Des_subtitle?: string;
  Apartment_Benedikt_Des_des2?: string;
  Apartment_Benedikt_Des_subtitle2?: string;
  Apartment_Benedikt_Des_des3?: string;

  Room_Lota_Des_des?: string;
  Room_Lota_Des_subtitle?: string;
  Room_Lota_Des_des2?: string;
  Room_Lota_Des_subtitle2?: string;
  Room_Lota_Des_des3?: string;

  Room_Ruta_Des_des?: string;
  Room_Ruta_Des_subtitle?: string;
  Room_Ruta_Des_des2?: string;
  Room_Ruta_Des_subtitle2?: string;
  Room_Ruta_Des_des3?: string;
};

type DataObject = {
  data: Villa_DescriptionData[];
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

const createVilla_Description = (
  Apartment_Ludwig_Des_des?: string,
  Apartment_Ludwig_Des_subtitle?: string,
  Apartment_Ludwig_Des_des2?: string,
  Apartment_Ludwig_Des_subtitle2?: string,
  Apartment_Ludwig_Des_des3?: string,
  Apartment_Benedikt_Des_des?: string,
  Apartment_Benedikt_Des_subtitle?: string,
  Apartment_Benedikt_Des_des2?: string,
  Apartment_Benedikt_Des_subtitle2?: string,
  Apartment_Benedikt_Des_des3?: string,
  Room_Lota_Des_des?: string,
  Room_Lota_Des_subtitle?: string,
  Room_Lota_Des_des2?: string,
  Room_Lota_Des_subtitle2?: string,
  Room_Lota_Des_des3?: string,
  Room_Ruta_Des_des?: string,
  Room_Ruta_Des_subtitle?: string,
  Room_Ruta_Des_des2?: string,
  Room_Ruta_Des_subtitle2?: string,
  Room_Ruta_Des_des3?: string
): Villa_DescriptionData => {
  return {
    Apartment_Ludwig_Des_des,
    Apartment_Ludwig_Des_subtitle,
    Apartment_Ludwig_Des_des2,
    Apartment_Ludwig_Des_subtitle2,
    Apartment_Ludwig_Des_des3,
    Apartment_Benedikt_Des_des,
    Apartment_Benedikt_Des_subtitle,
    Apartment_Benedikt_Des_des2,
    Apartment_Benedikt_Des_subtitle2,
    Apartment_Benedikt_Des_des3,
    Room_Lota_Des_des,
    Room_Lota_Des_subtitle,
    Room_Lota_Des_des2,
    Room_Lota_Des_subtitle2,
    Room_Lota_Des_des3,
    Room_Ruta_Des_des,
    Room_Ruta_Des_subtitle,
    Room_Ruta_Des_des2,
    Room_Ruta_Des_subtitle2,
    Room_Ruta_Des_des3,
  };
};

// Define the data object
export const Villa_DescriptionDataEn: DataObject = {
  data: [
    createVilla_Description(
      enData.Apartment_Ludwig_Des.des,
      enData.Apartment_Ludwig_Des.subtitle,
      enData.Apartment_Ludwig_Des.des2,
      enData.Apartment_Ludwig_Des.subtitle2,
      enData.Apartment_Ludwig_Des.des3,

      enData.Apartment_Benedikt_Des.des,
      enData.Apartment_Benedikt_Des.subtitle,
      enData.Apartment_Benedikt_Des.des2,
      enData.Apartment_Benedikt_Des.subtitle2,
      enData.Apartment_Benedikt_Des.des3,

      enData.Room_Lota_Des.des,
      enData.Room_Lota_Des.subtitle,
      enData.Room_Lota_Des.des2,
      enData.Room_Lota_Des.subtitle2,
      enData.Room_Lota_Des.des3,

      enData.Room_Ruta_Des.des,
      enData.Room_Ruta_Des.subtitle,
      enData.Room_Ruta_Des.des2,
      enData.Room_Ruta_Des.subtitle2,
      enData.Room_Ruta_Des.des3
    ),
  ],
};

// You can also define a separate object for German translations if needed
// export const Villa_DescriptionDataDE: DataObject = {
//   data: [
//     createVilla_Description(
//       deData.Villa_Description.des,
//       deData.Villa_Description.subtitle,
//       deData.Villa_Description.des2,
//       deData.Villa_Description.subtitle2,
//       deData.Villa_Description.des3
//     ),
//   ],
// };

export const Villa_DescriptionDataHR: DataObject = {
  data: [
    createVilla_Description(
      hrData.Apartment_Ludwig_Des.des,
      hrData.Apartment_Ludwig_Des.subtitle,
      hrData.Apartment_Ludwig_Des.des2,
      hrData.Apartment_Ludwig_Des.subtitle2,
      hrData.Apartment_Ludwig_Des.des3,

      hrData.Apartment_Benedikt_Des.des,
      hrData.Apartment_Benedikt_Des.subtitle,
      hrData.Apartment_Benedikt_Des.des2,
      hrData.Apartment_Benedikt_Des.subtitle2,
      hrData.Apartment_Benedikt_Des.des3,

      hrData.Room_Lota_Des.des,
      hrData.Room_Lota_Des.subtitle,
      hrData.Room_Lota_Des.des2,
      hrData.Room_Lota_Des.subtitle2,
      hrData.Room_Lota_Des.des3,

      hrData.Room_Ruta_Des.des,
      hrData.Room_Ruta_Des.subtitle,
      hrData.Room_Ruta_Des.des2,
      hrData.Room_Ruta_Des.subtitle2,
      hrData.Room_Ruta_Des.des3
    ),
  ],
};

// export const Villa_DescriptionDataIT: DataObject = {
//   data: [
//     createVilla_Description(
//       itData.Villa_Description.des,
//       itData.Villa_Description.subtitle,
//       itData.Villa_Description.des2,
//       itData.Villa_Description.subtitle2,
//       itData.Villa_Description.des3
//     ),
//   ],
// };

export const getVilla_DescriptionData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return Villa_DescriptionDataEn;
    // case "de":
    //   return Villa_DescriptionDataDE;
    case "hr":
      return Villa_DescriptionDataHR;
    // case "it":
    //   return Villa_DescriptionDataIT;
    default:
      // Return default language if specified language is not found
      return Villa_DescriptionDataEn;
  }
};
