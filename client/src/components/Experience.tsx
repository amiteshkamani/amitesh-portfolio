import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { Briefcase, TrendingUp, Smartphone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Growth Marketing Manager",
      company: "NL-ix (A KPN Subsidiary)",
      period: "Jun 2020 – Dec 2024",
      description: "Developed and managed the Growth vertical, helping NL-ix become more visible by setting up GDPR compliant inbound strategy.",
      achievements: [
        "Collaborated with Sales, Product Marketing and Product Management",
        "Developed demand generation strategies resulting in 5x MQL growth",
        "Implemented marketing tech stacks: HubSpot, Hotjar, Airtable, PowerBI"
      ],
      keyPoints: [
        "Formulated content strategy with cross-functional teams",
        "Led and organized industry events in Denmark, Germany and Netherlands",
        "Influenced C-level for business plans and marketing budgets",
        "Contributed to rebranding efforts and new website development"
      ],
      icon: <Briefcase className="text-white" />
    },
    {
      id: 2,
      title: "Growth Marketing and Digital Strategy",
      company: "Growack Media",
      period: "Jul 2019 – Apr 2020",
      description: "Worked with a Digital marketing agency to provide marketing solutions to B2B clients.",
      achievements: [
        "Provided strategic CRM consulting to boost engagement",
        "Created tailored lifecycle campaigns for customer journey",
        "Utilized tools like HubSpot, Phantombuster, MailChimp"
      ],
      keyPoints: [
        "Strategic CRM consulting for B2B clients",
        "Business process streamlining and optimization",
        "Customer journey mapping and engagement strategies",
        "Marketing tool implementation and integration"
      ],
      icon: <TrendingUp className="text-white" />
    },
    {
      id: 3,
      title: "Product Marketing and Channel Manager",
      company: "Vodafone",
      period: "Jun 2013 – Oct 2018",
      description: "Started as a Marketing analyst and went on to head the prepaid voice business. Led a team of 5 professionals to drive customer acquisition and revenue growth.",
      achievements: [
        "Ideated, designed and priced new products",
        "Developed marketing and communication strategies",
        "Led 4G launch project in Bangalore"
      ],
      keyPoints: [
        "Segmented 5 million customers based on usage patterns and demographics",
        "Achieved highest nationwide segmented offer penetration of 13.5%",
        "Mentored a team of 5 account managers for external partnerships",
        "Managed cross-functional projects and stakeholder communication"
      ],
      icon: <Smartphone className="text-white" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-neutral">
      <div className="container mx-auto px-6">
        <SectionHeading title="Professional Experience" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`mb-20 md:mb-32 relative ${index !== experiences.length - 1 ? "mb-20" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-semibold text-primary mb-1">{exp.title}</h3>
                      <h4 className="text-xl text-secondary mb-3">{exp.company}</h4>
                      <p className="text-gray-600 mb-3">{exp.period}</p>
                      <p className="mb-4">{exp.description}</p>
                      <ul className="list-none space-y-2 text-base">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex md:justify-end">
                            <span className="md:order-2 mr-2 md:mr-0 md:ml-2"><CheckCircle className="h-5 w-5 text-accent inline" /></span>
                            <span className="md:order-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:w-12 md:flex md:justify-center hidden">
                      <div className="w-12 h-12 rounded-full bg-primary border-4 border-white flex items-center justify-center">
                        {exp.icon}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-16">
                      <Card>
                        <CardContent className="p-6">
                          <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h5 className="text-lg font-semibold mb-2">Key Achievements</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            {exp.keyPoints.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-16 order-2 md:order-1 mt-8 md:mt-0 md:text-right">
                      <Card>
                        <CardContent className="p-6">
                          <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h5 className="text-lg font-semibold mb-2">Area of Focus</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            {exp.keyPoints.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="md:w-12 md:flex md:justify-center order-1 md:order-2 hidden">
                      <div className="w-12 h-12 rounded-full bg-primary border-4 border-white flex items-center justify-center">
                        {exp.icon}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-16 order-1 md:order-3">
                      <h3 className="text-2xl font-semibold text-primary mb-1">{exp.title}</h3>
                      <h4 className="text-xl text-secondary mb-3">{exp.company}</h4>
                      <p className="text-gray-600 mb-3">{exp.period}</p>
                      <p className="mb-4">{exp.description}</p>
                      <ul className="list-none space-y-2 text-base">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>
                            <CheckCircle className="h-5 w-5 text-accent inline mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
