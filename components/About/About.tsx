import { getLocationsData } from "@/lib/LocationToVisit";
import { useLocale, useTranslations } from "next-intl";
import Description from "./Description";

function About() {
  const a = useTranslations("About");
  const localeActive = useLocale();
  const LocationsData = getLocationsData(localeActive);

  return (
    <section className="pt-20 Visit" id="about">
      <div className="container">
        <h1 className="flex justify-center font-arbutus text-3xl sm:text-4xl font-bold text-dark_blue_black">
          Center Apartments - Zagreb
        </h1>
        <div className="pt-10">
          <Description />
          <br />
        </div>
        <div className="pt-5">
          <h2 className="font-ExtraBold">{a("locations.title")}</h2>
          <ul className="list-disc	p-3 pl-8">
            {LocationsData.des?.map((item, index) => (
              <li key={index} className="mb-2 Visit">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
