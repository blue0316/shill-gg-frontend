import { useAtom } from "jotai";
import BannerItem from "../../../components/BannerItem/Index";
import { tokenDataAtom } from "../../../store";

const Banner = () => {
  const [data] = useAtom(tokenDataAtom);

  return (
    <div className="banner bg-[#F6C3C5] w-full h-[140px] border-4 border-t-[#3B3F3E] border-b-[#3B3F3E] py-4 flex items-center justify-start">
      {data && (
        <>
          <BannerItem icon={data.image_uri} name={data.name} />
          <BannerItem icon={data.image_uri} name={data.name} />
          <BannerItem icon={data.image_uri} name={data.name} />
          <BannerItem icon={data.image_uri} name={data.name} />
          <BannerItem icon={data.image_uri} name={data.name} />
          <BannerItem icon={data.image_uri} name={data.name} />
        </>
      )}
    </div>
  );
};

export default Banner;
