// import { members } from "../../data/members";
// import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   return members.map((name) => ({ name }));
// }

// export default async function RevealPage({ params }: { params: { name: string } }) {
//   const res = await fetch(`https://eitbchris.netlify.app/api/assign`);
//   const data = await res.json();
//   const pair = data.find((p: any) => p.giver === params.name);

//   if (!pair) return notFound();

//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-red-50">
//       <h1 className="text-4xl font-bold text-green-700 mb-4">🎁 Hey {params.name}!</h1>
//       <p className="text-xl">Your Chrisma Chris partner is:</p>
//       <p className="text-3xl font-bold text-red-600 mt-3">{pair.receiver}</p>
//       <p className="text-gray-500 mt-5">Merry Christmas! 🎄</p>
//     </div>
//   );
// }
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { notFound } from "next/navigation";

export default async function RevealPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params; // <-- unwrap the Promise

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/assign`, { cache: "no-store" });
  if (!res.ok) return notFound();

  const data = await res.json();
  const pair = data.find((p: any) => p.giver === name);

  if (!pair) return notFound();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-50">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎁 Hey {name}!</h1>
      <p className="text-xl">Your Chrisma Chris partner is:</p>
      <p className="text-3xl font-bold text-red-600 mt-3">{pair.receiver}</p>
      <p className="text-gray-500 mt-5">Merry Christmas! 🎄</p>
    </div>
  );
}

