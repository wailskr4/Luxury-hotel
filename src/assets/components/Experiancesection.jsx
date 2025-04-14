import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExperienceSection.css";
import Advanced from "../Images/advanced.jpeg"
import ban from "../Images/ban.webp"
import elite from "../Images/elite.webp"
import views from "../Images/views.webp"
import chef from "../Images/views.webp"
import spa from "../Images/spa.jpg"
const ExperienceSection = () => {
  const items = [
    { src: Advanced, alt: "Advanced class", title: "Advanced class", description: "Luxury but at a small price" },
    { src: elite, alt: "Elite class", title: "Elite class", description: "Is there a limit to class?" },
    { src: ban, alt: "One night class", title: "One night class", description: "Passing by? Why not make it a unique day." },
    { src: spa, alt: "Luxury Spa", title: "Luxury Spa", description: "Relax and enjoy a Top-Tier spa treatments." },
    
    { src: chef, alt: "Gourmet Master Chef", title: "Gourmet Master Chef", description: "They are ready to prove you why us" },
    { src: views, alt: "Mesmerizing Views", title: "Mesmerizing Views", description: "Do we need to say more?" },
  ];

  return (
    <section className="container text-center my-5 experience-section">
    <h1 className="mb-5 section-title">A Unique Experience</h1>
    <div className="row justify-content-center">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <figure className="card p-3 shadow experience-card">
            <img
              src={item.src}
              alt={item.alt}
              className="card-img-top rounded experience-img"
            />
            <figcaption className="card-body">
              <h5 className="hotelQ card-title experience-title">{item.title}</h5>
              <p className="bio card-text experience-text">{item.description}</p>
            </figcaption>
          </figure>
        </motion.div>
      ))}
    </div>
  </section>
  
  );
};

export default ExperienceSection;