import Link from "next/link";
import Image from "next/image";
import arrow from "@/src/assets/icons/button_arrow.svg";

type ButtonProps = {
    label: string;
    href?: string;
    onClick?: () => void;
    showIcon?: boolean;
    variant?: "primary" | "outline";
    className?: string;
    disabled?: boolean;
};

export function Button({
    label,
    href,
    onClick,
    showIcon = true,
    variant = "primary",
    className = "",
    disabled = false,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center gap-2 px-[72px] py-[18px] rounded-full font-[600] text-[24px] text-text-black bg-[linear-gradient(90deg,var(--color-primary-yellow)_2.47%,var(--color-primary-orange)_100%)] cursor-pointer";
    const variants = {
        primary: "",
        outline:
            "border border-black text-black hover:bg-black hover:text-white",
    };

    const content = (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {label}
            {showIcon && <Image src={arrow} alt="arrow icon" width={30} height={18}/>}
        </span>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={disabled ? "opacity-50 pointer-events-none" : ""}>
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
            {content}
        </button>
    );
}
