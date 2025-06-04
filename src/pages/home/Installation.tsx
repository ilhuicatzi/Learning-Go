import { unstable_ViewTransition as ViewTransition } from 'react'
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


function Installation() {
  return (
     <ViewTransition>
        <div className="max-w-2xl mx-auto p-6">
            <ViewTransition name="go-installation-label">
            <h1 className="text-3xl font-bold mb-4">⚙️ Instalación de Go</h1>
            </ViewTransition>
            <Link href="/" className="flex items-center text-sm font-light hover:underline mb-8 px-3">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar
            </Link>

            <p className="mt-2">
                Para comenzar con Go, sigue estos pasos:
            </p>
            <ol className="list-decimal list-inside mt-3 space-y-2">
                <li>
                    Descarga la versión más reciente desde{" "}
                    <a
                        href="https://go.dev/dl/"
                        className="text-blue-500 hover:underline"
                    >
                        el sitio oficial de Go
                    </a>.
                </li>
                <li>Instala Go siguiendo las instrucciones del asistente.</li>
                <li>Verifica la instalación con el siguiente comando en la terminal:</li>
            </ol>

            <div className="bg-zinc-200 dark:bg-zinc-700 p-4 mt-3 rounded">
                <code className="text-zinc-800 dark:text-zinc-400">$ go version</code>
            </div>

            <p className="mt-2">
                Si ves una versión de Go en la salida, ¡todo está listo! Ahora puedes crear tu primer
                archivo Go y ejecutar un programa simple.
            </p>

            <h2 className="text-2xl font-semibold mt-6">🎯 Próximos pasos</h2>
            <p className="mt-2">
                En la siguiente sección, exploraremos la estructura de un programa en Go y cómo
                escribir tu primer servidor básico. ¡Vamos avanzando paso a paso! 🚀
            </p>
        </div>
        </ViewTransition>

  )
}

export default Installation