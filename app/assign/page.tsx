"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function AssignPage() {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [qrCodes, setQrCodes] = useState<Record<string, string>>({});

  useEffect(() => {
    const generate = async () => {
      const res = await fetch("/api/assign");
      const data = await res.json();
      setAssignments(data);

      // Generate QR for each giver
      const qrMap: Record<string, string> = {};
      for (const pair of data) {
        const url = `https://your-app.vercel.app/reveal/${pair.giver}`;
        const qr = await QRCode.toDataURL(url);
        qrMap[pair.giver] = qr;
      }
      setQrCodes(qrMap);
    };
    generate();
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-600">🎄 Chrisma Chris QR Generator 🎅</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {assignments.map((pair) => (
          <div key={pair.giver} className="p-4 border rounded-lg shadow bg-white">
            <h2 className="font-semibold">{pair.giver}</h2>
            {qrCodes[pair.giver] && (
              <img src={qrCodes[pair.giver]} alt="QR" className="mx-auto my-3" />
            )}
            <p className="text-sm text-gray-500">Scan to reveal partner 🎁</p>
          </div>
        ))}
      </div>
    </div>
  );
}
