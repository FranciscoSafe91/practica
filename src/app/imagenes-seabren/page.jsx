"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ImagenesGiratorias = () => {
  const itemsToAnimate = [
    {
      id: 1,
      alt: "Foto de Luffy arriba del barco",
      src: "11.jpg",
    },
    {
      id: 2,
      alt: "Foto de Luffy arriba del barco",
      src: "12.jpg",
    },
    {
      id: 3,
      alt: "Foto de Luffy arriba del barco",
      src: "13.jpg",
    },
    {
      id: 4,
      alt: "Foto de Luffy arriba del barco",
      src: "14.jpg",
    },
    {
      id: 5,
      alt: "Foto de Luffy arriba del barco",
      src: "15.jpg",
    },
    {
      id: 6,
      alt: "Foto de Luffy arriba del barco",
      src: "16.jpg",
    },
    {
      id: 7,
      alt: "Foto de Luffy arriba del barco",
      src: "17.jpg",
    },
    {
      id: 8,
      alt: "Foto de Luffy arriba del barco",
      src: "18.jpg",
    },
  ];
  const imagesRef = useRef([]);
  useEffect(() => {
    // Aplicar animaciones GSAP a las imágenes
    if (imagesRef.current.length > 0) {
      imagesRef.current.forEach((img, index) => {
        if (img) {
          gsap.to(
            img,
            // { rotation: 0 }, // Rotación inicial
            {
              // rotation: index % 2 === 0 ? -20 : 20, // Rotar hacia la izquierda o derecha
              rotation: 1400, // Rotar hacia la izquierda o derecha
              duration: 3,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: img, // Elemento que activa el efecto
                start: "top 100%", // Inicia cuando la imagen llega al 80% del viewport
                end: "top 30%", // Termina cuando llega al 30%
                // scrub: true, // Sincronizar con el scroll
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <>
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">
            Vamos a probar apertura imagenes
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-[40rem] px-4">
        <section className="flex flex-wrap max-w-[1200px] justify-center mx-auto overflow-hidden">
          {itemsToAnimate.map((item) => (
            <div key={item.id} className="w-1/2 p-4">
              <Image
                src={`/images/${item.src}`}
                width={1000}
                height={1000}
                alt={item.alt}
                ref={(el) => (imagesRef.current[item.id] = el)}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default ImagenesGiratorias;
