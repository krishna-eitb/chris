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
import RevealClient from "@/app/RevealClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RevealPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://eitbchris.netlify.app";

  let data;
  try {
    const res = await fetch(`${baseUrl}/api/eitbassign`, { cache: "no-store" });
    if (!res.ok) return notFound();
    data = await res.json();
  } catch (err) {
    return notFound();
  }

  const pair = data.find((p: any) => p.giver === name);
  if (!pair) return notFound();

  // ✅ Make sure your JSX is inside the return statement
  return (
    <RevealClient name={name} receiver={pair.receiver}/>
  );
} // 
{/* <div className="h-screen flex flex-col justify-center items-center bg-red-50">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎁 Hey {name}!</h1>
      <p className="text-xl">Your Chrisma Chris partner is:</p>
      <p className="text-3xl font-bold text-red-600 mt-3">{}</p>
      <p className="text-gray-500 mt-5">Merry Christmas! 🎄</p>
    </div> */}