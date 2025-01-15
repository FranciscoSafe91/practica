const QuienesSomos = () => {
  return (
    <>
      <header class="bg-blue-600 text-white py-4">
        <div class="container mx-auto text-center">
          <h1 class="text-3xl font-bold">Quiénes Somos</h1>
        </div>
      </header>

      <main class="container mx-auto py-8 px-4">
        <section class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-bold mb-4 text-blue-600">Nuestra Misión</h2>
          <p class="text-lg leading-relaxed mb-6">
            En <span class="font-semibold">Nuestra Empresa</span>, nos dedicamos
            a brindar soluciones innovadoras que impactan positivamente la vida
            de las personas. Nuestro compromiso es con la calidad, la
            sostenibilidad y la satisfacción de nuestros clientes.
          </p>

          <h2 class="text-2xl font-bold mb-4 text-blue-600">Nuestra Visión</h2>
          <p class="text-lg leading-relaxed mb-6">
            Ser líderes en el mercado global, destacándonos por nuestro
            compromiso con la excelencia y el desarrollo sostenible. Aspiramos a
            ser reconocidos por nuestra capacidad de adaptarnos a las
            necesidades de un mundo en constante evolución.
          </p>

          <h2 class="text-2xl font-bold mb-4 text-blue-600">
            Nuestros Valores
          </h2>
          <ul class="list-disc list-inside text-lg space-y-2">
            <li>Innovación</li>
            <li>Sostenibilidad</li>
            <li>Compromiso con la calidad</li>
            <li>Transparencia</li>
            <li>Trabajo en equipo</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default QuienesSomos;
