import { NextResponse } from "next/server";
import { members } from "../../data/members";

export async function GET() {
  const givers = [...members];
  const receivers = [...members];

  // Shuffle receivers
  for (let i = receivers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
  }

  // Ensure no one gets themselves
  for (let i = 0; i < givers.length; i++) {
    if (givers[i] === receivers[i]) {
      // Swap with next person (simple fix)
      const swapIndex = (i + 1) % givers.length;
      [receivers[i], receivers[swapIndex]] = [receivers[swapIndex], receivers[i]];
    }
  }

  const result = givers.map((giver, index) => ({
    giver,
    receiver: receivers[index],
  }));

  return NextResponse.json(result);
}
