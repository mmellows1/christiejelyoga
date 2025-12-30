"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./button";
import { PlayIcon } from "lucide-react";

interface YoutubeDialogProps {
  videoId: string;
}

const getYoutubeVideoThumbnailUrl = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

export function YoutubeDialog({ videoId }: YoutubeDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const imageUrl = getYoutubeVideoThumbnailUrl(videoId || "");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Image
          src={imageUrl}
          alt={videoId || "video"}
          width={550}
          height={240}
          className="w-full"
        />
        <Button asChild className="rounded-full size-24">
          <PlayIcon className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] md:max-w-5xl aspect-video p-0 overflow-hidden bg-transparent border-none">
        <DialogHeader className="hidden">
          <DialogTitle>Video</DialogTitle>
          <DialogClose className="absolute top-2 right-2">✕</DialogClose>
        </DialogHeader>
        {isOpen && (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </DialogContent>
    </Dialog>
  );
}
