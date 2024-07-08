import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type LocationToVisitData = {
  des?: string[];
};

type DataObject = {
  data: LocationToVisitData[];
  // You can add more arrays or properties if needed
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

// export const LocationToVisit: LocationToVisitData[] = [
//   {
//     placeToVisit: (
//       <a
//         href="https://www.aquacolors.eu"
//         target="_blank"
//         className="text-yellow"
//       >
//         www.aquacolors.eu
//       </a>
//     ),
//   },
//   {
//     placeToVisit: (
//       <a
//         href="https://www.np-brijuni.hr/"
//         target="_blank"
//         className="text-yellow"
//       >
//         www.np-brijuni.hr
//       </a>
//     ),
//   },
//   {
//     placeToVisit: (
//       <a
//         href="https://www.pulainfo.hr/"
//         target="_blank"
//         className="text-yellow"
//       >
//         www.pulainfo.hr
//       </a>
//     ),
//   },
//   {
//     placeToVisit: (
//       <a href="https://aquarium.hr/" target="_blank" className="text-yellow">
//         aquarium.hr
//       </a>
//     ),
//   },
//   {
//     placeToVisit: (
//       <a
//         href="https://www.istralandia.hr/"
//         target="_blank"
//         className="text-yellow"
//       >
//         www.istralandia.hr
//       </a>
//     ),
//   },
// ];

// const replaceDes = (des: string) => {
//   return {
//     // ...location,
//     des,
//   };
// };

// Define the data object
export const LocationsDataEn: LocationToVisitData = {
  des: enData.About.locations.des,
};

// You can also define a separate object for German translations if needed
// export const LocationsDataDE: DataObject = {
//   locations: replaceDes(LocationToVisit, deData.About.locations.des),
// };

export const LocationsDataHR: LocationToVisitData = {
  des: hrData.About.locations.des,
};

// export const LocationsDataIT: DataObject = {
//   locations: replaceDes(LocationToVisit, itData.About.locations.des),
// };

export const getLocationsData = (language: string): LocationToVisitData => {
  switch (language) {
    case "en":
      return LocationsDataEn;
    // case "de":
    //   return LocationsDataDE;
    case "hr":
      return LocationsDataHR;
    // case "it":
    //   return LocationsDataIT;
    default:
      // Return default language if specified language is not found
      return LocationsDataEn;
  }
};
