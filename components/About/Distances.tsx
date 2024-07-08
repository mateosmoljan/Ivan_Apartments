"use client";

import { useEffect, useState } from "react";
import { getDistancesData } from "../../lib/LocationDistance";
import GoogleMaps from "./GoogleMaps";
import { useLocale } from "next-intl";
import Markdown from "react-markdown";

function Distances() {
  const localeActive = useLocale();
  const DistancesData = getDistancesData(localeActive);
  const [showMap, setShowMap] = useState<string>("");

  const handleMapClose = () => {
    setShowMap("");
  };

  useEffect(() => {
    document.body.style.overflow = showMap ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMap]);

  return (
    <section className="py-10">
      <div className="container flex flex-col gap-5 ">
        {/* Ludwig Section */}
        {DistancesData.data[0].Ludwig_title && (
          <div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <h1 className="font-bold text-xl text-dark_blue_black">
                {DistancesData.data[0].Ludwig_title}
              </h1>
              <div className="flex justify-end">
                <button className="btn-2" onClick={() => setShowMap("Ludwig")}>
                  {DistancesData.data[0].Ludwig_button}
                </button>
              </div>
            </div>
            {showMap === "Ludwig" && (
              <GoogleMaps apartment="Ludwig" onClose={handleMapClose} />
            )}
            <div className="flex flex-wrap">
              {DistancesData.data[0].Ludwig_place?.map((place, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between w-full sm:w-1/2 p-3 pt-5 ${
                    index === DistancesData.data[0].Ludwig_place!.length - 1 ||
                    index === DistancesData.data[0].Ludwig_place!.length - 2
                      ? ""
                      : "sm:border-b sm:border-inherit"
                  } mobile_border`}
                >
                  <span className="font-medium">
                    <Markdown>{place}</Markdown>
                  </span>
                  {/* Assuming distance is part of the place data */}
                  {/* <span className="text-sm font-bold">{place.distance} km</span> */}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benedikt Section */}
        {DistancesData.data[0].Benedikt_title && (
          <div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <h1 className="font-bold text-xl text-dark_blue_black">
                {DistancesData.data[0].Benedikt_title}
              </h1>
              <div className="flex justify-end">
                <button
                  className="btn-2"
                  onClick={() => setShowMap("Benedikta")}
                >
                  {DistancesData.data[0].Benedikt_button}
                </button>
              </div>
            </div>
            {showMap === "Benedikta" && (
              <GoogleMaps apartment="Benedikta" onClose={handleMapClose} />
            )}
            <div className="flex flex-wrap">
              {DistancesData.data[0].Benedikt_place?.map((place, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between w-full sm:w-1/2 p-3 pt-5 ${
                    index ===
                      DistancesData.data[0].Benedikt_place!.length - 1 ||
                    index === DistancesData.data[0].Benedikt_place!.length - 2
                      ? ""
                      : "sm:border-b sm:border-inherit"
                  } mobile_border`}
                >
                  <span className="font-medium">
                    <Markdown>{place}</Markdown>
                  </span>
                  {/* Assuming distance is part of the place data */}
                  {/* <span className="text-sm font-bold">{place.distance} km</span> */}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lota_Ruta Section */}
        {DistancesData.data[0].Lota_Ruta_title && (
          <div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <h1 className="font-bold text-xl text-dark_blue_black">
                {DistancesData.data[0].Lota_Ruta_title}
              </h1>
              <div className="flex justify-end">
                <button
                  className="btn-2"
                  onClick={() => setShowMap("Lota_Ruta")}
                >
                  {DistancesData.data[0].Lota_Ruta_button}
                </button>
              </div>
            </div>
            {showMap === "Lota_Ruta" && (
              <GoogleMaps apartment="Lota_Ruta" onClose={handleMapClose} />
            )}
            <div className="flex flex-wrap">
              {DistancesData.data[0].Lota_Ruta_place?.map((place, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between w-full sm:w-1/2 p-3 pt-5 ${
                    index ===
                      DistancesData.data[0].Lota_Ruta_place!.length - 1 ||
                    index === DistancesData.data[0].Lota_Ruta_place!.length - 2
                      ? ""
                      : "sm:border-b sm:border-inherit"
                  } mobile_border`}
                >
                  <span className="font-medium">
                    <Markdown>{place}</Markdown>
                  </span>
                  {/* Assuming distance is part of the place data */}
                  {/* <span className="text-sm font-bold">{place.distance} km</span> */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Distances;
