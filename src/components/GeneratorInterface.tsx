import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import ContentPreview from "./ContentPreview";
import { Card, CardContent } from "@/components/ui/card";

interface GeneratorInterfaceProps {
  onGenerate?: (content: string) => void;
}

const GeneratorInterface = ({
  onGenerate = () => {},
}: GeneratorInterfaceProps) => {
  const [theme, setTheme] = useState("");
  const [contentType, setContentType] = useState("poem");
  const [length, setLength] = useState([500]);
  const [tone, setTone] = useState("casual");
  const [style, setStyle] = useState("modern");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = async () => {
    if (!theme) {
      alert("Please enter a theme first");
      return;
    }

    setIsGenerating(true);

    try {
      // This is a placeholder for the actual API call
      // In a real implementation, you would call the Google AI API here
      const apiKey = "AIzaSyBYOwJ0tq5eVd_v2oCKTeadXYtEX3vQMtA";

      // Simulate API call with timeout
      setTimeout(() => {
        const content =
          contentType === "poem"
            ? `Here is a ${style} poem about ${theme} with a ${tone} tone:\n\nTitle: Reflections on ${theme}\n\nWords dance like shadows,\nAcross the canvas of mind,\n${theme} speaks to soul,\nWhispering ancient secrets,\nIn the language of stars.\n\nThe ${tone} rhythm flows,\nLike rivers seeking the sea,\nEndless and timeless,\nEchoing through eternity,\nA ${style} expression.`
            : `# ${theme}: A ${tone} Perspective\n\nIn this essay, we explore the fascinating concept of ${theme} through a ${tone} lens. The ${style} approach allows us to examine multiple facets of this topic.\n\n## Historical Context\n\nThroughout history, ${theme} has played a significant role in shaping human understanding and societal structures. From ancient civilizations to modern discourse, this concept has evolved while maintaining its core essence.\n\n## Contemporary Relevance\n\nIn today's rapidly changing world, ${theme} continues to influence our daily lives in ways both obvious and subtle. The ${style} interpretation offers unique insights into how we can better understand and engage with this concept.\n\n## Conclusion\n\nAs we move forward, the importance of ${theme} cannot be overstated. By adopting a ${tone} perspective, we open ourselves to new possibilities and deeper understanding.`;

        setGeneratedContent(content);
        onGenerate(content);
        setIsGenerating(false);
      }, 1500);
    } catch (error) {
      console.error("Error generating content:", error);
      setIsGenerating(false);
      alert("Failed to generate content. Please try again.");
    }
  };

  const handleReset = () => {
    setTheme("");
    setContentType("poem");
    setLength([500]);
    setTone("casual");
    setStyle("modern");
    setGeneratedContent("");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Create Your Poem or Essay Now!
          </h2>
          <p className="text-muted-foreground mt-2">
            Provide a theme, customize your preferences, and let AI craft a
            unique piece just for you.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="create" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="create">Create</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <TabsContent value="create" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="theme" className="text-base font-medium">
                      Theme or Topic
                    </Label>
                    <Input
                      id="theme"
                      placeholder="Enter the theme or topic for your content..."
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Content Type
                    </Label>
                    <RadioGroup
                      value={contentType}
                      onValueChange={setContentType}
                      className="flex space-x-4 mt-1.5"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poem" id="poem" />
                        <Label htmlFor="poem">Poem</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="essay" id="essay" />
                        <Label htmlFor="essay">Essay</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="length" className="text-base font-medium">
                      Length (words)
                    </Label>
                    <div className="flex items-center space-x-4 mt-1.5">
                      <Slider
                        id="length"
                        value={length}
                        onValueChange={setLength}
                        max={1000}
                        step={50}
                        className="flex-1"
                      />
                      <span className="w-12 text-center">{length}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tone" className="text-base font-medium">
                        Tone
                      </Label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger id="tone" className="mt-1.5">
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="humorous">Humorous</SelectItem>
                          <SelectItem value="serious">Serious</SelectItem>
                          <SelectItem value="inspirational">
                            Inspirational
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="style" className="text-base font-medium">
                        Style
                      </Label>
                      <Select value={style} onValueChange={setStyle}>
                        <SelectTrigger id="style" className="mt-1.5">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          {contentType === "poem" ? (
                            <>
                              <SelectItem value="modern">Modern</SelectItem>
                              <SelectItem value="haiku">Haiku</SelectItem>
                              <SelectItem value="sonnet">Sonnet</SelectItem>
                              <SelectItem value="free verse">
                                Free Verse
                              </SelectItem>
                              <SelectItem value="lyrical">Lyrical</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="academic">Academic</SelectItem>
                              <SelectItem value="narrative">
                                Narrative
                              </SelectItem>
                              <SelectItem value="persuasive">
                                Persuasive
                              </SelectItem>
                              <SelectItem value="descriptive">
                                Descriptive
                              </SelectItem>
                              <SelectItem value="expository">
                                Expository
                              </SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Reset
                    </Button>
                    <Button
                      onClick={handleGenerate}
                      disabled={isGenerating || !theme}
                      className="w-full sm:w-auto"
                    >
                      {isGenerating ? "Generating..." : "Generate My Content"}
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preview">
                {generatedContent ? (
                  <ContentPreview
                    content={generatedContent}
                    contentType={contentType}
                    onRegenerate={handleGenerate}
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No content generated yet. Go to the Create tab to generate
                      content.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GeneratorInterface;
