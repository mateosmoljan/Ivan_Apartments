type LocationData = {
  Ludwig_place?: string[];
  Ludwig_button?: string;
  Ludwig_title?: string;

  Benedikt_place?: string[];
  Benedikt_button?: string;
  Benedikt_title?: string;

  Lota_Ruta_place?: string[];
  Lota_Ruta_button?: string;
  Lota_Ruta_title?: string;
};

type DataObject = {
  data: LocationData[];
  // You can add more arrays or properties if needed
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

const createLocationDataArray = (data: any): LocationData[] => {
  return [
    {
      Ludwig_place: data.Distances.Ludwig.place,
      Ludwig_button: data.Distances.Ludwig.button,
      Ludwig_title: data.Distances.Ludwig.title,

      Benedikt_place: data.Distances.Benedikt.place,
      Benedikt_button: data.Distances.Benedikt.button,
      Benedikt_title: data.Distances.Benedikt.title,

      Lota_Ruta_place: data.Distances.Lota_Ruta.place,
      Lota_Ruta_button: data.Distances.Lota_Ruta.button,
      Lota_Ruta_title: data.Distances.Lota_Ruta.title,
    },
  ];
};

// Define the data objects
export const DistancesDataEn: DataObject = {
  data: createLocationDataArray(enData),
};

// You can also define a separate object for German translations if needed
// export const DistancesDataDE: DataObject = {
//   data: createLocationDataArray(deData),
// };

export const DistancesDataHR: DataObject = {
  data: createLocationDataArray(hrData),
};

// export const DistancesDataIT: DataObject = {
//   data: createLocationDataArray(itData),
// };

export const getDistancesData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return DistancesDataEn;
    // case "de":
    //   return DistancesDataDE;
    case "hr":
      return DistancesDataHR;
    // case "it":
    //   return DistancesDataIT;
    default:
      // Return default language if specified language is not found
      return DistancesDataEn;
  }
};
