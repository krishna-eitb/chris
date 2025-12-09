import { members } from "../../data/members";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return members.map((name) => ({ name }));
}

export default async function RevealPage({ params }: { params: { name: string } }) {
  const res = await fetch(`https://eitbchris.netlify.app/api/assign`);
  const data = await res.json();
  const pair = data.find((p: any) => p.giver === params.name);

  if (!pair) return notFound();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-50">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎁 Hey {params.name}!</h1>
      <p className="text-xl">Your Chrisma Chris partner is:</p>
      <p className="text-3xl font-bold text-red-600 mt-3">{pair.receiver}</p>
      <p className="text-gray-500 mt-5">Merry Christmas! 🎄</p>
    </div>
  );
}
// export const dynamic = "force-dynamic";

// export default async function RevealPage({ params }: { params: { name: string } }) {
//   try {
//     const baseUrl = "https://eitbchris.netlify.app/";
//     const res = await fetch(`${baseUrl}/api/assign`, { cache: "no-store" });

//     // Check if response is actually JSON
//     const text = await res.text();
//     let data;
//     try {
//       data = JSON.parse(text);
//       console.log("Fetched response:", text);
//     } catch {
//       throw new Error("Invalid JSON received from API");
//     }

//     const pair = data.find((p: any) => p.giver === params.name);
//     if (!pair) throw new Error("No pair found");

//     return (
//       <div className="h-screen flex flex-col justify-center items-center bg-red-50">
//         <h1 className="text-4xl font-bold text-green-700 mb-4">🎁 Hey {params.name}!</h1>
//         <p className="text-xl">Your Chrisma Chris partner is:</p>
//         <p className="text-3xl font-bold text-red-600 mt-3">{pair.receiver}</p>
//         <p className="text-gray-500 mt-5">Merry Christmas! 🎄</p>
//       </div>
//     );
//   } catch (error: any) {
//     console.error(error);
//     return (
//       <div className="h-screen flex flex-col justify-center items-center text-center">
//         <h1 className="text-3xl font-bold text-red-600 mb-3">⚠️ Something went wrong!</h1>
//         <p className="text-gray-600">Please try again after deployment or ensure /api/assign is reachable.</p>
//       </div>
//     );
//   }
// }
