import Link from "next/link";

interface PreventionCardProps {
  title: string;
  description: string;
  borderRight?: boolean;
  href?: string;
}

const PreventionCard = ({
  title,
  description,
  borderRight = true,
  href,
}: PreventionCardProps) => {
  const content = (
    <>
      <p className="text-[#fff] lg:text-left text-center lg:text-lg text-base font-bold tece">
        {title}
      </p>
      <p className="text-[#fff] lg:text-left text-center lg:text-base text-sm">
        {description}
      </p>
    </>
  );
  const wrapperClassName = `lg:col-span-4 col-span-12 p-5 space-y-2 ${
    borderRight ? "lg:border-r border-b border-[#242424]" : ""
  }`;
  if (href) {
    return (
      <Link href={href} className={`block hover:opacity-90 transition-opacity ${wrapperClassName}`}>
        {content}
      </Link>
    );
  }
  return <div className={wrapperClassName}>{content}</div>;
};

export default PreventionCard;
