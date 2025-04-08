import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { 
  ChartPieIcon, CloudIcon, LightbulbIcon, UsersIcon,
  ListChecksIcon, NetworkIcon, HeartIcon, HandshakeIcon,
  GanttChartIcon, ScaleIcon, Eye, BarChart3
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const coreSkills = [
    { name: "Demand Generation", percentage: 95 },
    { name: "Marketing Operations", percentage: 90 },
    { name: "Data Analytics", percentage: 85 },
    { name: "Performance Marketing", percentage: 90 }
  ];
  
  const technicalSkills = [
    { name: "HubSpot", icon: <ChartPieIcon className="text-2xl" /> },
    { name: "Salesforce", icon: <CloudIcon className="text-2xl" /> },
    { name: "WordPress", icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.158 0C5.874 0 0.772 5.102 0.772 11.386C0.772 17.67 5.874 22.772 12.158 22.772C18.442 22.772 23.544 17.67 23.544 11.386C23.544 5.102 18.442 0 12.158 0ZM2.089 11.386C2.089 9.975 2.434 8.641 3.042 7.461L7.212 19.296C4.146 17.861 2.089 14.859 2.089 11.386ZM12.158 21.455C11.131 21.455 10.143 21.295 9.214 21.001L11.806 13.05L14.45 20.637C14.461 20.661 14.474 20.684 14.487 20.706C13.754 21.19 12.98 21.455 12.158 21.455ZM13.501 6.905C14.082 6.883 14.609 6.812 14.609 6.812C15.095 6.745 15.028 6.037 14.542 6.057C14.542 6.057 13.082 6.152 12.158 6.152C11.325 6.152 9.847 6.057 9.847 6.057C9.361 6.037 9.294 6.764 9.78 6.812C9.78 6.812 10.287 6.883 10.815 6.905L12.178 10.975L10.599 15.725L7.416 6.905C7.998 6.883 8.524 6.812 8.524 6.812C9.01 6.745 8.944 6.037 8.458 6.057C8.458 6.057 6.997 6.152 6.073 6.152C5.896 6.152 5.705 6.15 5.502 6.146C7.048 3.758 9.427 2.146 12.158 2.146C15.486 2.146 18.386 3.91 19.93 6.574C19.885 6.572 19.841 6.57 19.795 6.57C18.961 6.57 18.385 7.241 18.385 7.981C18.385 8.721 18.771 9.327 19.177 10.078C19.485 10.676 19.851 11.441 19.851 12.536C19.851 13.25 19.626 14.093 19.243 15.252L18.334 18.332L13.501 6.905ZM16.837 19.747L19.339 12.319C19.793 11.072 19.968 10.042 19.968 9.132C19.968 8.926 19.962 8.729 19.951 8.543C20.836 9.383 21.406 10.515 21.544 11.773C21.568 11.977 21.581 12.183 21.581 12.395C21.581 15.481 19.8 18.181 17.177 19.713C17.21 19.725 16.799 19.758 16.837 19.747Z"/>
    </svg> },
    { name: "Hotjar", icon: <Eye className="text-2xl" /> },
    { name: "LinkedIn Ads", icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg> },
    { name: "Google Analytics", icon: <BarChart3 className="text-2xl" /> }
  ];
  
  const additionalSkills = [
    { name: "Problem Solving", icon: <LightbulbIcon className="text-3xl mb-3 text-primary" /> },
    { name: "Team Leadership", icon: <UsersIcon className="text-3xl mb-3 text-primary" /> },
    { name: "Decision Making", icon: <ListChecksIcon className="text-3xl mb-3 text-primary" /> },
    { name: "Strategic Design", icon: <NetworkIcon className="text-3xl mb-3 text-primary" /> },
    { name: "Empathy", icon: <HeartIcon className="text-3xl mb-3 text-primary" /> },
    { name: "Stakeholder Management", icon: <HandshakeIcon className="text-3xl mb-3 text-primary" /> },
    { name: "Project Management", icon: <GanttChartIcon className="text-3xl mb-3 text-primary" /> },
    { name: "Integrity", icon: <ScaleIcon className="text-3xl mb-3 text-primary" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Professional Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center md:text-left">Core Skills</h3>
            
            {coreSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-accent">{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} className="h-2" indicatorClassName="bg-primary" />
              </div>
            ))}
          </motion.div>
          
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center md:text-left">Technical Proficiency</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-neutral rounded-lg p-4 text-center transition-transform hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center text-white mb-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Additional Skills & Values</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-neutral rounded-lg p-5 text-center flex flex-col items-center transition-all hover:bg-accent hover:text-white group"
              >
                {skill.icon}
                <h4 className="font-semibold group-hover:text-white">{skill.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
