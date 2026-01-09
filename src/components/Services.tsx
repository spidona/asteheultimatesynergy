import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Plane, Droplets, Train, Building2, Leaf, Route } from "lucide-react";
import bridgeProject from "@/assets/bridge-project.jpg";
import waterTreatment from "@/assets/water-treatment.jpg";
import airportTerminal from "@/assets/airport-terminal.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
const experiences = [{
  icon: Plane,
  title: "Aviation",
  description: "Terminal expansions, runway construction, and airport modernization projects across North America.",
  image: airportTerminal,
  stats: "#1 Airport Builder"
}, {
  icon: Route,
  title: "Bridges",
  description: "Cable-stayed, suspension, and highway bridges connecting communities nationwide.",
  image: bridgeProject,
  stats: "#1 Bridge Builder"
}, {
  icon: Droplets,
  title: "Water",
  description: "Treatment plants, reservoirs, and water infrastructure ensuring clean water for millions.",
  image: waterTreatment,
  stats: "#1 Treatment Plant Builder"
}, {
  icon: Train,
  title: "Transit",
  description: "Rail systems, stations, and transit infrastructure for modern urban mobility.",
  image: heroConstruction,
  stats: "Top 5 Transit Builder"
}, {
  icon: Building2,
  title: "Buildings",
  description: "Commercial, institutional, and healthcare facilities built to the highest standards.",
  image: airportTerminal,
  stats: "Top 10 Building Contractor"
}, {
  icon: Leaf,
  title: "Environmental",
  description: "Sustainable solutions for remediation, renewable energy, and green infrastructure.",
  image: waterTreatment,
  stats: "ENR Green Contractor"
}];
export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="experience" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="mb-16">
          <span className="text-accent font-condensed text-lg uppercase tracking-[0.2em] mb-4 block">
            Our Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground green-underline pb-4 inline-block">Building Nigeria's Infrastructure</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mt-8">
            From airports to water treatment facilities, we deliver critical infrastructure 
            projects that strengthen communities across North America.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => <motion.div key={exp.title} initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="group relative bg-card overflow-hidden cursor-pointer">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent flex items-center justify-center">
                  <exp.icon className="w-6 h-6 text-accent-foreground" />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-primary-foreground/10 backdrop-blur-sm px-3 py-1">
                  <span className="font-condensed text-sm text-primary-foreground font-semibold">
                    {exp.stats}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl text-primary-foreground mb-2">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-accent font-semibold uppercase text-sm tracking-wide group-hover:gap-3 transition-all">
                  View Projects
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 w-0 bg-gradient-green group-hover:w-full transition-all duration-500" />
            </motion.div>)}
        </div>
      </div>
    </section>;
};