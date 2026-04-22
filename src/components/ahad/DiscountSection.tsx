import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import discount1 from "@/src/assets/images/discount_dog_img_01.png";
import overlay1 from "@/src/assets/images/discount_overlay_01.png";
import discount2 from "@/src/assets/images/discount_cat_img_01.png";
import discount3 from "@/src/assets/images/discount_catdog_img_01.png";
import overlay2 from "@/src/assets/images/discount_overlay_02.png";
import discount4 from "@/src/assets/images/discount_catdog_img_02.png";

const DiscountSection = () => {
    return (
        <section>
            <div className="container">
                <div className="flex w-full flex-col">
                    <div className="min-h-[415px] flex">
                        <div className="flex w-[50%] relative justify-end items-start bg-primary-yellow/20 px-[13px] py-[60px]">
                            <div className="max-w-[350px] w-full">
                                <p className="text-[25px] text-primary-orange capitalize font-[500] pb-3">
                                    flat discount 25%
                                </p>
                                <h2 className="font-[700] text-[32px] text-text-black capitalize pb-6">
                                    organic food for dogs & puppies
                                </h2>
                                <Button
                                    label="Shop Now"
                                    padding="px-[26px] py-[11px]"
                                />
                            </div>
                            <Image
                                src={discount1}
                                alt="dog img"
                                className="absolute bottom-0 left-0"
                            />
                        </div>
                        <div className="flex w-[50%]">
                            <div className="w-full relative justify-center items-center px-10 bg-[linear-gradient(180deg,rgba(217,217,217,0.35)_0%,rgba(254,137,53,0.35)_100%)]">
                                <Image
                                    src={overlay1}
                                    alt="overlay"
                                    className="absolute w-full h-full top-0 left-0"
                                />
                                <div className="relative max-w-[350px] w-full flex flex-col items-center justify-center h-full z-10">
                                    <p className="text-[25px] text-primary-orange capitalize font-[500] pb-3">
                                        on hygiene
                                    </p>
                                    <h2 className="font-[700] text-[25px] text-text-black capitalize pb-6 text-center">
                                        AND PET CARE ITEMS Up to 10% off
                                    </h2>
                                    <Button
                                        label="Shop Now"
                                        padding="px-[26px] py-[11px]"
                                    />
                                </div>
                            </div>
                            <div className="w-full relative px-2.5 pt-[30px] bg-[#407D9F]/20">
                                <Image
                                    src={discount2}
                                    alt="overlay"
                                    className="absolute bottom-0 right-0"
                                />
                                <div className="relative max-w-[350px] w-full flex flex-col items-center justify-start h-full scale-z-150">
                                    <p className="text-[25px] text-primary-orange capitalize font-[500] pb-3">
                                        Cat’s food
                                    </p>
                                    <h2 className="font-[700] text-[30px] text-text-black capitalize pb-6 text-center">
                                        Discounts up to 20%
                                    </h2>
                                    <Button
                                        label="Shop Now"
                                        padding="px-[26px] py-[11px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[415px] flex">
                        <div className="flex w-[50%]">
                            <div className="w-full relative justify-center items-center px-10 bg-[linear-gradient(180deg,rgba(217,217,217,0.35)_0%,rgba(254,137,53,0.35)_100%)]">
                                <Image
                                    src={overlay1}
                                    alt="overlay"
                                    className="absolute w-full h-full top-0 left-0"
                                />
                                <div className="relative max-w-[350px] w-full flex flex-col items-center justify-center h-full z-10">
                                    <p className="text-[25px] text-primary-orange capitalize font-[500] pb-3">
                                        on hygiene
                                    </p>
                                    <h2 className="font-[700] text-[25px] text-text-black capitalize pb-6 text-center">
                                        AND PET CARE ITEMS Up to 10% off
                                    </h2>
                                    <Button
                                        label="Shop Now"
                                        padding="px-[26px] py-[11px]"
                                    />
                                </div>
                            </div>
                            <div className="w-full relative px-2.5 pt-[30px] bg-[#407D9F]/20">
                                <Image
                                    src={discount2}
                                    alt="overlay"
                                    className="absolute bottom-0 right-0"
                                />
                                <div className="relative max-w-[350px] w-full flex flex-col items-center justify-start h-full scale-z-150">
                                    <p className="text-[25px] text-primary-orange capitalize font-[500] pb-3">
                                        Cat’s food
                                    </p>
                                    <h2 className="font-[700] text-[30px] text-text-black capitalize pb-6 text-center">
                                        Discounts up to 20%
                                    </h2>
                                    <Button
                                        label="Shop Now"
                                        padding="px-[26px] py-[11px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[50%] relative justify-end items-start bg-primary-yellow/20 px-[13px] py-[60px]">
                            <div className="max-w-[350px] w-full">
                                <p className="text-[25px] text-primary-orange capitalize font-[500] pb-3">
                                    flat discount 25%
                                </p>
                                <h2 className="font-[700] text-[32px] text-text-black capitalize pb-6">
                                    organic food for dogs & puppies
                                </h2>
                                <Button
                                    label="Shop Now"
                                    padding="px-[26px] py-[11px]"
                                />
                            </div>
                            <Image
                                src={discount1}
                                alt="dog img"
                                className="absolute bottom-0 left-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;
