import { ReactNode, MouseEventHandler } from "react";

interface ReusableBtnProps {
  type?: "button" | "submit" | "reset";
  name: string;
  className?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLSpanElement | HTMLDivElement>;
  /** When already inside a button, use as="span" to avoid nested button */
  as?: "button" | "span" | "div";
}

function ReusableBtn({
  type = "button",
  name,
  className,
  icon,
  onClick,
  as: Component = "button",
}: ReusableBtnProps) {
  const sharedClassName = `px-4 text-base sm:text-[13px] ${className ?? ""}`;
  const content = (
    <>
      {name}
      {icon && <span className="mt-1">{icon}</span>}
    </>
  );
  if (Component === "span") {
    return (
      <span className={sharedClassName} onClick={onClick} role="presentation">
        {content}
      </span>
    );
  }
  if (Component === "div") {
    return (
      <div className={sharedClassName} onClick={onClick} role="presentation">
        {content}
      </div>
    );
  }
  return (
    <div>
      <button
        type={type}
        className={sharedClassName}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
}

export default ReusableBtn;
