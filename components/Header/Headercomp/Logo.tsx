import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <div className="flex items-center justify-center space-x-3">
      <img src="/favicon.ico" className="h-16 w-16 object-contain" alt="Logo" />
      {/* <img
        src="/img/title-md-extra-bold-no-bg.png"
        className="h-10 w-auto object-contain hidden sm:block"
        alt="Title"
      />
      <img
        src="/img/title-md-extra-bold-no-bg.png"
        className="h-8 w-auto object-contain sm:hidden"
        alt="Title"
      /> */}
    </div>
  );
}
