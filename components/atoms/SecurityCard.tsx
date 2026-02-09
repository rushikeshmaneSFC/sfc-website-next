interface SecurityCardProps {
  text: any;
  className?: string;
  textClass?: string;
}

function SecurityCard({ text, className, textClass }: SecurityCardProps) {
  return (
    <div>
      <div
        className={`p-6 rounded-lg shadow-md bg-white ${className}`}
        style={{
          background:
            "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      >
        <p className={`text-center text-base font-medium ${textClass}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default SecurityCard;
