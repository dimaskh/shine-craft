import { Work } from "@/types/work";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const works: Work[] = [
  {
    id: "1",
    title: "Porsche 911 GT3 Full Detail",
    description:
      "Complete exterior and interior detailing with ceramic coating",
    fullDescription:
      "This premium detailing package included:\n" +
      "- Multi-stage paint correction\n" +
      "- Ceramic coating application\n" +
      "- Full interior detail\n" +
      "- Wheel and caliper coating\n" +
      "- Glass protection treatment",
    image: `${basePath}/images/projects/porsche-911.jpg`,
    category: "Full Detail",
    beforeImages: [
      `${basePath}/images/projects/before1.jpg`,
      `${basePath}/images/projects/before2.jpg`,
    ],
    afterImages: [
      `${basePath}/images/projects/after1.jpg`,
      `${basePath}/images/projects/after2.jpg`,
    ],
    completionDate: "2023-10-15",
  },
  {
    id: "2",
    title: "Mercedes-AMG GT Paint Correction",
    description: "Advanced paint correction and protection",
    fullDescription:
      "This paint correction service included:\n" +
      "- Multi-stage paint correction\n" +
      "- Swirl and scratch removal\n" +
      "- Paint sealant application\n" +
      "- Paint protection film\n" +
      "- Ceramic coating finish",
    image: `${basePath}/images/projects/mercedes-amg.jpg`,
    category: "Paint Correction",
    beforeImages: [
      `${basePath}/images/projects/before3.jpg`,
      `${basePath}/images/projects/before4.jpg`,
    ],
    afterImages: [
      `${basePath}/images/projects/after3.jpg`,
      `${basePath}/images/projects/after4.jpg`,
    ],
    completionDate: "2023-11-20",
  },
];
