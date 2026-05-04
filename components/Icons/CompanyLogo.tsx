type CompanyLogoProps = {
  variant: "bigw" | "atlassian" | "evermed" | "odecee" | "unsw";
  className?: string;
};

export default function CompanyLogo({ variant, className = "" }: CompanyLogoProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full ${className}`;

  switch (variant) {
    case "bigw":
      return (
        <span className={`${baseClasses} bg-[#ffcc00] text-[#002c6f] font-semibold`} aria-label="Big W logo">
          <img src="/img/bigw.png" alt="Big W Logo" className="h-7 w-7" />
        </span>
      );
    case "atlassian":
      return (
        <span className={`${baseClasses} bg-[#ffffff] text-white font-semibold`} aria-label="Atlassian logo">
          <img src="/img/atlassian.png" alt="Atlassian Logo" className="h-5 w-5" />
        </span>
      );
    case "evermed":
      return (
        <span className={`${baseClasses} bg-[#2d9f6a] text-white font-semibold`} aria-label="Evermed logo">
            <img src="/img/evermed.jpeg" alt="Evermed Logo" className="h-7 w-7" />
        </span>
      );
    case "odecee":
      return (
        <span className={`${baseClasses} bg-[#ffffff] text-white font-semibold`} aria-label="Odecee logo">
          <img src="/img/odecee.png" alt="Odecee Logo" className="h-15 w-15" />
        </span>
      );
    case "unsw":
      return (
        <span className={`${baseClasses} bg-[#ffcc00] text-black font-semibold`} aria-label="UNSW logo">
            <img src="/img/unsw.png" alt="UNSW Logo" className="h-7 w-7" />
        </span>
      );
    default:
      return <span className={baseClasses} />;
  }
}
