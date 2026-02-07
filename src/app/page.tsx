import Link from "next/link"
import { LogosGopher } from "@/components/icons/Golang"
import { BookOpen, Terminal, Code, Box, Database, ArrowRight } from "lucide-react"

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 animate-bounce-slow">
            <LogosGopher className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Domina Go desde Cero
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Una guía interactiva y moderna para aprender el lenguaje de programación de Google.
            Simplicidad, concurrencia y rendimiento en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/go-introduction"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Comenzar Ahora <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://go.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
            >
              Documentación Oficial
            </a>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Grid de Temas */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
          Ruta de Aprendizaje
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <TopicCard
            href="/go-introduction"
            icon={<BookOpen className="w-8 h-8 text-blue-500" />}
            title="Introducción"
            description="Descubre la historia, filosofía y por qué Go es el lenguaje del futuro para la nube."
          />

          <TopicCard
            href="/go-install"
            icon={<Terminal className="w-8 h-8 text-slate-700 dark:text-slate-300" />}
            title="Instalación"
            description="Configura tu entorno de desarrollo en Windows, macOS o Linux paso a paso."
          />

          <TopicCard
            href="/go-first-code"
            icon={<Code className="w-8 h-8 text-green-500" />}
            title="Hola Mundo"
            description="Escribe, compila y ejecuta tu primer programa. Entiende la estructura básica."
          />

          <TopicCard
            href="/go-variables"
            icon={<Box className="w-8 h-8 text-orange-500" />}
            title="Variables"
            description="Aprende sobre var, const y el operador :=. Domina el scope y shadowing."
          />

          <TopicCard
            href="/go-data-types"
            icon={<Database className="w-8 h-8 text-purple-500" />}
            title="Tipos de Datos"
            description="Explora tipos básicos, enteros, flotantes, strings y sus valores cero."
          />

          {/* Coming Soon Card */}
          <div className="group relative p-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 opacity-75">
            <div className="mb-4 opacity-50">
              <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-500">Próximamente...</h3>
            <p className="text-slate-500 text-sm">Estructuras de control, funciones y más.</p>
          </div>

        </div>
      </section>

      {/* Footer simple */}
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>Hecho con ❤️ para la comunidad de Go.</p>
      </footer>

    </div>
  )
}

function TopicCard({ href, icon, title, description }: { href: string, icon: React.ReactNode, title: string, description: string }) {
  return (
    <Link
      href={href}
      className="group relative block p-6 h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
        <ArrowRight className="w-5 h-5 text-blue-500" />
      </div>
    </Link>
  )
}

export default HomePage