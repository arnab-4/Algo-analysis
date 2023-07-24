import { useEffect } from "react";
import { NextSeo } from "next-seo";

import TopBar from "/components/TopBar";
import Terrain from "/components/Home/Terrain";
import HeroTitle from "/components/Home/heroTitle";
import { batch, useDispatch } from "react-redux";
import {
  setAlgoId,
  setAlgoName,
  setAlgoCategory,
} from "/redux/reducers/pageSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(setAlgoId("home"));
      dispatch(setAlgoName("Home"));
      dispatch(setAlgoCategory("home"));
    });
  });
  return (
    <div>
      <NextSeo
        title="Home | Algo Analysis"
        description="A algorithm visualizer for understanding algorithms"
        canonical={`https://algospace.vercel.app/`}
        openGraph={{
          url: `https://algospace.vercel.app/`,
          title: "Home | Algo Analysis",
          description: "A algorithm visualizer for understanding algorithms",
          profile: {
            firstName: "Arnab",
            lastName: "Manna",
          },
          images: [
            {
              url: "",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "Algo Analysis",
        }}
        twitter={{
          handle: "",
          cardType: "",
        }}
      />
      <div className="p-gap">
        <div className="relative w-[100%] h-[70vh] border-[1px] border-border-1 overflow-hidden">
          <TopBar />
          <div
            id="visualizer-container"
            className="relative h-full overflow-hidden bg-hero bg-cover bg-center bg-no-repeat"
          >
            <HeroTitle />
            <Terrain className="absolute top-[-100%] z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
