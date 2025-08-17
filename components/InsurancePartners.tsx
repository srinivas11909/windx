// components/InsurancePartners.tsx
import Image from "next/image";

interface Partner {
  name: string;
  src: string;
}

const partners: Partner[] = [
  { name: "ICICI Lombard", src: "/insurance-partners/icici-logo.webp" },
  { name: "Bajaj Allianz", src: "/insurance-partners/bajaj-logo.webp" },
  { name: "National Insurance", src: "/insurance-partners/national-insurance.webp" },
  { name: "United India", src: "/insurance-partners/oreintal-logo.webp" },
  { name: "Reliance Insurance", src: "/insurance-partners/reliance-logo.webp" },
  { name: "Tata AIG", src: "/insurance-partners/tata-aig.webp" },
  { name: "Oriental Insurance", src: "/insurance-partners/united-logo.webp" },
  { name: "New India Assurance", src: "/insurance-partners/indian-logo.webp" },
];

export  function InsurancePartners() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-8 uppercase">
          Our Insurance Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {partners.map((partner: Partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
