// "use client";
// import Image from "next/image";
// import { RxCross2 } from "react-icons/rx";
// import { Features, getFeaturesData } from "@/lib/features";
// import { useEffect, useRef } from "react";
// import { useLocale } from "next-intl";
// import { getFeaturesTitleData } from "@/lib/features_titles";

// type Props = {
//   handleClose: () => void;
// };

// function FeaturesComponent({ handleClose }: Props) {
//   const featuresRef = useRef<HTMLDivElement>(null);
//   const localeActive = useLocale();
//   const FeaturesData = getFeaturesData(localeActive);
//   const FeaturesTitleData = getFeaturesTitleData(localeActive);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         featuresRef.current &&
//         !featuresRef.current.contains(event.target as Node)
//       ) {
//         handleClose();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section className="bg-black/50 w-screen h-screen inset-0 fixed z-50 flex items-center justify-center">
//       <div
//         ref={featuresRef}
//         className="flex flex-col justify-center items-end bg-white rounded-md h-[90%] w-[90%] md:w-[780px]"
//       >
//         <div className="flex p-3">
//           <button
//             onClick={() => handleClose()}
//             className="text-white cursor-pointer p-2 close-button"
//           >
//             <RxCross2
//               className=" text-2xl text-dark_blue_black hover:scale-150
//                   transition-scale duration-300"
//             />
//           </button>
//         </div>
//         <div className="overflow-y-scroll h-[98%] w-full p-6">

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturesComponent;
