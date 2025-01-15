"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StickySection = () => {
  const containerRef = useRef(null);
  // const targetRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    // const target = targetRef.current;

    // Configuración del efecto sticky
    gsap.set(container, { y: 0 });
    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top center", // Sticky empieza cuando la sección toca el top
        //end: "bottom", // Duración del sticky
        pin: true, // Fija el contenedor
        //scrub: true, // Sincroniza animación con el scroll
        pinSpacing: true, // Evita espacio extra
        markers: true, // Activa los marcadores para depuración
        onEnter: () => {
          console.log("Entrando en Sticky Section");
        },
        onEnterBack: () => {
          console.log("Volviendo a entrar desde abajo");
        },
        onLeave: () => {
          console.log("Saliendo de Sticky Section");
        },
        onLeaveBack: () => {
          console.log("Saliendo hacia arriba");
        },
      },
    });
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", background: "#f5f5f5" }}>
        <h1>Contenido inicial</h1>
      </div>

      <div
        ref={containerRef}
        style={{
          //height: "100vh",
          background: "#a29bfe",
          //display: "flex",
          position: "relative",
          //overflow: "hidden",
        }}
      >
        {
          <Image
            src="/images/14.jpg"
            alt="imagen"
            width="1080"
            height="1920"
            /*layout="fill"
            objectFit="cover"
            objectPosition="center" */
          />
        }
      </div>

      <div
        style={{
          height: "100vh",
          background: "#f5f5f5",
        }}
      >
        <h1>Contenido final</h1>
      </div>
    </div>
  );
};

export default StickySection;
