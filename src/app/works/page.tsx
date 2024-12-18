"use client";

import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    title: "Porsche 911 GT3",
    description: "Full exterior detail with ceramic coating",
    image: "/images/projects/porsche-911.jpg",
    category: "Full Detail",
  },
  {
    id: 2,
    title: "Mercedes-AMG GT",
    description: "Paint correction and ceramic coating",
    image: "/images/projects/mercedes-amg.jpg",
    category: "Paint Correction",
  },
  {
    id: 3,
    title: "BMW M4 Competition",
    description: "Complete protection package",
    image: "/images/projects/bmw-m4.jpg",
    category: "Protection",
  },
];

export default function Works() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Our Portfolio</h1>
      <p className="text-gray-400">
        Browse through our collection of meticulously detailed vehicles
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <Link
            href={"/works/" + work.id}
            key={work.id}
            className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
          >
            <div className="relative h-48">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-blue-400">{work.category}</span>
              <h2 className="text-xl font-semibold mt-2">{work.title}</h2>
              <p className="text-gray-400 mt-2">{work.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
