"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { useToast } from "@/hooks/use-toast";
import { UploadDropzone } from "@/lib/uploadthing";

import "@/styles/globals.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  const { toast } = useToast();
  return (
    <UploadDropzone
      className="ut-label:text-black ut-button:bg-primary 
      ut-button:ut-uploading:after:bg-slate-100/10 ut-uploading:bg-primary/10 
      custom-class 
      bg-primary/10"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        toast({
          variant: "destructive",
          description: `${error?.message}`,
        });
      }}
    />
  );
};
