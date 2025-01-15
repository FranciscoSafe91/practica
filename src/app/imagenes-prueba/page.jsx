"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ImagenesPrueba = () => {
  const imagesRef = useRef([]);
  useEffect(() => {
    // Asegurarte de que todas las imágenes están cargadas en el DOM
    if (imagesRef.current.length > 0) {
      imagesRef.current.forEach((img, index) => {
        if (img) {
          gsap.to(
            img,
            //{ scale: 1 }, // Estado inicial
            {
              scale: 1.2, // Zoom progresivo
              scrollTrigger: {
                trigger: img, // Activa el efecto cuando la imagen entra al viewport
                start: "top 100%", // Inicia cuando el top de la imagen llega al 80% de la ventana
                end: "top 50%", // Termina cuando el top de la imagen llega al 30% de la ventana
                scrub: true, // Sincroniza el zoom con el scroll
              },
            }
          );
        }
      });
    }
  }, []);
  return (
    <>
      <header class="bg-blue-600 text-white py-4">
        <div class="container mx-auto text-center">
          <h1 class="text-3xl font-bold">Vamos a probar Zoom</h1>
        </div>
      </header>

      <main class="container mx-auto py-8 px-4">
        <section class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-bold mb-4 text-blue-600">LUFFY</h2>
          <p class="text-lg leading-relaxed mb-6">
            <Image
              src="/images/11.png"
              width={1000}
              height={1000}
              alt="Picture of the author"
              ref={(el) => (imagesRef.current[0] = el)}
            />
          </p>
          <h2 class="text-2xl font-bold mb-4 text-blue-600">LUFFY</h2>
          <p class="text-lg leading-relaxed mb-6">
            <Image
              src="/images/12.jpeg"
              width={1000}
              height={1000}
              alt="Picture of the author"
              ref={(el) => (imagesRef.current[1] = el)}
            />
          </p>
          <h2 class="text-2xl font-bold mb-4 text-blue-600">LUFFY</h2>
          <p class="text-lg leading-relaxed mb-6">
            <Image
              src="/images/13.jpg"
              width={1000}
              height={1000}
              alt="Picture of the author"
              ref={(el) => (imagesRef.current[2] = el)}
            />
          </p>
          <h2 class="text-2xl font-bold mb-4 text-blue-600">LUFFY</h2>
          <p class="text-lg leading-relaxed mb-6">
            <Image
              src="/images/14.jpg"
              width={1000}
              height={1000}
              alt="Picture of the author"
              ref={(el) => (imagesRef.current[3] = el)}
            />
          </p>
        </section>
      </main>
    </>
  );
};

export default ImagenesPrueba;
