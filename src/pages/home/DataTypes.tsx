import { unstable_ViewTransition as ViewTransition } from 'react'
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const codeBasicTypes = `package main

import "fmt"

func main() {
    var a bool = true
    var b int = 5
    var c float32 = 3.14
    var d string = "Hola"

    fmt.Println(a, b, c, d)
}
`

const codeZeroValues = `package main

import "fmt"

func main() {
    var i int
    var f float64
    var b bool
    var s string
    
    // Imprime: 0 0 false ""
    fmt.Printf("%v %v %v %q\\n", i, f, b, s)
}
`

function DataTypes() {
    return (
        <ViewTransition>
            <div className="max-w-2xl mx-auto p-6">
                <ViewTransition name="go-data-types-label">
                    <h1 className="text-3xl font-bold mb-4">💾 Tipos de Datos en Go</h1>
                </ViewTransition>
                <Link href="/" className="flex items-center text-sm font-light hover:underline mb-8 px-3">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Regresar
                </Link>

                <h2 className="text-2xl font-semibold mt-6">🔹 Tipos Básicos</h2>
                <p className="mt-3">
                    Go es un lenguaje de tipado estático, lo que significa que el tipo de una variable se conoce en tiempo de compilación. Los tipos básicos en Go incluyen:
                </p>

                <ul className="list-disc list-inside mt-3 space-y-1">
                    <li><strong>bool</strong>: Representa un valor booleano (true o false).</li>
                    <li><strong>string</strong>: Representa una cadena de caracteres.</li>
                    <li><strong>int</strong>: Entero con signo (depende de la arquitectura, 32 o 64 bits).</li>
                    <li><strong>uint</strong>: Entero sin signo.</li>
                    <li><strong>byte</strong>: Alias para uint8.</li>
                    <li><strong>rune</strong>: Alias para int32, representa un punto de código Unicode.</li>
                    <li><strong>float32, float64</strong>: Números de punto flotante IEEE-754.</li>
                    <li><strong>complex64, complex128</strong>: Números complejos.</li>
                </ul>

                <pre className="mt-4 dark:bg-gray-800 bg-gray-400 text-black dark:text-white p-2 rounded-md overflow-x-auto">
                    <code>{codeBasicTypes}</code>
                </pre>

                <h2 className="text-2xl font-semibold mt-8">🔹 Valores Cero (Zero Values)</h2>
                <p className="mt-3">
                    En Go, las variables declaradas sin un valor inicial explícito se inicializan con su "valor cero":
                </p>

                <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>0 para tipos numéricos.</li>
                    <li>false para el tipo booleano.</li>
                    <li>"" (cadena vacía) para cadenas.</li>
                    <li>nil para punteros, funciones, interfaces, slices, canales y mapas.</li>
                </ul>

                <pre className="mt-4 dark:bg-gray-800 bg-gray-400 text-black dark:text-white p-2 rounded-md overflow-x-auto">
                    <code>{codeZeroValues}</code>
                </pre>

                <p className="mt-8">
                    Conocer los tipos de datos es fundamental para aprovechar la seguridad y eficiencia que ofrece Go.
                </p>

                <div className="mt-8 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <p className="text-sm">
                        <strong>Tip:</strong> Go no permite operaciones entre diferentes tipos sin una conversión explícita. Por ejemplo, no puedes sumar un <code>int</code> y un <code>float64</code> directamente.
                    </p>
                </div>
            </div>
        </ViewTransition>
    )
}

export default DataTypes
