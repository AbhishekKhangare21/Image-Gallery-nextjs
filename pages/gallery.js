import Image from "next/image";
import React, { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join("");
}

export default function Gallery({ id, description, imageUrl }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href="#" className="group ">
      <div className="aspect-w-1  aspect-h-1 xl:aspect-w-7 xl:aspect-h-8  w-48 overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt=""
          src={imageUrl}
          width={200}
          height={200}
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale  h-48  blur-2xl scale-110"
              : "grayscale-0  h-48 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
        <p className="p-2">{description}</p>
      </div>
    </a>
  );
}
