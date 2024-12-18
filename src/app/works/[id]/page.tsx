import WorkDetailContent from "@/components/WorkDetailContent";
import { works } from "@/data/works";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = works.find((w) => w.id === params.id);

  if (!work) {
    return {
      title: "Work Not Found | Shine Craft",
      description: "The requested work item could not be found.",
    };
  }

  return {
    title: `${work.title} | Shine Craft`,
    description: work.description,
    openGraph: {
      title: `${work.title} | Shine Craft`,
      description: work.description,
      images: [work.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.description,
      images: [work.image],
    },
  };
}

export default async function WorkDetail({ params }: Props) {
  const work = works.find((w) => w.id === params.id);

  if (!work) {
    notFound();
  }

  return <WorkDetailContent work={work} />;
}
