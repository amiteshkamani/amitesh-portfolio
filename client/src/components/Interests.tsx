import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Swords } from "lucide-react";

export default function Interests() {
  const interests = [
    {
      title: "Sports Enthusiast",
      description: "Currently playing for Amsterdam Cricket Club (ACC). Cricket has taught me teamwork, strategy and perseverance.",
      icon: <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 512 512">
        <path d="M496 96H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16v256c0 8.84 7.16 16 16 16h128c8.84 0 16-7.16 16-16V160h256v256c0 8.84 7.16 16 16 16h128c8.84 0 16-7.16 16-16V160h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM176 384H80V160h96v224zm336 0h-96V160h96v224z"/>
      </svg>,
      detail: "Amsterdam Cricket Club"
    },
    {
      title: "Avid Traveler",
      description: "Aiming to explore different countries and cultures throughout the world. I've visited over 30 countries so far.",
      icon: <Globe className="w-5 h-5 mr-2" />,
      detail: "30+ countries and counting"
    },
    {
      title: "Strategic Gamer",
      description: "Enjoy playing chess, Catan and other strategy games that challenge my critical thinking and planning skills.",
      icon: <Swords className="w-5 h-5 mr-2" />,
      detail: "Chess and strategy games"
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Personal Interests" />
        <p className="mt-6 max-w-2xl mx-auto text-lg text-center">Beyond my professional life, I'm passionate about these activities that keep me balanced and energized.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-neutral rounded-xl overflow-hidden shadow-lg h-full transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{interest.title}</h3>
                  <p className="mb-4">
                    {interest.description}
                  </p>
                  <div className="flex items-center text-accent">
                    {interest.icon}
                    <span className="font-medium">{interest.detail}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
