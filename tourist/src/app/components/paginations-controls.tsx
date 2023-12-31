import React from "react";
import ArrowLeft from "../../../public/photos/svg/tabler_arrow-left.svg";
import ArroRight from "../../../public/photos/svg/tabler_arrow-right.svg";
import Image from "next/image";

const Pagination: React.FC<{
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({ totalPages, currentPage, onPageChange }) => {
  const generatePageButtons = () => {
    const buttons = [];

    // Previous button
    buttons.push(
      <button
        key={"prev"}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-1 px-3 py-1 rounded font-bold ${
          currentPage === 1 ? "text-[#AFAFAF]" : "text-black"
        }`}
      >
        <Image src={ArrowLeft} alt="arrow" />
      </button>
    );

    // First page
    buttons.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`mx-1 px-3 py-1 rounded font-bold text-xl ${
          currentPage === 1 ? "text-black" : "text-[#AFAFAF]"
        }`}
      >
        {1}
      </button>
    );

    // Second page
    if (totalPages > 1) {
      buttons.push(
        <button
          key={2}
          onClick={() => onPageChange(2)}
          className={`mx-1 px-3 py-1 rounded font-bold text-xl ${
            currentPage === 2 ? "text-black" : "text-[#AFAFAF]"
          }`}
        >
          {2}
        </button>
      );
    }

    // Third page
    if (totalPages > 2) {
      buttons.push(
        <button
          key={3}
          onClick={() => onPageChange(3)}
          className={`mx-1 px-3 py-1 rounded font-bold text-xl ${
            currentPage === 3 ? "text-black" : "text-[#AFAFAF]"
          }`}
        >
          {3}
        </button>
      );
    }

    // Fourth page
    if (totalPages > 3) {
      buttons.push(
        <button
          key={4}
          onClick={() => onPageChange(4)}
          className={`mx-1 px-3 py-1 rounded font-bold text-xl ${
            currentPage === 4 ? "text-black" : "text-[#AFAFAF]"
          }`}
        >
          {4}
        </button>
      );
    }

    // Ellipsis before pages
    if (currentPage > 5) {
      buttons.push(
        <span
          key={"ellipsis-before-pages"}
          className="mx-1 px-3 py-1 text-[#AFAFAF] font-bold text-xl"
        >
          ...
        </span>
      );
    }

    // Pages
    for (
      let i = Math.max(5, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`mx-1 px-3 py-1 rounded font-bold text-xl ${
            currentPage === i ? "text-black " : "text-[#AFAFAF]"
          }`}
        >
          {i}
        </button>
      );
    }

    // Ellipsis after pages
    if (currentPage < totalPages - 3) {
      buttons.push(
        <span
          key={"ellipsis-after-pages"}
          className="mx-1 px-3 py-1 text-[#AFAFAF] font-bold text-xl"
        >
          ...
        </span>
      );
    }

    // Last page
    buttons.push(
      <button
        key={totalPages}
        onClick={() => onPageChange(totalPages)}
        className={`mx-1 px-3 py-1 rounded text-black font-bold text-xl`} // Always set to black
      >
        {totalPages}
      </button>
    );
    // Next button
    buttons.push(
      <button
        key={"next"}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === totalPages ? "text-[#AFAFAF]" : "text-black"
        }`}
      >
        <Image src={ArroRight} alt="arrow" />
      </button>
    );

    return buttons;
  };

  return (
    <div className="flex mt-4 justify-center items-center">
      {generatePageButtons()}
    </div>
  );
};

export default Pagination;
