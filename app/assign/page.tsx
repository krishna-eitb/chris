// "use client";
// import { useEffect, useState } from "react";
// import QRCode from "qrcode";

// export default function AssignPage() {
//   const [assignments, setAssignments] = useState<any[]>([]);
//   const [qrCodes, setQrCodes] = useState<Record<string, string>>({});

//   useEffect(() => {
//     const generate = async () => {
//       const res = await fetch("/api/assign");
//       const data = await res.json();
//       setAssignments(data);

//       // Generate QR for each giver
//       const qrMap: Record<string, string> = {};
//       for (const pair of data) {
//         const url = `https://eitbchris.netlify.app/reveal/${pair.giver}`;
//         const qr = await QRCode.toDataURL(url);
//         qrMap[pair.giver] = qr;
//       }
//       setQrCodes(qrMap);
//     };
//     generate();
//   }, []);

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold mb-6 text-red-600">🎄 Chrisma Chris QR Generator 🎅</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {assignments.map((pair) => (
//           <div key={pair.giver} className="p-4 border rounded-lg shadow bg-white">
//             <h2 className="font-semibold">{pair.giver}</h2>
//             {qrCodes[pair.giver] && (
//               <img src={qrCodes[pair.giver]} alt="QR" className="mx-auto my-3" />
//             )}
//             <p className="text-sm text-gray-500">Scan to reveal partner 🎁</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { motion } from "framer-motion";

export default function AssignPage() {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [qrCodes, setQrCodes] = useState<Record<string, string>>({});

  useEffect(() => {
    const generate = async () => {
      const res = await fetch("/api/assign");
      const data = await res.json();
      setAssignments(data);

      const qrMap: Record<string, string> = {};
      for (const pair of data) {
        const url = `https://eitbchris.netlify.app/reveal/${pair.giver}`;
        const qr = await QRCode.toDataURL(url);
        qrMap[pair.giver] = qr;
      }
      setQrCodes(qrMap);
    };
    generate();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-center">
      {/* 🎅 Santa flying animation */}
      <motion.div
        className="absolute top-20 left-[-200px] text-6xl"
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        🛷🎅
      </motion.div>

      {/* ❄️ Snow animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: ["0%", "110%"],
              x: ["0%", `${Math.random() * 10 - 5}%`],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 mt-16 text-yellow-300 drop-shadow-lg">
        🎄 Christmas Santa EITB 🎅
      </h1>

      {/* 🎁 QR Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10">
        {assignments.map((pair, index) => (
          <motion.div
            key={pair.giver}
            className="p-5 rounded-2xl shadow-xl bg-white/20 backdrop-blur-md border border-white/30 text-center transform transition hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="font-bold text-lg mb-2 text-yellow-200">{pair.giver}</h2>
            {qrCodes[pair.giver] ? (
              <motion.img
                src={qrCodes[pair.giver]}
                alt="QR"
                className="mx-auto my-3 w-32 h-32 rounded-lg shadow-lg border border-yellow-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
            ) : (
              <div className="w-32 h-32 mx-auto bg-white/10 rounded-lg animate-pulse" />
            )}
            <p className="text-sm text-gray-200">Scan to reveal partner 🎁</p>
          </motion.div>
        ))}
      </div>

      {/* 🎶 Footer */}
      <p className="mt-12 text-sm text-gray-300">Made with ❤️ and 🎅 by Team Chrisma</p>
    </div>
  );
}
