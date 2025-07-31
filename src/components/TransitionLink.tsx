import { asLink, LinkField, PrismicDocument } from "@prismicio/client";
import { Link } from "next-view-transitions";

export type TransitionLinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
} & (
  | { field: LinkField | null; document?: never; href?: never }
  | { field?: never; document: PrismicDocument | null; href?: never }
  | { field?: never; document?: never; href: string }
);

export const TransitionLink = ({
  children,
  className = "",
  onClick,
  tabIndex,
  field,
  document: doc,
  href,
}: TransitionLinkProps) => {
  const url = href ?? asLink(field ?? doc);

  if (!url) {
    console.warn("TransitionLink: No URL FOUND.");
    return null;
  }
  return (
    <Link
      href={url}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {field?.text ?? children}
    </Link>
  );
};
