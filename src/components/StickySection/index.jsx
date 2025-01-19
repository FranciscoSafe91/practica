"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StickySection = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null); // agrego referencia a la imagen
  // const targetRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imgRef.current; // instancio ref de la imagen
    // const target = targetRef.current;

    // Configuración del efecto sticky
    gsap.set(image, {
      //set inicial de la imagen al crear la animacion
      alpha: 0, // Oculto la imagen
      //clipPath: "circle(0% at 50% 50%)",
      width: "10%",
      borderRadius: "100% 100% 0% 0%",
      top: "100%",
      left: "10%",
      right: "10%",
      alignItems: "center",
      visibility: "hidden",
      opacity: "1",
    });

    gsap.to(image, {
      // Modifico A LA imagen
      scrollTrigger: {
        trigger: container, //el trigger lo queremos en el contenedor de la imagen
        start: "top center",
        end: "center bottom",
        scrub: true, // Sincroniza animación con el scroll
        markers: true, // Activa los marcadores para depuración
      },
      position: "sticky", // cuando triggerea, posiciono la imagen pegada al container
      alpha: 1, //muestro la imagen
      //clipPath: "circle(100% at 50% 83%)", //desde un circulo al 100%
      width: "100%",
      borderRadius: "0% 0% 0% 0%",
      top: "0%",
      left: "0%",
      right: "0%",
      opacity: "1",
      visibility: "visible",
    });
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", background: "#f5f5f5" }}>
        <h1 className="font-bold text-4xl text-black text-center">
          Contenido inicial
        </h1>
      </div>

      <div
        ref={containerRef}
        style={{
          height: "200vh",
          background: "#a29bfe",
          position: "relative", //para que el sticky de la imagen tome el contenedor como su relativo
        }}
      >
        {
          <Image
            ref={imgRef}
            src="/images/14.jpg"
            alt="imagen"
            width={1920}
            height={1080}
            className="top-0" // y para que la imagen se pegue al top y no a la posición relativa
          />
        }
      </div>

      <div
        style={{
          height: "100vh",
          background: "#f5f5f5",
        }}
      >
        <h1 className="font-bold text-4xl text-black text-center">
          Contenido final
        </h1>
      </div>
    </div>
  );
};

export default StickySection;
