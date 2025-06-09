import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Edit,
  Download,
  Settings,
  Sparkles,
  Type,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Enter a theme",
      description:
        "Describe the theme or idea that you want to explore in your poem or essay.",
      icon: <Type className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Choose content type",
      description: "Select the format that fits your needs—poem or essay.",
      icon: <Settings className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Select preferences",
      description:
        "Whether you need a formal essay or a creative poem, you can set the tone and style to your preference.",
      icon: <Settings className="h-8 w-8 text-primary" />,
    },
    {
      id: 4,
      title: "Generate",
      description:
        "In just a few seconds, your personalized poem or essay will be ready.",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
    },
    {
      id: 5,
      title: "Review and adjust",
      description:
        "Read through, tweak, or regenerate parts of your poem or essay as needed.",
      icon: <Edit className="h-8 w-8 text-primary" />,
    },
    {
      id: 6,
      title: "Download or share",
      description:
        "Once satisfied, download your poem or essay as a .txt or PDF file. Share them easily or save them for future use.",
      icon: <Download className="h-8 w-8 text-primary" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to create your personalized poem or essay
            with InspiroAI.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div key={step.id} variants={itemVariants}>
              <Card className="h-full border border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      {step.icon}
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold mr-2">
                        Step {step.id}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
