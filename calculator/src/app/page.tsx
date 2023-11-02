"use client"
import { Button } from '@/componests/Button';
import React from 'react';


export default function Home() {
  return (
    <main className="container">
      <div className="View">
        {/* Conteúdo da View */}
      </div>
      <div className="Digit">
        <div className="grid-container">
          {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, "c", "=", "/"].map((item) => (
            <Button key={item} text={item}/>
          ))}
        </div>
      </div>
    </main>
  );
}
