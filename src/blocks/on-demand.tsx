import { PortableText } from "@/components/ui/portable-text";
import { YoutubeDialog } from "@/components/ui/youtube-dialog";
import { PortableTextBlock } from "next-sanity";

interface OnDemandProps {
  content: PortableTextBlock[];
  videoId?: string;
}
const OnDemand = ({ content, videoId }: OnDemandProps) => {
  return (
    <div className="grid grid-cols-12 md:gap-24 gap-4 items-center">
      <div className="col-span-12 md:col-span-6">
        <div className="relative">
          <YoutubeDialog videoId={videoId || ""} />
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 md:col-start-8">
        <PortableText value={content} />
      </div>
    </div>
  );
};

export { OnDemand };
