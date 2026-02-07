import { unstable_ViewTransition as ViewTransition } from 'react'
import Link from "next/link";
import { ArrowLeft, Box, Binary, RefreshCw } from "lucide-react";

const codeBasicTypes = `package main

import "fmt"

func main() {
    var a bool = true
    var b int = 1532
    var c float32 = 3.14
    var d string = "Hola desde Go"

    fmt.Printf("Tipo: %T Valor: %v\\n", a, a)
    fmt.Printf("Tipo: %T Valor: %v\\n", b, b)
    fmt.Printf("Tipo: %T Valor: %v\\n", c, c)
    fmt.Printf("Tipo: %T Valor: %v\\n", d, d)
}
`

const codeConversion = `func main() {
    var i int = 42
    var f float64 = float64(i) // Conversión explícita
    var u uint = uint(f)
    
    // Error: no se permite asignación implícita
    // var f2 float64 = i 
    
    fmt.Println(i, f, u)
}
`

function DataTypes() {
    return (
        <ViewTransition>
            <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
                <ViewTransition name="go-data-types-label">
                    <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        💾 Tipos de Datos
                    </h1>
                </ViewTransition>
                <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Regresar al inicio
                </Link>

                <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                    Go es un lenguaje fuertemente tipado. Esto significa que el compilador verifica que las operaciones sean válidas para los tipos de datos utilizados, previniendo errores comunes.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Binary className="w-6 h-6 mr-2 text-green-500" />
                        Tipos Numéricos
                    </h2>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase">
                                <tr>
                                    <th className="px-6 py-3 font-bold">Tipo</th>
                                    <th className="px-6 py-3 font-bold">Descripción</th>
                                    <th className="px-6 py-3 font-bold">Uso Común</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="px-6 py-4 font-mono text-blue-600 dark:text-blue-400">int</td>
                                    <td className="px-6 py-4">Depende de la arquitectura (32 o 64 bits).</td>
                                    <td className="px-6 py-4">Contadores, iteradores, índices.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-blue-600 dark:text-blue-400">int8, int16, int32, int64</td>
                                    <td className="px-6 py-4">Enteros con signo de tamaño fijo.</td>
                                    <td className="px-6 py-4">Optimización de memoria, protocolos binarios.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-blue-600 dark:text-blue-400">uint</td>
                                    <td className="px-6 py-4">Entero sin signo (solo positivos).</td>
                                    <td className="px-6 py-4">Tamaños, cantidades no negativas.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-purple-600 dark:text-purple-400">float32, float64</td>
                                    <td className="px-6 py-4">Punto flotante IEEE-754.</td>
                                    <td className="px-6 py-4">Cálculos científicos, gráficos.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">byte</td>
                                    <td className="px-6 py-4">Alias para <code>uint8</code>.</td>
                                    <td className="px-6 py-4">Datos binarios crudos, caracteres ASCII.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">rune</td>
                                    <td className="px-6 py-4">Alias para <code>int32</code>.</td>
                                    <td className="px-6 py-4">Caracteres Unicode individuales.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <Box className="w-6 h-6 mr-2 text-blue-500" />
                            Valores Cero (Zero Values)
                        </h2>
                        <p className="mb-4 text-slate-700 dark:text-slate-300">
                            Las variables no inicializadas toman un valor por defecto:
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center border border-slate-200 dark:border-slate-700">
                                <span className="block text-xs font-bold text-slate-500 uppercase">int / float</span>
                                <span className="font-mono text-lg text-blue-600 dark:text-blue-400">0</span>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center border border-slate-200 dark:border-slate-700">
                                <span className="block text-xs font-bold text-slate-500 uppercase">bool</span>
                                <span className="font-mono text-lg text-red-600 dark:text-red-400">false</span>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center border border-slate-200 dark:border-slate-700 col-span-2">
                                <span className="block text-xs font-bold text-slate-500 uppercase">string</span>
                                <span className="font-mono text-lg text-slate-600 dark:text-slate-400">"" (cadena vacía)</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <RefreshCw className="w-6 h-6 mr-2 text-indigo-500" />
                            Conversión de Tipos
                        </h2>
                        <p className="mb-4 text-slate-700 dark:text-slate-300">
                            En Go, <strong>no existe la conversión implícita</strong>. Si quieres asignar un <code>int</code> a un <code>float64</code>, debes hacerlo explícitamente.
                        </p>
                        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                            <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-xs">
                                <code className="language-go">{codeConversion}</code>
                            </pre>
                        </div>
                    </section>
                </div>

                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700 mb-8">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo Completo</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeBasicTypes}</code>
                    </pre>
                </div>

                <div className="mt-8 flex justify-end">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-lg font-bold transition-colors shadow-lg"
                    >
                        🏠 Volver al Inicio
                    </Link>
                </div>
            </div>
        </ViewTransition>
    )
}

export default DataTypes
