import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map/Map"), {
  ssr: false,
});

const Body = () => {
  return (
    <>
      <div className="bg-slate-700 vh-88">
        <Map />
      </div>
    </>
  );
};

export default Body;
