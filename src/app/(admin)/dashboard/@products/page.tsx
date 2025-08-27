"use client";

import { useState } from "react";

export default function AdminProductPage() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const response = await fetch('/api/revalidate?tag=products&secret=Arifin2025', {
            method: 'POST'
        });
        if (!response.ok) {
            setStatus("Error Revalidating");
        } else {
            const data = await response.json();
            console.log(data);
            if (data.revalidate) {
                setStatus("Revalidate Success");
            }
        }

    }
    return (
        <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex flex-col items-center justify-center gap-4 ">
            <h1>
                {status}
            </h1>
            <button className="
      bg-amber-500
      hover:bg-amber-600
      text-amber-900
      font-bold
      py-2
      px-4
      border
      border-amber-700
      rounded
      cursor-pointer

      " onClick={() => revalidate()}>Revalidate Products</button>
        </div>
    );
}
