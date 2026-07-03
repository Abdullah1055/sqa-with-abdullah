import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="SQA with Abdullah"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
       src="/logos/logo.png"
       alt="SQA with Abdullah"
       width={280}
       height={84}
       priority
       className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
     />
    </Link>
  );
}