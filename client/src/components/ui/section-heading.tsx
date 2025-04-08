import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  textColor?: string;
  lineColor?: string;
}

export default function SectionHeading({ 
  title, 
  textColor = "text-primary", 
  lineColor = "bg-accent" 
}: SectionHeadingProps) {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
      <div className={`w-20 h-1 ${lineColor} mx-auto`}></div>
    </motion.div>
  );
}
