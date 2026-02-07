import Link from "next/link";
import { ArrowLeft, CheckCircle, Terminal, AlertTriangle, Download } from "lucide-react";


function Installation() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        ⚙️ Instalación de Go
      </h1>

      <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Regresar al inicio
      </Link>

      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Download className="w-5 h-5 mr-2 text-blue-500" />
            Paso 1: Descargar
          </h2>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Ve al sitio oficial y descarga el instalador para tu sistema operativo (Windows, macOS o Linux).
          </p>
          <a
            href="https://go.dev/dl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Ir a go.dev/dl
          </a>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
            Paso 2: Instalar
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            Ejecuta el archivo descargado y sigue las instrucciones del asistente.
            <br /><span className="text-sm text-slate-500 dark:text-slate-400 mt-2 block">(En Windows, por defecto se instala en <code>C:\Program Files\Go</code>)</span>
          </p>
        </div>

        <div className="bg-slate-900 text-slate-200 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-white">
            <Terminal className="w-5 h-5 mr-2 text-purple-400" />
            Paso 3: Verificar
          </h2>
          <p className="mb-4 text-slate-400 text-sm">
            Abre una nueva terminal (PowerShell o CMD en Windows) y ejecuta:
          </p>
          <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-slate-700">
            <div className="flex select-none text-slate-500 mb-2">
              <span>$</span>
              <span className="ml-2 text-green-400">go version</span>
            </div>
            <div className="text-slate-300">
              go version go1.22.0 windows/amd64
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
          Problemas Comunes
        </h2>

        <div className="space-y-4">
          <details className="group bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/50 rounded-lg p-4 open:pb-6">
            <summary className="font-semibold cursor-pointer text-orange-800 dark:text-orange-200 flex items-center">
              Error: `&quot;go&quot;` no se reconoce como un comando...
            </summary>
            <div className="mt-3 text-sm text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-orange-200 dark:border-orange-700">
              <p>Esto suele ocurrir si la variable de entorno <strong>PATH</strong> no se actualizó correctamente.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Reinicia tu terminal o tu computadora.</li>
                <li>Si persiste, agrega <code>C:\Program Files\Go\bin</code> a tu PATH manualmente en Windows.</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 p-6 rounded-xl flex items-center justify-between">
        <div>
          <h3 className="font-bold text-green-900 dark:text-green-100">¿Todo listo?</h3>
          <p className="text-green-800 dark:text-green-200 text-sm">Es hora de escribir tu primera línea de código.</p>
        </div>
        <Link
          href="/go-first-code"
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-sm"
        >
          Siguiente: Hola Mundo
        </Link>
      </div>
    </div>

  )
}

export default Installation