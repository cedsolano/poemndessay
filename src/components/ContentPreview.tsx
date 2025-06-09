import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, RefreshCw, Edit } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContentPreviewProps {
  content?: string;
  contentType?: "poem" | "essay";
  onRegenerate?: () => void;
  onEdit?: (content: string) => void;
}

const ContentPreview = ({
  content = "Your generated content will appear here. Provide a theme, select your preferences, and click 'Generate' to create your personalized content.",
  contentType = "poem",
  onRegenerate = () => {},
  onEdit = () => {},
}: ContentPreviewProps) => {
  const [editedContent, setEditedContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("preview");

  const handleEditSave = () => {
    onEdit(editedContent);
    setIsEditing(false);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `inspirai-${contentType}-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadPdf = () => {
    // In a real implementation, this would use a PDF generation library
    alert(
      "PDF download functionality would be implemented with a PDF generation library",
    );
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <Card className="w-full overflow-hidden border-0 shadow-none">
        <Tabs
          defaultValue="preview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="edit">Edit</TabsTrigger>
            </TabsList>

            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={onRegenerate}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Regenerate content</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Download Options</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col space-y-4 mt-4">
                    <Button onClick={handleDownloadTxt} className="w-full">
                      Download as Text (.txt)
                    </Button>
                    <Button onClick={handleDownloadPdf} className="w-full">
                      Download as PDF (.pdf)
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <TabsContent value="preview" className="mt-0">
            <CardContent className="p-4 bg-gray-50 rounded-md min-h-[300px] max-h-[500px] overflow-y-auto">
              <div
                className={`prose max-w-none ${contentType === "poem" ? "whitespace-pre-line text-center" : ""}`}
              >
                {content.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="edit" className="mt-0">
            <CardContent className="p-4 bg-gray-50 rounded-md">
              <Textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="min-h-[300px] font-mono"
                placeholder="Edit your content here..."
              />
              <div className="flex justify-end mt-4">
                <Button onClick={handleEditSave}>Save Changes</Button>
              </div>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default ContentPreview;
