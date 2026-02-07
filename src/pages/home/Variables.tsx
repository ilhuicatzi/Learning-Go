import Link from "next/link";
import { ArrowLeft, AlertTriangle, Lightbulb, Box } from "lucide-react";

const codeVar = `package main

import "fmt"

func main() {
    // Declaración explicita
    var i int = 10
    
    // Inferencia de tipo
    var j = 20
    
    // Declaración múltiple
    var c, python, java = true, false, "no!"
    
    fmt.Println(i, j, c, python, java)
}
`

const codeShort = `func main() {
    // Declaración corta (solo dentro de funciones)
    k := 3
    
    // Múltiples variables
    nombre, edad := "Juan", 30
    
    fmt.Println(nombre, edad)
}
`

const codeShadowing = `func main() {
    x := 10
    if x > 5 {
        x := 5 // Nueva variable 'x' que oculta a la externa
        fmt.Println(x) // Imprime 5
    }
    fmt.Println(x) // Imprime 10 (la original no cambió)
}
`

function Variables() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        📦 Variables y Constantes
      </h1>
      <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Regresar al inicio
      </Link>

      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
        Go es un lenguaje de tipado estático, pero su sintaxis está diseñada para ser concisa y expresiva, permitiendo inferir tipos automáticamente en muchos casos.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3 shadow-sm">🔹</span>
            Declaración Estándar
          </h2>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Usa la palabra clave <code>var</code>. Es útil cuando quieres declarar variables sin inicializarlas inmediatamente o fuera de funciones.
          </p>
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
            <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-xs">
              <code className="language-go">{codeVar}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mr-3 shadow-sm">⚡</span>
            Declaración Corta
          </h2>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Dentro de funciones, el operador <code>:=</code> declara e inicializa variables inferiendo su tipo.
          </p>
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
            <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-xs">
              <code className="language-go">{codeShort}</code>
            </pre>
          </div>
          <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Nota:</strong> <code>:=</code> solo funciona dentro de funciones. A nivel de paquete debes usar <code>var</code>.
            </p>
          </div>
        </section>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Box className="w-6 h-6 mr-3 text-purple-500" />
          Ocultamiento de Variables (Shadowing)
        </h2>
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Es posible declarar una variable con el mismo nombre en un bloque interno, lo cual `&quot;oculta&quot;` a la variable externa. Ten cuidado con esto para evitar errores lógicos.
          </p>
          <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 mb-4">
            <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
              <code className="language-go">{codeShadowing}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-6 rounded-2xl">
        <h3 className="font-bold text-lg mb-4 text-indigo-900 dark:text-indigo-100 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-indigo-500" />
          Buenas Prácticas de Nombres
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">camelCase</span>
            <span className="text-slate-700 dark:text-slate-300">Usa <code>camelCase</code> para variables locales (ej. <code>usuarioActivo</code>).</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">PascalCase</span>
            <span className="text-slate-700 dark:text-slate-300">Usa <code>PascalCase</code> si quieres que la variable o función sea <strong>exportada</strong> (visible desde otros paquetes).</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">Cortos</span>
            <span className="text-slate-700 dark:text-slate-300">Go prefiere nombres cortos y concisos como <code>i</code> para índices o <code>ctx</code> para contexto.</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href="/go-data-types"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
        >
          Siguiente: Tipos de Datos
        </Link>
      </div>
    </div>
  )
}

export default Variables
