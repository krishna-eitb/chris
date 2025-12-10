// import { NextResponse } from "next/server";
// import { members } from "../../data/members";

// export async function GET() {
//   const givers = [...members];
//   const receivers = [...members];

//   // Shuffle receivers
//   for (let i = receivers.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
//   }

//   // Ensure no one gets themselves
//   for (let i = 0; i < givers.length; i++) {
//     if (givers[i] === receivers[i]) {
//       // Swap with next person (simple fix)
//       const swapIndex = (i + 1) % givers.length;
//       [receivers[i], receivers[swapIndex]] = [receivers[swapIndex], receivers[i]];
//     }
//   }

//   const result = givers.map((giver, index) => ({
//     giver,
//     receiver: receivers[index],
//   }));

//   return NextResponse.json(result);
// }
import { NextResponse } from "next/server";

// List of members
const members = [
  "Krishna", "Umapathi", "Sarswathi", "Hari", "Malini", "Ashwin", "Stalin", 
  "Jency", "YuvaShree", "Kiruthika", "Rohit", "Revanth", "Nithish", "Arjun", 
  "Karuniya", "Sharan", "Gunashree", "Saipavan", "Balaji", "Sreenivasulu ", "Akash", 
  "Roslin", "Monisha", "Charu", "Sanjith", "Siva", "AshwinKumar", "MuthuKumaran", "SamratAshok","Ilamaran","SivaPratheesh"
];

// This will cache the pairs in memory (not recreated unless server restarts)
let cachedAssignments: { giver: string; receiver: string }[] | null = null;

export async function GET() {
  if (cachedAssignments) {
    // ✅ Already assigned, return same list
    return NextResponse.json(cachedAssignments);
  }

  // Create a shallow copy for shuffling
  const receivers = [...members];

  // Fisher–Yates shuffle
  for (let i = receivers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
  }

  // Ensure no one gets themselves
  for (let i = 0; i < members.length; i++) {
    if (members[i] === receivers[i]) {
      // Swap with next person if same
      const swapWith = (i + 1) % members.length;
      [receivers[i], receivers[swapWith]] = [receivers[swapWith], receivers[i]];
    }
  }

  cachedAssignments = members.map((giver, i) => ({
    giver,
    receiver: receivers[i],
  }));

  return NextResponse.json(cachedAssignments);
}
