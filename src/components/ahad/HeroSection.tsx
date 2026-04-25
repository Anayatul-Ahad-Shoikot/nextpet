import Image from "next/image";
import heroImage from "@/src/assets/images/hero_banner.png";
import { Button } from "../Button";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="h-screen">
			<div className="h-full relative px-10">
				<Image
					src={heroImage}
					alt="Hero banner image"
					className="absolute top-0 right-0 max-w-[910px] w-full -z-1"
				/>
				<div className="absolute size-[270px] top-[-44px] left-[-40px] bg-primary-orange opacity-80 blur-[225px] -z-1"></div>
				<div className="container h-full">
					<div className="max-w-[540px] w-full h-full flex flex-col gap-5 items-start justify-center">
						<h1 className="text-text-black text-[48px] font-[800] leading-none">
							Get Food & Accessories for your pets
						</h1>
						<p className="text-[20px] text-text-gray">
							Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
							purus condim entum a. Aliquam condimentum mattis neque sed
							pretium.
						</p>
						<Button
							href="/shop"
							TagName={Link}
							label="Shop Now"
							variant="primary"
							showIcon={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
