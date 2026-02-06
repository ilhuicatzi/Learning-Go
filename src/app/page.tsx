
import Link from "next/link"
import { LogosGopher } from "@/components/icons/Golang"
import { unstable_ViewTransition as ViewTransition } from 'react'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <section>
        <h1 className="flex items-center justify-center text-center ">
          <span>
            <LogosGopher className="inline-block w-16 h-16 ml-2" />
          </span>
          <span className="text-4xl font-bold">Aprendiendo Go</span>
        </h1>
        <p className="mt-4">
          Bienvenido a tu viaje de aprendizaje de Go. Aquí encontrarás recursos y
          tutoriales para comenzar.
        </p>
      </section>
      <section className="mt-10">
        <ul className="text-lg space-y-2">
          <li>
            <ViewTransition name="go-introduction-label">
              <Link href="/go-introduction">🔹 Introducción a Go</Link>
            </ViewTransition>
          </li>
          <li>
            <ViewTransition name="go-installation-label">
              <Link href="/go-install">⚙️ Instalación de Go</Link>
            </ViewTransition>
          </li>
          <li>
            <ViewTransition name="go-first-code-label">
              <Link href="/go-first-code">🎯 Tu primer programa en Go</Link>
            </ViewTransition>
          </li>
          <li>
            <ViewTransition name="go-variables-label">
              <Link href="/go-variables">📦 Variables</Link>
            </ViewTransition>
          </li>
          <li>
            <ViewTransition name="go-data-types-label">
              <Link href="/go-data-types">💾 Tipos de Datos</Link>
            </ViewTransition>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage