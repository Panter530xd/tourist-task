"use client";
import React, { useState } from "react";
import CardComponent from "./components/card-component";
import PaginationControls from "./components/paginations-controls";
import { CheckboxFilter } from "./components/checkboxes";
import CustomInput from "./components/custom-input";
import rectangleImage from "../../public/photos/images/Rectangle 63.png";
import MapImage from "../../public/photos/images/Mapsicle Map.png";
import Image from "next/image";

const PAGE_SIZE = 6;

export default function Home() {
  const cardsData = [...Array(68)].map((_, index) => ({
    imageUrl: rectangleImage,
    title: `Kiki’s Villa`,
    location: "Moldova, Chișinău, 30 Strada Lunaciarski",
    description:
      "Hotelul GREGORY Chișinău este situat în Chișinău, la 400 de metri de Universitatea de Stat din Moldova. Oferă un bar și o parcare privată. Hotelul de 4 stele are un ...",
    rating: "(7) recenzii",
    reviews: 4.9,
    price: "MDL 1 999",
    showOnMap: "Arată pe hartă",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardsData.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleCards = cardsData.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="max-w-screen-2xl mx-auto lg:w-[95%] w-11/12 py-6 flex-col gap-4">
      <div className="flex justify-center pb-10">
        <CustomInput />
      </div>
      <div className="flex gap-10">
        <div className="w-1/4 p-4">
          <CheckboxFilter />
        </div>

        <div className="w-3/4 p-4">
          <div className="relative flex justify-end gap-5 pb-6">
            <div className="relative">
              <Image src={MapImage} width={300} height={150} alt={"Map"} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-2">
                  <p className="text-center">Vezi pe hartă</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {visibleCards.map((cardData, index) => (
              <CardComponent key={index} {...cardData} />
            ))}
          </div>

          <PaginationControls
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
}
