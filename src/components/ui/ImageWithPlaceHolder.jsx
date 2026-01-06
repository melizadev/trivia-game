import { useState } from "react";
import { motion } from "framer-motion";

const ImageWithPlaceholder = ({ lowSrc, src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden">
      {/* Placeholder (se va lento) */}
      <motion.img
        src={lowSrc}
        alt={alt}
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover blur-md"
      />

      {/* Imagen real (entra suave) */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{
          opacity: loaded ? 1 : 0,
          scale: loaded ? 1 : 1.04,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1], // easeOutExpo-like
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageWithPlaceholder;
