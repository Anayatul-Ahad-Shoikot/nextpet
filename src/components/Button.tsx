import Link from "next/link";
import Image from "next/image";
import arrow from "@/src/assets/icons/button_arrow.svg";
import { BsArrowRight } from "react-icons/bs";
import { ArrowRightIcon } from "../icons";
BsArrowRight;

interface ButtonProps {
	label: string;
	href?: string;
	onClick?: () => void;
	showIcon?: boolean;
	variant?: "primary" | "outline";
	className?: string;
	disabled?: boolean;
	padding?: string;
	TagName?: "button" | "a" | typeof Link;
}

export function Button({
	label,
	href,
	onClick,
	showIcon = false,
	variant = "primary",
	className = "",
	disabled = false,
	padding = "px-[72px] py-[18px]",
	TagName = "button",
}: ButtonProps) {
	const baseStyles = `inline-flex items-center gap-2 ${padding} rounded-full font-[600] text-[24px] text-text-black bg-[linear-gradient(90deg,var(--color-primary-yellow)_2.47%,var(--color-primary-orange)_100%)] cursor-pointer hover:text-white hover:bg-primary-orange group`;
	const variants = {
		primary: "",
		outline: "border border-black text-black hover:bg-black hover:text-white",
	};

	const content = (
		<span className={`${baseStyles} ${variants[variant]} ${className}`}>
			{label}
			{showIcon && <ArrowRightIcon className="group-hover:fill-white" />}
		</span>
	);

	if (href) {
		return (
			<TagName
				href={href}
				className={disabled ? "opacity-50 pointer-events-none" : ""}
			>
				{content}
			</TagName>
		);
	}

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
		>
			{content}
		</button>
	);
}
