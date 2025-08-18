// import { dbConnect } from '@/lib/db'
// import { ServiceArea } from '@/models/ServiceArea'
// import type { IServiceArea } from '@/models/ServiceArea'
// import type { Metadata } from 'next'

// type Props = { params: { slug: string } }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   await dbConnect()
//   const item = await ServiceArea.findOne({ slug: params.slug }).lean<IServiceArea>()
//   return {
//     title: item?.seoTitle || `${item?.name || 'Service'} | WindshieldPro`,
//     description: item?.seoDescription || item?.description?.slice(0, 150)
//   }
// }

// export default async function ServiceAreaPage({ params }: Props) {
//   await dbConnect()
//   const item = await ServiceArea.findOne({ slug: params.slug }).lean()
//   if (!item) return <section className="container py-16"><h1 className="text-3xl font-bold">Not found</h1></section>
//   return (
//     <section className="container py-16">
//       <h1 className="text-3xl font-bold">{item.name}</h1>
//       <article className="prose prose-invert max-w-none mt-4" dangerouslySetInnerHTML={{ __html: item.description }} />
//     </section>
//   )
// }

// app/services/[...slug]/page.tsx
import { dbConnect } from "@/lib/db";
import { ServiceArea } from "@/models/ServiceArea";
import type { IServiceArea } from "@/models/ServiceArea";
import type { Metadata } from "next";

type Props = { params: { slug: string[] } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await dbConnect();
  const fullSlug = params.slug.join("/"); // ✅ join array into "vizag/windshield-glass-replacement"
  const item = await ServiceArea.findOne({ slug: fullSlug }).lean<IServiceArea>();
  return {
    title: item?.seoTitle || `${item?.name || "Service"} | WindshieldPro`,
    description: item?.seoDescription || item?.description?.slice(0, 150),
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  await dbConnect();
  const fullSlug = params.slug.join("/"); // ✅ join back
  const item = await ServiceArea.findOne({ slug: fullSlug }).lean();
  if (!item)
    return (
      <section className="container py-16">
        <h1 className="text-3xl font-bold">Not found</h1>
      </section>
    );
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <article
        className="prose prose-invert max-w-none mt-4"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </section>
  );
}
