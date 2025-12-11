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
// "use client";

// import { useEffect, useState } from "react";
// import QRCode from "qrcode";
// import { motion } from "framer-motion";

// export default function AssignPage() {
//   const [assignments, setAssignments] = useState<any[]>([]);
//   const [qrCodes, setQrCodes] = useState<Record<string, string>>({});

//   useEffect(() => {
//     const generate = async () => {
//       const res = await fetch("/api/assign");
//       const data = await res.json();
//       setAssignments(data);

//       const qrMap: Record<string, string> = {};
//       for (const pair of data) {
//         const url = `https://eitbchris.netlify.app/surprise/${pair.giver}`;
//         const qr = await QRCode.toDataURL(url);
//         qrMap[pair.giver] = qr;
//       }
//       setQrCodes(qrMap);
//     };
//     generate();
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-center">
//       {/* 🎅 Santa flying animation */}
//       <motion.div
//         className="absolute top-20 left-[-200px] text-6xl"
//         animate={{ x: ["-10%", "110%"] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       >
//         🛷🎅
//       </motion.div>

//       {/* ❄️ Snow animation */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white rounded-full opacity-80"
//             style={{
//               width: Math.random() * 4 + 2,
//               height: Math.random() * 4 + 2,
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//             }}
//             animate={{
//               y: ["0%", "110%"],
//               x: ["0%", `${Math.random() * 10 - 5}%`],
//               opacity: [1, 0.3, 1],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <h1 className="text-4xl md:text-5xl font-extrabold mb-10 mt-16 text-yellow-300 drop-shadow-lg">
//         🎄 Secret Santa EITB 🎅
//       </h1>

//       {/* 🎁 QR Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10">
//         {assignments.map((pair, index) => (
//           <motion.div
//             key={pair.giver}
//             className="p-5 rounded-2xl shadow-xl bg-white/20 backdrop-blur-md border border-white/30 text-center transform transition hover:scale-105 hover:shadow-2xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <h2 className="font-bold text-lg mb-2 text-yellow-200">{pair.giver}</h2>
//             {qrCodes[pair.giver] ? (
//               <motion.img
//                 src={qrCodes[pair.giver]}
//                 alt="QR"
//                 className="mx-auto my-3 w-32 h-32 rounded-lg shadow-lg border border-yellow-200"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//               />
//             ) : (
//               <div className="w-32 h-32 mx-auto bg-white/10 rounded-lg animate-pulse" />
//             )}
//             <p className="text-sm text-gray-200">Scan to reveal partner 🎁</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🎶 Footer */}
//       <p className="mt-12 text-sm text-gray-300">Made with ❤️ and 🎅 by Team Chrisma</p>
//     </div>
//   );
// }
// "use client";

// import { useEffect, useRef, useState } from "react";
// import QRCode from "qrcode";
// import { motion } from "framer-motion";

// export default function AssignPage() {
//   const [assignments, setAssignments] = useState<any[]>([]);
//   const [qrCodes, setQrCodes] = useState<Record<string, string>>({});
//   const [revealed, setRevealed] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     const generate = async () => {
//       const res = await fetch("/api/assign");
//       const data = await res.json();
//       setAssignments(data);

//       const qrMap: Record<string, string> = {};
//       for (const pair of data) {
//         const url = `https://eitbchris.netlify.app/surprise/${pair.giver}`;
//         const qr = await QRCode.toDataURL(url);
//         qrMap[pair.giver] = qr;
//       }
//       setQrCodes(qrMap);
//     };
//     generate();
//   }, []);

//   // ✅ ScratchCard component
//   const ScratchCard = ({ giver, qr }: { giver: string; qr: string }) => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);

//     useEffect(() => {
//       // If already revealed, skip scratch logic
//       if (revealed[giver]) return;

//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       const w = 128;
//       const h = 128;
//       canvas.width = w;
//       canvas.height = h;

//       // gray overlay
//       ctx.fillStyle = "#FF0000";
//       ctx.fillRect(0, 0, w, h);
//       ctx.globalCompositeOperation = "destination-out";

//       let isDrawing = false;

//       const scratch = (e: MouseEvent | TouchEvent) => {
//         const rect = canvas.getBoundingClientRect();
//         const x =
//           e instanceof MouseEvent ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
//         const y =
//           e instanceof MouseEvent ? e.clientY - rect.top : e.touches[0].clientY - rect.top;

//         ctx.beginPath();
//         ctx.arc(x, y, 15, 0, Math.PI * 2);
//         ctx.fill();
//       };

//       const handleStart = (e: MouseEvent | TouchEvent) => {
//         isDrawing = true;
//         scratch(e);
//       };
//       const handleMove = (e: MouseEvent | TouchEvent) => {
//         if (!isDrawing) return;
//         scratch(e);
//       };
//       const handleEnd = () => {
//         isDrawing = false;

//         // check % cleared
//         const pixels = ctx.getImageData(0, 0, w, h).data;
//         let cleared = 0;
//         for (let i = 3; i < pixels.length; i += 4) {
//           if (pixels[i] < 128) cleared++;
//         }
//         const percent = (cleared / (w * h)) * 100;

//         if (percent > 60) {
//           // update global reveal state
//           setRevealed((prev) => ({ ...prev, [giver]: true }));
//         }
//       };

//       canvas.addEventListener("mousedown", handleStart);
//       canvas.addEventListener("mousemove", handleMove);
//       window.addEventListener("mouseup", handleEnd);
//       canvas.addEventListener("touchstart", handleStart);
//       canvas.addEventListener("touchmove", handleMove);
//       window.addEventListener("touchend", handleEnd);

//       return () => {
//         canvas.removeEventListener("mousedown", handleStart);
//         canvas.removeEventListener("mousemove", handleMove);
//         window.removeEventListener("mouseup", handleEnd);
//         canvas.removeEventListener("touchstart", handleStart);
//         canvas.removeEventListener("touchmove", handleMove);
//         window.removeEventListener("touchend", handleEnd);
//       };
//     }, [giver, revealed[giver]]);

//     return (
//       <div className="relative mx-auto my-3 w-32 h-32 rounded-lg shadow-lg border border-yellow-200 overflow-hidden bg-white/10">
//         <img
//           src={qr}
//           alt="QR Code"
//           className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
//             revealed[giver] ? "opacity-100" : "opacity-40"
//           }`}
//         />
//         {!revealed[giver] && (
//           <canvas
//             ref={canvasRef}
//             className="absolute inset-0 cursor-pointer"
//             style={{
//               borderRadius: "0.5rem",
//               transition: "opacity 0.8s ease",
//             }}
//           />
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-center">
//       {/* 🎅 Santa flying animation */}
//       <motion.div
//         className="absolute top-20 left-[-200px] text-6xl"
//         animate={{ x: ["-10%", "110%"] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       >
//         🛷🎅
//       </motion.div>

//       {/* ❄️ Snow animation */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white rounded-full opacity-80"
//             style={{
//               width: Math.random() * 4 + 2,
//               height: Math.random() * 4 + 2,
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//             }}
//             animate={{
//               y: ["0%", "110%"],
//               x: ["0%", `${Math.random() * 10 - 5}%`],
//               opacity: [1, 0.3, 1],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <h1 className="text-4xl md:text-5xl font-extrabold mb-10 mt-16 text-yellow-300 drop-shadow-lg">
//         🎄 Secret Santa EITB 🎅
//       </h1>

//       {/* 🎁 QR Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10">
//         {assignments.map((pair, index) => (
//           <motion.div
//             key={pair.giver}
//             className="p-5 rounded-2xl shadow-xl bg-white/20 backdrop-blur-md border border-white/30 text-center transform transition hover:scale-105 hover:shadow-2xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <h2 className="font-bold text-lg mb-2 text-yellow-200">{pair.giver}</h2>
//             {qrCodes[pair.giver] ? (
//               <ScratchCard giver={pair.giver} qr={qrCodes[pair.giver]} />
//             ) : (
//               <div className="w-32 h-32 mx-auto bg-white/10 rounded-lg animate-pulse" />
//             )}
//             <p className="text-sm text-gray-200">
//               {revealed[pair.giver] ? "🎉 Partner Revealed!" : "Scratch to reveal 🎁"}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🎶 Footer */}
//       <p className="mt-12 text-sm text-gray-300">Made with ❤️ and 🎅 by Team Chrisma</p>
//     </div>
//   );
// }
// original code 
// "use client";

// import { useEffect, useRef, useState } from "react";
// import QRCode from "qrcode";
// import { motion } from "framer-motion";

// export default function AssignPage() {
//   const [assignments, setAssignments] = useState<any[]>([]);
//   const [qrCodes, setQrCodes] = useState<Record<string, string>>({});
//   const [revealed, setRevealed] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     const generate = async () => {
//       const res = await fetch("/api/assign");
//       const data = await res.json();
//       setAssignments(data);

//       const qrMap: Record<string, string> = {};
//       for (const pair of data) {
//         const url = `https://eitbchris.netlify.app/surprise/${pair.giver}`;
//         const qr = await QRCode.toDataURL(url);
//         qrMap[pair.giver] = qr;
//       }
//       setQrCodes(qrMap);
//     };
//     generate();
//   }, []);

//   // ✅ ScratchCard component
//   const ScratchCard = ({ giver, qr }: { giver: string; qr: string }) => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);

//     useEffect(() => {
//       if (revealed[giver]) return;

//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       const w = 128;
//       const h = 128;
//       canvas.width = w;
//       canvas.height = h;

//       // red overlay for Christmas 🎅
//       ctx.fillStyle = "#FF0000";
//       ctx.fillRect(0, 0, w, h);
//       ctx.globalCompositeOperation = "destination-out";

//       let isDrawing = false;

//       const scratch = (e: MouseEvent | TouchEvent) => {
//         const rect = canvas.getBoundingClientRect();
//         const x =
//           e instanceof MouseEvent ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
//         const y =
//           e instanceof MouseEvent ? e.clientY - rect.top : e.touches[0].clientY - rect.top;

//         ctx.beginPath();
//         ctx.arc(x, y, 15, 0, Math.PI * 2);
//         ctx.fill();
//       };

//       const handleStart = (e: MouseEvent | TouchEvent) => {
//         isDrawing = true;
//         scratch(e);
//       };
//       const handleMove = (e: MouseEvent | TouchEvent) => {
//         if (!isDrawing) return;
//         scratch(e);
//       };
//       const handleEnd = () => {
//         isDrawing = false;

//         // check % cleared
//         const pixels = ctx.getImageData(0, 0, w, h).data;
//         let cleared = 0;
//         for (let i = 3; i < pixels.length; i += 4) {
//           if (pixels[i] < 128) cleared++;
//         }
//         const percent = (cleared / (w * h)) * 100;

//         if (percent > 60) {
//           // ✅ Play wow.mp3 once revealed
//           const audio = new Audio("/wow1.mp3");
//           audio.volume = 0.8; // moderate volume
//           audio.play().catch((err) => console.warn("Audio play blocked:", err));

//           // Update reveal state
//           setRevealed((prev) => ({ ...prev, [giver]: true }));
//         }
//       };

//       canvas.addEventListener("mousedown", handleStart);
//       canvas.addEventListener("mousemove", handleMove);
//       window.addEventListener("mouseup", handleEnd);
//       canvas.addEventListener("touchstart", handleStart);
//       canvas.addEventListener("touchmove", handleMove);
//       window.addEventListener("touchend", handleEnd);

//       return () => {
//         canvas.removeEventListener("mousedown", handleStart);
//         canvas.removeEventListener("mousemove", handleMove);
//         window.removeEventListener("mouseup", handleEnd);
//         canvas.removeEventListener("touchstart", handleStart);
//         canvas.removeEventListener("touchmove", handleMove);
//         window.removeEventListener("touchend", handleEnd);
//       };
//     }, [giver, revealed[giver]]);

//     return (
//       <div className="relative mx-auto my-3 w-32 h-32 rounded-lg shadow-lg border border-yellow-200 overflow-hidden bg-white/10">
//         <img
//           src={qr}
//           alt="QR Code"
//           className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
//             revealed[giver] ? "opacity-100" : "opacity-40"
//           }`}
//         />
//         {!revealed[giver] && (
//           <canvas
//             ref={canvasRef}
//             className="absolute inset-0 cursor-pointer"
//             style={{
//               borderRadius: "0.5rem",
//               transition: "opacity 0.8s ease",
//             }}
//           />
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-center">
//       {/* 🎅 Santa flying animation */}
//       <motion.div
//         className="absolute top-20 left-[-200px] text-6xl"
//         animate={{ x: ["-10%", "110%"] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       >
//         🛷🎅
//       </motion.div>

//       {/* ❄️ Snow animation */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white rounded-full opacity-80"
//             style={{
//               width: Math.random() * 4 + 2,
//               height: Math.random() * 4 + 2,
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//             }}
//             animate={{
//               y: ["0%", "110%"],
//               x: ["0%", `${Math.random() * 10 - 5}%`],
//               opacity: [1, 0.3, 1],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <h1 className="text-4xl md:text-5xl font-extrabold mb-10 mt-16 text-yellow-300 drop-shadow-lg">
//         🎄 Secret Santa EITB 🎅
//       </h1>

//       {/* 🎁 QR Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10">
//         {assignments.map((pair, index) => (
//           <motion.div
//             key={pair.giver}
//             className="p-5 rounded-2xl shadow-xl bg-white/20 backdrop-blur-md border border-white/30 text-center transform transition hover:scale-105 hover:shadow-2xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <h2 className="font-bold text-lg mb-2 text-yellow-200">{pair.giver}</h2>
//             {qrCodes[pair.giver] ? (
//               <ScratchCard giver={pair.giver} qr={qrCodes[pair.giver]} />
//             ) : (
//               <div className="w-32 h-32 mx-auto bg-white/10 rounded-lg animate-pulse" />
//             )}
//             <p className="text-sm text-gray-200">
//               {revealed[pair.giver] ? "🎉 Partner Revealed!" : "Scratch to reveal 🎁"}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🎶 Footer */}
//       <p className="mt-12 text-sm text-gray-300">Made with ❤️ and 🎅 by Team Chrisma</p>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { motion } from "framer-motion";

export default function AssignPage() {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [qrCodes, setQrCodes] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  // 🎵 Specific audio for each member
  const soundMap: Record<string, string> = {
    Krishna: "/wow.mp3",
    Umapathi: "/umapathi.mp3",
    Saraswathi: "/sars.mp3",
    Hari: "/har.mp3",
    Malini: "/wow.mp3",
    AshwinS: "/wow.mp3",
    Stalin: "/stalin.mp3",
    Jency: "/wow.mp3",
    YuvaShree: "/wow.mp3",
    Kiruthika: "/wow.mp3",
    Rohit: "/wow.mp3",
    Revanth: "/wow.mp3",
    Nithish: "/wow.mp3",
    Karuniya: "/wow.mp3",
    Sharan: "/wow.mp3",
    Gunashree: "/gunashree.mp3",
    Saipavan: "/wow.mp3",
    Balaji: "/balaji.mp3",
    Sreenivasulu: "/wow.mp3",
    Akash: "/hari.mp3",
    Roslin: "/roslin.mp3",
    Monisha: "/monisha.mp3",
    Charu: "/wow.mp3",
    Sanjith: "/wow.mp3",
    SivaPrasad: "/wow.mp3",
    AshwinKumar: "/wow.mp3",
    MuthuKumaran: "/wow.mp3",
    SamratAshok: "/wow.mp3",
    Ilamaran: "/wow.mp3",
    SivaPratheesh: "/wow.mp3",
  };

  useEffect(() => {
    const generate = async () => {
      const res = await fetch("/api/assign");
      const data = await res.json();
      setAssignments(data);

      const qrMap: Record<string, string> = {};
      for (const pair of data) {
        const url = `https://eitbchris.netlify.app/surprise/${pair.giver}`;
        const qr = await QRCode.toDataURL(url);
        qrMap[pair.giver] = qr;
      }
      setQrCodes(qrMap);
    };
    generate();
  }, []);

  // ✅ ScratchCard component
  const ScratchCard = ({ giver, qr }: { giver: string; qr: string }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      if (revealed[giver]) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = 128;
      const h = 128;
      canvas.width = w;
      canvas.height = h;

      // Red overlay for Christmas 🎅
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "destination-out";

      let isDrawing = false;

      const scratch = (e: MouseEvent | TouchEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x =
          e instanceof MouseEvent ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
        const y =
          e instanceof MouseEvent ? e.clientY - rect.top : e.touches[0].clientY - rect.top;

        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
      };

      const handleStart = (e: MouseEvent | TouchEvent) => {
        isDrawing = true;
        scratch(e);
      };
      const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isDrawing) return;
        scratch(e);
      };
      const handleEnd = () => {
        isDrawing = false;

        // Check % cleared
        const pixels = ctx.getImageData(0, 0, w, h).data;
        let cleared = 0;
        for (let i = 3; i < pixels.length; i += 4) {
          if (pixels[i] < 128) cleared++;
        }
        const percent = (cleared / (w * h)) * 100;

        if (percent > 60) {
          // 🔊 Play that specific user's audio
          const audioFile = soundMap[giver] || "/wow1.mp3";
          const audio = new Audio(audioFile);
          audio.volume = 0.8;
          audio.play().catch((err) => console.warn("Audio play blocked:", err));

          // Mark as revealed permanently
          setRevealed((prev) => ({ ...prev, [giver]: true }));
        }
      };

      canvas.addEventListener("mousedown", handleStart);
      canvas.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      canvas.addEventListener("touchstart", handleStart);
      canvas.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);

      return () => {
        canvas.removeEventListener("mousedown", handleStart);
        canvas.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleEnd);
        canvas.removeEventListener("touchstart", handleStart);
        canvas.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", handleEnd);
      };
    }, [giver, revealed[giver]]);

    return (
      <div className="relative mx-auto my-3 w-32 h-32 rounded-lg shadow-lg border border-yellow-200 overflow-hidden bg-white/10">
        <img
          src={qr}
          alt="QR Code"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
            revealed[giver] ? "opacity-100" : "opacity-40"
          }`}
        />
        {!revealed[giver] && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 cursor-pointer"
            style={{
              borderRadius: "0.5rem",
              transition: "opacity 0.8s ease",
            }}
          />
        )}
      </div>
    );
  };

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
        🎄 Secret Santa EITB 🎅
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
              <ScratchCard giver={pair.giver} qr={qrCodes[pair.giver]} />
            ) : (
              <div className="w-32 h-32 mx-auto bg-white/10 rounded-lg animate-pulse" />
            )}
            <p className="text-sm text-gray-200">
              {revealed[pair.giver] ? "🎉 Partner Revealed!" : "Scratch to reveal 🎁"}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🎶 Footer */}
      <p className="mt-12 text-sm text-gray-300">Made with ❤️ and 🎅 by Team Chrisma</p>
    </div>
  );
}
