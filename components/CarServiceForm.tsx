// "use client";

// import { useState } from "react";

// type CarBrand = {
//   name: string;
//   logo: string;
//   models: { name: string; image: string }[];
// };

// const brands: CarBrand[] = [
//   {
//     name: "Maruti Suzuki",
//     logo: "/brands/maruti.jpg",
//     models: [
//       { name: "Swift", image: "/models/swift.png" },
//       { name: "WagonR", image: "/models/wagonr.png" },
//       { name: "Baleno", image: "/models/baleno.png" }
//     ]
//   },
//   {
//     name: "Hyundai",
//     logo: "/brands/hyundai.jpg",
//     models: [
//       { name: "i20", image: "/models/i20.png" },
//       { name: "Creta", image: "/models/creta.png" }
//     ]
//   }
//   // ➕ add more brands and models
// ];

// export  function CarServiceForm() {
//   const [step, setStep] = useState<1 | 2 | 3>(1);
//   const [city, setCity] = useState("Hyderabad");
//   const [mobile, setMobile] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState<CarBrand | null>(null);
//   const [selectedModel, setSelectedModel] = useState<string>("");

//   const handleSubmit = async () => {
//     const formData = {
//       city,
//       mobile,
//       brand: selectedBrand?.name,
//       model: selectedModel
//     };

//     // ✅ Send data to API route
//     // await fetch("/api/sendMail", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(formData)
//     // });

//     alert("Your request has been sent! ✅");
//     setStep(1);
//     setMobile("");
//     setSelectedBrand(null);
//     setSelectedModel("");
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
//       {step === 1 && (
//         <div>
//           <h2 className="text-xl font-bold mb-2 text-gray-700 uppercase">Experience The Best Car Services</h2>
//           <p className="mb-4 font-base tet-gray-500">Get instant quotes for your car service</p>
//           <select
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="w-full border rounded p-2 mb-2 text-black"
//           >
//             <option>Hyderabad</option>
//             <option>Bengaluru</option>
//             <option>Mumbai</option>
//           </select>
//           <input
//             type="tel"
//             placeholder="Enter Mobile Number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             className="w-full border rounded p-2 mb-2 text-black"
//           />
//           <button
//             onClick={() => setStep(2)}
//             className="w-full bg-red-600 text-white py-2 rounded"
//           >
//             Select Your Car
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4 text-black">Select Manufacturer</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {brands.map((brand) => (
//               <div
//                 key={brand.name}
//                 className="cursor-pointer text-center"
//                 onClick={() => {
//                   setSelectedBrand(brand);
//                   setStep(3);
//                 }}
//               >
//                 <img src={brand.logo} alt={brand.name} className="w-[80px] mx-auto" />
//                 <p className="font-base text-gray-500">{brand.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {step === 3 && selectedBrand && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Select Model</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {selectedBrand.models.map((model) => (
//               <div
//                 key={model.name}
//                 className="cursor-pointer text-center"
//                 onClick={() => {
//                   setSelectedModel(model.name);
//                   handleSubmit();
//                 }}
//               >
//                 <img src={model.image} alt={model.name} className="h-20 mx-auto" />
//                 <p>{model.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

type CarBrand = {
  name: string;
  logo: string;
  models: { name: string; image: string }[];
};

const brands: CarBrand[] = [
  {
    name: "Maruti Suzuki",
    logo: "/brands/maruti.jpg",
    models: [
      { name: "Swift", image: "/models/swift.png" },
      { name: "WagonR", image: "/models/wagonr.png" },
      { name: "Baleno", image: "/models/baleno.png" },
    ],
  },
  {
    name: "Hyundai",
    logo: "/brands/hyundai.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
  {
    name: "Honda",
    logo: "/brands/honda.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
    {
    name: "Kia",
    logo: "/brands/kia.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
{
    name: "Mahindra",
    logo: "/brands/mahindra.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
  {
    name: "Tata",
    logo: "/brands/tata.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
   {
    name: "Skoda",
    logo: "/brands/skoda.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
    {
    name: "Toyota",
    logo: "/brands/toyota.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
    {
    name: "MG",
    logo: "/brands/mg.jpg",
    models: [
      { name: "i20", image: "/models/i20.png" },
      { name: "Creta", image: "/models/creta.png" },
    ],
  },
];

export  function CarServiceForm() {
  const [step, setStep] = useState<"FORM" | "BRAND" | "MODEL">("FORM");
  const [city, setCity] = useState("Hyderabad");
  const [mobile, setMobile] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<CarBrand | null>(null);
  const [selectedModel, setSelectedModel] = useState("");
  const [brandName, setBrandName] = useState('');

  const handleSubmit = async () => {
    if (!mobile || !selectedModel) return;

    const formData = {
      city,
      mobile,
      brand: selectedBrand?.name,
      model: selectedModel,
    };

    alert("✅ Request Sent: " + JSON.stringify(formData, null, 2));
  };
  
  const handleBrandSelection = (e:any) => {
    setBrandName(e.target.value)
  }

   const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(brandName.toLowerCase())
  );
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg relative min-h-[400px]">
      {/* STEP 1: Main Form */}
      {step === "FORM" && (
        <>
          <h2 className="text-xl font-bold mb-2 text-gray-700 uppercase">
            Experience The Best Car Services
          </h2>
          <p className="mb-4 text-gray-500">Get instant quotes for your car service</p>

          {/* City */}
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border rounded p-2 mb-2 text-black"
          >
            <option>Hyderabad</option>
            <option>Bengaluru</option>
            <option>Mumbai</option>
          </select>

          {/* Car Selection Trigger */}
          <div
            className="w-full border rounded p-2 cursor-pointer bg-white mb-2 text-black"
            onClick={() => setStep("BRAND")}
          >
            {selectedModel
              ? `${selectedBrand?.name} - ${selectedModel}`
              : "Select Your Car"}
          </div>
          
            <div className={`${selectedModel ? 'block' : 'hidden'}`}>
              <select className="w-full border rounded p-2 mb-2 text-black">
                <option>Select Car Manufacutre year</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
              </select>
            </div>
     

          {/* Mobile */}
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border rounded p-2 mb-2 text-black"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-[#DC2626] text-white py-2 rounded disabled:bg-gray-300"
            disabled={!selectedModel || !mobile}
          >
            CHECK PRICES FOR FREE
          </button>
        </>
      )}

      {/* STEP 2: Brand Selection */}
      {step === "BRAND" && (
        <div>
          <div className="flex items-center mb-4">
            <button
              onClick={() => setStep("FORM")}
              className="mr-2 text-gray-600 hover:text-black"
            >
              <FaArrowLeft />
            </button>
            <h3 className="text-lg font-semibold text-black">Select Manufacturer</h3>
          </div>
          <div className="flex mb-[16px]">
            <div className="relative flex items-center w-full border border-gray-500 p-2 rounded-md">
               <FaSearch color="black"/>
               <input type="text" placeholder="Search for your car brand" className="outline-0 ml-2 w-[calc(100%-30px)] text-black" name="brandSearch" value={brandName} onChange={handleBrandSelection}/>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
               {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="cursor-pointer text-center"
                  onClick={() => {
                    setSelectedBrand(brand);
                    setStep("MODEL");
                  }}
                >
                  <img src={brand.logo} alt={brand.name} className="h-auto w-[88px] mx-auto" />
                  <p className="text-sm mt-1 text-gray-700">{brand.name}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-3 text-center">No brands found</p>
            )}
          </div>
        </div>
      )}

      {/* STEP 3: Model Selection */}
      {step === "MODEL" && selectedBrand && (
        <div>
          <div className="flex items-center mb-4">
            <button
              onClick={() => setStep("BRAND")}
              className="mr-2 text-gray-600 hover:text-black"
            >
              <FaArrowLeft />
            </button>
            <h3 className="text-lg font-semibold text-black">
              Select {selectedBrand.name} Model
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {selectedBrand.models.map((model) => (
              <div
                key={model.name}
                className="cursor-pointer text-center"
                onClick={() => {
                  setSelectedModel(model.name);
                  setStep("FORM");
                }}
              >
                <img src={model.image} alt={model.name} className="h-16 mx-auto" />
                <p className="text-sm mt-1">{model.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
