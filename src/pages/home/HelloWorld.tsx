import { unstable_ViewTransition as ViewTransition } from 'react'
import Link from "next/link";
import { ArrowLeft, Play, FileCode, Terminal, Package } from "lucide-react";

const code1 = `package main

import "fmt"

func main() {
    fmt.Println("Hola Mundo")
}
`

function HelloWorld() {
    return (
        <ViewTransition>
            <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
                <ViewTransition name="go-introduction-label">
                    <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        🎯 Tu primer programa en Go
                    </h1>
                </ViewTransition>
                <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Regresar al inicio
                </Link>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3">📦</span>
                        Paso 1: Crear el módulo
                    </h2>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                        Antes de escribir código, Go necesita saber que estás trabajando en un <strong>módulo</strong>. Un módulo es una colección de paquetes Go almacenados en un árbol de archivos con un archivo <code>go.mod</code> en su raíz.
                    </p>
                    <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-sm border border-slate-700 shadow-md">
                        <div className="flex select-none text-slate-500 mb-2">
                            <span>$</span>
                            <span className="ml-2 text-green-400">go mod init hola-mundo</span>
                        </div>
                        <div className="text-slate-400">
                            go: creating new go.mod: module hola-mundo
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg mr-3">📝</span>
                        Paso 2: Escribir el código
                    </h2>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                        Crea un archivo llamado <code>main.go</code> y escribe el siguiente código:
                    </p>

                    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                        <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-xs text-slate-400 font-mono">main.go</span>
                        </div>
                        <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                            <code className="language-go">{code1}</code>
                        </pre>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold flex items-center text-blue-600 dark:text-blue-400 mb-2">
                                <Package className="w-4 h-4 mr-2" /> package main
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Define que este archivo es un programa ejecutable, no una librería.</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold flex items-center text-blue-600 dark:text-blue-400 mb-2">
                                <Terminal className="w-4 h-4 mr-2" /> import "fmt"
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Importa el paquete <i>format</i> para entrada y salida de texto.</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold flex items-center text-blue-600 dark:text-blue-400 mb-2">
                                <FileCode className="w-4 h-4 mr-2" /> func main()
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">El punto de entrada donde comienza la ejecución del programa.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mr-3">▶️</span>
                        Paso 3: Ejecutar
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300">
                        Tienes dos formas de ejecutar tu programa:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4 text-green-600 dark:text-green-400">
                                <Play className="w-6 h-6 mr-2" />
                                <h3 className="font-bold">go run</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                Compila y ejecuta el programa en un solo paso. Ideal para desarrollo rápido.
                            </p>
                            <div className="bg-slate-900 text-slate-300 p-3 rounded-lg font-mono text-xs">
                                $ go run main.go<br />
                                Hola Mundo
                            </div>
                        </div>

                        <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                                <Box className="w-6 h-6 mr-2" />
                                <h3 className="font-bold">go build</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                Crea un ejecutable binario (.exe en Windows) que puedes distribuir.
                            </p>
                            <div className="bg-slate-900 text-slate-300 p-3 rounded-lg font-mono text-xs">
                                $ go build main.go<br />
                                $ ./main.exe<br />
                                Hola Mundo
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl flex items-center justify-between border border-slate-100 dark:border-slate-700">
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">¡Misión cumplida! 🎉</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Ya tienes tu entorno listo y tu primer programa corriendo.</p>
                    </div>
                    <Link
                        href="/go-variables"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                    >
                        Siguiente: Variables
                    </Link>
                </div>
            </div>
        </ViewTransition>
    )
}

function Box(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    )
}

export default HelloWorld