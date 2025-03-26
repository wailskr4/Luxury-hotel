import React from "react";
import { motion } from "framer-motion";
import "./home.css"; // Fichier de styles
import ExperienceSection from "../components/Experiancesection"
import ServicesSection from "../components/ServicesSection"
export default function Home() {
  return (
    <>
    <main className="main_home">
            <div className="placement_home">
                <div className="slogan text-center">
                    <motion.h1 
                        id="slideh1"
                        className="capitalize"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Une Large Gamme De Services
                    </motion.h1>
                    <motion.h2 
                        className="text fs-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        Pour tous vos besoins et votre bien-être.
                    </motion.h2>
                </div>
            </div>
        </main>

        <ExperienceSection />

<ServicesSection/>
        </>
  );
}
