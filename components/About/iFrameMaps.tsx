import { useEffect, useState } from "react";

interface IFrameMapsProps {
  className?: string;
  location: string;
}

function IFrameMaps({ className, location }: IFrameMapsProps) {
  const [data, setData] = useState("");

  useEffect(() => {
    let newData = "";
    if (location === "Ludwig") {
      newData =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.4925648067153!2d15.975051273545844!3d45.81155620392717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d70d82aba991%3A0x7af33750194ed72!2sHeart%20of%20Zagreb%20Apartment%20Ludwig!5e0!3m2!1shr!2shr!4v1720473314856!5m2!1shr!2shr";
    } else if (location === "Benedikta") {
      newData =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.2136400973436!2d15.975232176667218!3d45.80697961050206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d779fae337ab%3A0x131da43cf0f6fe94!2sApartment%20Benedikta!5e0!3m2!1shr!2shr!4v1720473369843!5m2!1shr!2shr";
    } else if (location === "Art_Rooms") {
      newData =
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26458.372370053177!2d15.994802610151284!3d45.80937960581825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6516dba0813%3A0x6686b7fe11bb7093!2sArt%20Rooms!5e0!3m2!1shr!2shr!4v1721419301228!5m2!1shr!2shr";
    } else {
      newData =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.4925648067153!2d15.975051273545844!3d45.81155620392717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d70d82aba991%3A0x7af33750194ed72!2sHeart%20of%20Zagreb%20Apartment%20Ludwig!5e0!3m2!1shr!2shr!4v1720473314856!5m2!1shr!2shr";
    }
    setData(newData);
  }, [location]);

  return (
    <iframe
      src={data}
      className={`w-full h-full ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default IFrameMaps;
