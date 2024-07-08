type TitleData = {
  title?: string;
};

type DataObject = {
  data: TitleData[];
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

const createFeaturesTitle = (title?: string): TitleData => {
  return {
    title,
  };
};

// Define the data object
export const FeaturesDataEn: DataObject = {
  data: [createFeaturesTitle(enData.Features.title)],
};

// export const FeaturesDataDE: DataObject = {
//   data: [createFeaturesTitle(
//     deData.Villa_Features.title,
//     deData.Villa_Features.title2,
//     deData.Villa_Features.title3,
//     deData.Villa_Features.title4,
//     deData.Villa_Features.title5,
//     deData.Villa_Features.title6,
//     deData.Villa_Features.title7,
//     deData.Villa_Features.title8,
//     deData.Villa_Features.title9,
//     deData.Villa_Features.title10,
//     deData.Villa_Features.title11,
//     deData.Villa_Features.title12,
//     deData.Villa_Features.title13,
//     deData.Villa_Features.title14,
//     deData.Villa_Features.button
//   )],
// };

export const FeaturesDataHR: DataObject = {
  data: [createFeaturesTitle(hrData.Features.title)],
};

// export const FeaturesDataIT: DataObject = {
//   data: [createFeaturesTitle(
//     itData.Villa_Features.title,
//     itData.Villa_Features.title2,
//     itData.Villa_Features.title3,
//     itData.Villa_Features.title4,
//     itData.Villa_Features.title5,
//     itData.Villa_Features.title6,
//     itData.Villa_Features.title7,
//     itData.Villa_Features.title8,
//     itData.Villa_Features.title9,
//     itData.Villa_Features.title10,
//     itData.Villa_Features.title11,
//     itData.Villa_Features.title12,
//     itData.Villa_Features.title13,
//     itData.Villa_Features.title14,
//     itData.Villa_Features.button
//   )],
// };

export const getFeaturesTitleData = (language: string): DataObject => {
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
