import React from "react";
import { motion } from "framer-motion";
import "./about.css"; // Fichier de styles
export default function About() {
    return (
      <>
  <main className="main_about">
            <div className="placement_about">
                <div className="slogan text-center">
                    <motion.h1 
                        id="slideh1"
                        className="capitalize"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Luxe & Confort, Comme Chez Vous
                    </motion.h1>
                    <motion.h2 
                        className="text fs-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                       Une équipe profesionnel crée pour vos besoins.
                    </motion.h2>
                </div>
            </div>
        </main>
        </>
  );
}
