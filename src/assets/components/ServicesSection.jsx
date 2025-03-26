import { motion } from "framer-motion";
import { FaSpa, FaSwimmingPool, FaUtensils, FaDumbbell, FaConciergeBell,FaBed  } from "react-icons/fa";
import "./ServicesSection.css"
const services = [
  { icon: <FaSpa />, title: "Luxury Spa", desc: "Détendez-vous avec des soins exclusifs.", delay: 0.2 },
  { icon: <FaSwimmingPool />, title: "Piscine & Jacuzzi", desc: "Profitez de notre piscine à débordement.", delay: 0.4 },
  { icon: <FaUtensils />, title: "Gastronomie 5 étoiles", desc: "Découvrez nos plats préparés par des chefs renommés.", delay: 0.6 },
  { icon: <FaDumbbell />, title: "Salle de sport", desc: "Salle de fitness moderne et équipements de qualité.", delay: 0.8 },
  { icon: <FaConciergeBell />, title: "Service Conciergerie", desc: "Un service exclusif pour répondre à tous vos besoins.", delay: 1.0 },
  { icon: <FaBed  />, title: "Chambre De luxe", desc: "Des chambres impécable au confort innégalé ", delay: 1.2 },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container text-center">
        <h2 className="section-title">Nos Services & Installations</h2>
        <div className="row">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="col-md-4 mb-4"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: service.delay }}
            >
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h5 className="service-title">{service.title}</h5>
                <p className="service-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
