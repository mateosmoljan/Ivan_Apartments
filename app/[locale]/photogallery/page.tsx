import ShowcaseGallery from "@/components/Gallery/ShowcaseGallery";
// import ShowcaseGallery2 from "@/components/Gallery/ShowcaseGallery2";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { useTranslations } from "next-intl";
import { PropertyGalleryLib } from "@/lib/Ludwig_gallery";
import { BenediktaGalleryLib } from "@/lib/Benedikta_gallery";
import { LotaGalleryLib } from "@/lib/Lota_gallery";
import { RutaGalleryLib } from "@/lib/Ruta_gallery";

function Photogallery() {
  const t = useTranslations("Titles");
  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <div className="">
        <div>
          <h2 className="mt-12 font-ExtraBold text-center text-4xl text-dark_blue_black tracking-wider">
            {t("Photogallery.Ludwig")}
          </h2>
          <div>
            <div>
              <ShowcaseGallery
                property_gallery={PropertyGalleryLib}
                subtitle="Apartment"
                title="Ludwig"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mt-12 font-ExtraBold text-center text-4xl text-dark_blue_black tracking-wider">
            {t("Photogallery.Benedikta")}
          </h2>
          <div>
            <div>
              <ShowcaseGallery
                property_gallery={BenediktaGalleryLib}
                subtitle="Apartment"
                title="Benedikta"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mt-12 font-ExtraBold text-center text-4xl text-dark_blue_black tracking-wider">
            {t("Photogallery.Lota")}
          </h2>
          <div>
            <div>
              <ShowcaseGallery
                property_gallery={LotaGalleryLib}
                subtitle="Room"
                title="Lota"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mt-12 font-ExtraBold text-center text-4xl text-dark_blue_black tracking-wider">
            {t("Photogallery.Ruta")}
          </h2>
          <div>
            <div>
              <ShowcaseGallery
                property_gallery={RutaGalleryLib}
                subtitle="Room"
                title="Ruta"
              />
            </div>
          </div>
        </div>
        {/* <div>
          <ShowcaseGallery2 />
        </div> */}
        <div className="mb-24">
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default Photogallery;
