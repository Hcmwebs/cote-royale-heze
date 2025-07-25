import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `FragranceList`.
 */
export type FragranceListProps =
  SliceComponentProps<Content.FragranceListSlice>;

/**
 * Component for "FragranceList" Slices.
 */
const FragranceList: FC<FragranceListProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <p>{slice.primary.eyebrow}</p>
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      {slice.primary.fragrances.map((item) => (
        // Render the item
        <PrismicNextLink field={item.fragrance}>Link</PrismicNextLink>
      ))}
    </Bounded>
  );
};

export default FragranceList;
