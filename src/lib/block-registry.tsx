import { CallToActionBanner } from "@/blocks/call-to-action-banner";
import { Contact } from "@/blocks/contact";
import { Gallery } from "@/blocks/gallery";
import { LargeCallToAction } from "@/blocks/large-call-to-action";
import { OnDemand } from "@/blocks/on-demand";
import { Schedule } from "@/blocks/schedule";
import { Services } from "@/blocks/services";
import { SocialMediaBanner } from "@/blocks/social-media-banner";
import { TextImage } from "@/blocks/text-image";
import { TwoColumnContent } from "@/blocks/two-column-content";
import { withBlockWrapper } from "@/hooks/with-block-wrapper";
import { SanityDocument } from "next-sanity";

export const blockMapper: Record<string, any> = {
  "block._callToActionBannerBlock": withBlockWrapper(CallToActionBanner, {}),
  "block._contactFormBlock": withBlockWrapper(Contact, {}),
  "block._textMediaBlock": withBlockWrapper(TextImage, {}),
  "block._twoColumnContentBlock": withBlockWrapper(TwoColumnContent, {}),
  "block._galleryBlock": Gallery,
  "block._largeCallToActionBlock": withBlockWrapper(LargeCallToAction, {}),
  "block._onDemandBlock": withBlockWrapper(OnDemand, {}),
  "block._scheduleBlock": withBlockWrapper(Schedule, {}),
  "block._servicesBlock": withBlockWrapper(Services, {}),
  "block._socialMediaBannerBlock": withBlockWrapper(SocialMediaBanner, {}),
};

export const BlockRenderer = (content: any) => {
  if (!content?.content) return;

  return content.content.map((c: SanityDocument) => {
    const Component = blockMapper[c._type] || null;

    if (!Component) {
      console.error("Unknown block type:", c._type);
      return null;
    }

    if (Component) {
      return (
        <Component {...c} key={c._key} animation={c.animation || "none"} />
      );
    }
  });
};
