import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CaptionImages({ image, text,height,width }) {
    const [isHover, setHover] = useState(false);
  return (
    <div 
    onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        backgroundImage: isHover?`url(${image})`:`linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.5), rgba(0,0,0,1)),url(${image})`,
        width:width,height:height
      }}
      className={`flex items-end justify-end h-75 rounded-lg bg-cover bg-center p-4`}
    >
      <motion.p 
        animate = {{opacity:isHover?0:1, y: isHover ? -30 : 0}}
        className="text-white">{text}
        </motion.p>
    </div>
  );
}
