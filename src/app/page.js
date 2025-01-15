import Image from 'next/image'

export default function Home() {

  return (
    <>  <header class="bg-blue-600 text-white py-4">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold">Bienvenidos a Nuestra Empresa</h1>
      <p class="mt-2 text-lg">Soluciones innovadoras para un futuro sostenible</p>
    </div>
  </header>

  <main class="container mx-auto py-8 px-4">
    <section class="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4 text-blue-600">¿Qué hacemos?</h2>
      <p class="text-lg leading-relaxed">
        Nos dedicamos a ofrecer soluciones innovadoras para mejorar la vida de las personas y contribuir a un mundo más sostenible.
        Nuestro equipo trabaja día a día para superar las expectativas de nuestros clientes y aportar valor a la sociedad.
      </p>
    </section>

    <section class="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4 text-blue-600">Nuestros Servicios</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-50 shadow-sm rounded-lg p-4 text-center">
          <h3 class="font-bold text-xl text-blue-500 mb-2">Consultoría</h3>
          <p class="text-sm">Asesoramiento personalizado para mejorar tus procesos.</p>
        </div>
        <div class="bg-gray-50 shadow-sm rounded-lg p-4 text-center">
          <h3 class="font-bold text-xl text-blue-500 mb-2">Desarrollo</h3>
          <p class="text-sm">Creación de soluciones tecnológicas a medida.</p>
        </div>
        <div class="bg-gray-50 shadow-sm rounded-lg p-4 text-center">
          <h3 class="font-bold text-xl text-blue-500 mb-2">Soporte</h3>
          <p class="text-sm">Asistencia técnica y mantenimiento continuo.</p>
        </div>
      </div>
    </section>

    <section class="bg-blue-100 shadow-md rounded-lg p-6 text-center">
      <h2 class="text-2xl font-bold mb-4 text-blue-600">Únete a Nosotros</h2>
      <p class="text-lg mb-6">
        Sé parte de nuestra misión. Descubre cómo puedes colaborar con nosotros para construir un futuro mejor.
      </p>
      <a href="quienes-somos.html" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Conoce Más</a>
    </section>
  </main>
</>
  );
}
