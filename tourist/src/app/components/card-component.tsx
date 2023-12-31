"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import favoriteIcon from "../../../public/photos/images/ic_twotone-favorite.png";
import Link from "next/link";
import ShowOnTheMap from "../../../public/photos/images/akar-icons_map.png";
import StarReviews from "../../../public/photos/images/ph_star-fill.png";

type CardProps = {
  imageUrl: StaticImageData | string;
  title: string;
  location: string;
  showOnMap: string;
  description: string;
  rating: string;
  reviews: number;
  price: string;
};

const CardComponent: React.FC<CardProps> = ({
  imageUrl,
  title,
  location,
  description,
  rating,
  reviews,
  price,
  showOnMap,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden  border border-[#E0E2EB] p-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={229}
            objectFit="cover"
            className="rounded-lg filter brightness-100"
          />
          <div className="absolute top-4 right-4 p-2 bg-[#4D4D4D] rounded-full">
            <Image
              src={favoriteIcon}
              width={20}
              height={20}
              alt="Icon"
              className="w-5 h-5"
            />
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {title}
            </h2>
            <Link href={"/"} className="flex gap-2 items-center">
              <p className="text-[#6C759D]">{showOnMap}</p>
              <Image src={ShowOnTheMap} alt="Map Icon" className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-sm mb-4">{location}</p>
          <p className="mb-4 w-2/3">{description}</p>
          <div className="flex items-center mb-4 gap-2">
            <div className="flex gap-1">
              <Image
                src={StarReviews}
                alt={"star-reviews"}
                className="w-6 h-6"
              />
              <p>{reviews}</p>
            </div>
            <p className="text-[#656565]">{rating}</p>
            <div className="ml-auto">
              <p className="text-lg font-bold text-[#0F444D]">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
