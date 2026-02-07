import Link from "next/link";
import { ArrowLeft, Zap, ShieldCheck, Box } from "lucide-react";

const Introduction = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        🔹 Introducción a Go
      </h1>

      <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Regresar al inicio
      </Link>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3">📜</span>
          Contexto Histórico
        </h2>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Go, también conocido como <strong>Golang</strong>, es un lenguaje de programación de código abierto creado en <strong>Google</strong> en <strong>2007</strong> y lanzado oficialmente en <strong>2009</strong>.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Fue diseñado por luminarias de la computación: <strong>Robert Griesemer</strong>, <strong>Rob Pike</strong> y <strong>Ken Thompson</strong> (creador de Unix y B). Su objetivo era resolver problemas comunes en el desarrollo de software moderno: lentitud en la compilación, dependencias incontrolables y dificultad para escribir código concurrente eficiente.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg mr-3">🚀</span>
          ¿Por qué aprender Go?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Rendimiento</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Compila a código máquina nativo, ofreciendo un rendimiento comparable a C++.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <Box className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Simplicidad</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Una sintaxis limpia y minimalista. Solo 25 palabras clave para memorizar.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Concurrencia</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Goroutines y Channels hacen que la programación concurrente sea fácil y eficiente.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg mr-3">🏢</span>
          ¿Quién usa Go?
        </h2>
        <p className="mb-6 text-slate-700 dark:text-slate-300">
          Go se ha convertido en el lenguaje estándar para infraestructura en la nube y microservicios.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Google', 'Netflix', 'Uber', 'Dropbox', 'Twitch', 'SoundCloud', 'Docker', 'Kubernetes'].map((company) => (
            <div key={company} className="flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
              {company}
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl border border-blue-100 dark:border-slate-700">
        <h3 className="font-bold text-lg mb-2 text-blue-900 dark:text-white">💡 Dato Curioso</h3>
        <p className="text-slate-700 dark:text-slate-300">
          La mascota de Go es una tuza (gopher) diseñada por Renée French. Se ha convertido en un ícono reconocible en todo el mundo del desarrollo.
        </p>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href="/go-install"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
        >
          Siguiente: Instalación
        </Link>
      </div>
    </div>
  );
};

export default Introduction;