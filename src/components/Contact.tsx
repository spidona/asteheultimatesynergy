import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const offices = [
  {
    name: "WALSH CONSTRUCTION",
    address: ["929 West Adams Street", "Chicago, Illinois 60607"],
    phone: "312.563.5400",
    fax: "312.563.5466",
  },
  {
    name: "ARCHER WESTERN",
    address: ["2839 Paces Ferry Road SE", "Suite 1200", "Atlanta, Georgia 30339"],
    phone: "404.495.8700",
    fax: "404.495.8701",
  },
  {
    name: "WALSH CANADA",
    address: ["310 North Queen Street", "Suite 203S", "Etobicoke, Ontario M9C 5K4"],
    phone: "",
    fax: "",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <section id="contact" className="bg-primary" ref={ref}>
      {/* Newsletter Section */}
      <div className="section-padding border-b border-primary-foreground/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
              Stay Up-to-Date
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Subscribe to our monthly newsletter for updates on news and events.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
              />
              <Button variant="green" type="submit">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Offices Grid */}
      <div className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {offices.map((office, index) => (
              <div key={office.name} className="text-center md:text-left">
                {/* Logo placeholder */}
                <div className="w-16 h-16 bg-accent/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="font-display text-2xl text-accent">W</span>
                </div>
                
                <h3 className="font-condensed text-lg font-semibold text-primary-foreground uppercase tracking-wide mb-4">
                  {office.name}
                </h3>
                
                <div className="space-y-1 text-primary-foreground/70 mb-4">
                  {office.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                
                {office.phone && (
                  <div className="space-y-1 text-primary-foreground/70">
                    <p>T: {office.phone}</p>
                    {office.fax && <p>F: {office.fax}</p>}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};