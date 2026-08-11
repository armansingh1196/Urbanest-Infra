"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if the splash screen has already been shown this session
    const hasSeenSplash = sessionStorage.getItem("urbanest_splash_seen");
    if (hasSeenSplash) {
      setShowSplash(false);
      return;
    }

    // Backup timer in case onEnded doesn't fire for some reason
    const timer = setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem("urbanest_splash_seen", "true");
    }, 4500); // adjust based on video length

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setShowSplash(false);
    sessionStorage.setItem("urbanest_splash_seen", "true");
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-4/5 sm:w-2/3 md:w-1/2 h-auto object-contain mix-blend-multiply scale-90 sm:scale-100"
          >
            <source src="/images/LOGO Animation Black Urbanest.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
