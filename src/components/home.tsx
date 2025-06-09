import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GeneratorInterface from "./GeneratorInterface";
import FeatureSection from "./FeatureSection";
import HowItWorks from "./HowItWorks";

const HomePage = () => {
  const scrollToGenerator = () => {
    const generatorSection = document.getElementById("generator-section");
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">InspiroAI</div>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            onClick={() =>
              document
                .getElementById("about-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              document
                .getElementById("features-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Features
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              document
                .getElementById("how-it-works-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            How It Works
          </Button>
          <Button onClick={scrollToGenerator}>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unleash Your Creativity with AI-Powered Poems and Essays
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Provide a theme, and let AI craft a unique, engaging poem or essay
            tailored just for you!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" onClick={scrollToGenerator}>
              Get Started <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <Card className="shadow-lg transform rotate-2 z-10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Poem Example</h3>
                <p className="italic text-muted-foreground">
                  Through whispers of dawn,
                  <br />
                  Nature awakens with grace,
                  <br />
                  Colors dance in light.
                  <br />
                  Seasons change, time flows onward,
                  <br />
                  Beauty in each moment found.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg absolute top-10 -left-4 transform -rotate-3">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Essay Example</h3>
                <p className="text-sm text-muted-foreground">
                  The concept of nature has fascinated humanity throughout
                  history. From ancient civilizations to modern societies, our
                  relationship with the natural world continues to evolve,
                  reflecting our deepest values and aspirations...
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="bg-muted py-16 px-4 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              At InspiroAI, we believe that creativity and technology go hand in
              hand. Our AI-powered poem and essay generators allow you to input
              any theme or topic, and in an instant, receive beautifully crafted
              content that meets your needs.
            </p>
            <p className="text-lg">
              Whether you're looking for inspiration, help with writing, or just
              want to explore your creative side, InspiroAI is here to make the
              process easy, quick, and enjoyable. Our goal is to make
              high-quality, personalized writing accessible to everyone. We
              harness the power of artificial intelligence to help people create
              meaningful, engaging poems and essays with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features-section"
        className="container mx-auto py-16 px-4 md:py-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Features
        </h2>
        <FeatureSection />
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works-section"
        className="bg-muted py-16 px-4 md:py-24"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How It Works
          </h2>
          <HowItWorks />
        </div>
      </section>

      {/* Generator Section */}
      <section
        id="generator-section"
        className="container mx-auto py-16 px-4 md:py-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Create Your Poem or Essay Now!
        </h2>
        <GeneratorInterface />
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold mb-4 md:mb-0">InspiroAI</div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-lg font-medium">Ready to Get Started?</p>
              <Button variant="secondary" onClick={scrollToGenerator}>
                Create My Poem or Essay
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 InspiroAI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
