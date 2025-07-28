import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ButtonLink } from "@/components/ButtonLink";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FadeIn>{slice.primary.eyebrow}</FadeIn>
      <RevealText id="cta-heading" field={slice.primary.heading} />

      <FadeIn>
        <PrismicRichText field={slice.primary.body} />
      </FadeIn>
      {slice.primary.button.map((link) => (
        <FadeIn key={link.key}>
          <ButtonLink field={link} variant={link.variant} />
        </FadeIn>
      ))}
    </Bounded>
  );
};

export default CallToAction;
