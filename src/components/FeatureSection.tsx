import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Brush, Download, Eye, Sliders, Wand2 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = (
  { icon, title, description }: FeatureCardProps = {
    icon: <Wand2 className="h-8 w-8 text-primary" />,
    title: "Feature Title",
    description:
      "Feature description goes here. This explains what the feature does and how it benefits the user.",
  },
) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full bg-white dark:bg-gray-800 border-2 hover:border-primary transition-colors duration-300">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Wand2 className="h-6 w-6 text-primary" />,
      title: "Personalized Poem and Essay Generation",
      description:
        "Simply provide a theme or topic, and our AI will craft a poem or essay just for you. Whether you're seeking a creative poem or an informative essay, we ensure it's tailored to your exact specifications.",
    },
    {
      icon: <Sliders className="h-6 w-6 text-primary" />,
      title: "Easy-to-Use Interface",
      description:
        "No technical expertise required. Input your theme, click generate, and watch your poem or essay come to life instantly. It's that easy!",
    },
    {
      icon: <Brush className="h-6 w-6 text-primary" />,
      title: "Style and Tone Customization",
      description:
        "Customize the tone, style, and format of your content to match your needs. Whether it's academic, casual, poetic, or professional, we've got you covered.",
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "Instant Preview and Adjustments",
      description:
        "Before finalizing, preview your content. Make adjustments, regenerate sections, or refine the text as necessary. We give you full creative control.",
    },
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      title: "Download and Share",
      description:
        "Once you're satisfied with your creation, easily download your poem or essay as a .txt or PDF. Share it instantly with others, or save it for later use.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "High-Quality Content",
      description:
        "Our AI is trained on diverse literary works to ensure your generated content is engaging, coherent, and of high quality regardless of the theme you choose.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how InspiroAI can help you create beautiful poems and
            insightful essays with just a few clicks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
