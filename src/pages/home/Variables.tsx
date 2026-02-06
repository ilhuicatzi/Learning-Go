import { unstable_ViewTransition as ViewTransition } from 'react'
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const codeVar = `package main

import "fmt"

func main() {
    var i, j int = 1, 2
    var c, x, python = true, false, "no!"
    
    fmt.Println(i, j, c, x, python)
}
`

const codeShort = `package main

import "fmt"

func main() {
    k := 3
    c, python, java := true, false, "no!"
    
    fmt.Println(k, c, python, java)
}
`

const codeConst = `package main

import "fmt"

const Pi = 3.14

func main() {
    const World = "Mundo"
    fmt.Println("Hola", World)
    fmt.Println("Feliz", Pi, "Day")
    
    const Truth = true
    fmt.Println("Go rules?", Truth)
}
`

function Variables() {
    return (
        <ViewTransition>
            <div className="max-w-2xl mx-auto p-6">
                <ViewTransition name="go-variables-label">
                    <h1 className="text-3xl font-bold mb-4">📦 Declaración de Variables en Go</h1>
                </ViewTransition>
                <Link href="/" className="flex items-center text-sm font-light hover:underline mb-8 px-3">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Regresar
                </Link>

                <h2 className="text-2xl font-semibold mt-6">🔹 Declaración con var</h2>
                <p className="mt-3">
                    La declaración de variables en Go utiliza la palabra clave <code>var</code>. Puede ser utilizada tanto dentro como fuera de las funciones.
                </p>

                <pre className="mt-4 dark:bg-gray-800 bg-gray-400 text-black dark:text-white p-2 rounded-md overflow-x-auto">
                    <code>{codeVar}</code>
                </pre>

                <h2 className="text-2xl font-semibold mt-8">🔹 Declaración Corta (:=)</h2>
                <p className="mt-3">
                    Dentro de una función, puedes omitir la palabra clave <code>var</code> utilizando la asignación corta <code>:=</code> con un tipo implícito.
                </p>
                <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <p className="text-sm">
                        <strong>Nota:</strong> Fuera de una función, cada sentencia debe comenzar con una palabra clave (<code>var</code>, <code>func</code>, etc.), por lo que el constructo <code>:=</code> no está disponible.
                    </p>
                </div>

                <pre className="mt-4 dark:bg-gray-800 bg-gray-400 text-black dark:text-white p-2 rounded-md overflow-x-auto">
                    <code>{codeShort}</code>
                </pre>

                <h2 className="text-2xl font-semibold mt-8">🔹 Constantes</h2>
                <p className="mt-3">
                    Las constantes se declaran como las variables, pero con la palabra clave <code>const</code>. Pueden ser caracteres, cadenas, booleanos o valores numéricos. Las constantes no pueden ser declaradas usando la sintaxis <code>:=</code>.
                </p>

                <pre className="mt-4 dark:bg-gray-800 bg-gray-400 text-black dark:text-white p-2 rounded-md overflow-x-auto">
                    <code>{codeConst}</code>
                </pre>

                <p className="mt-8">
                    Dominar la declaración de variables y constantes te ayudará a escribir código Go más limpio y eficiente.
                </p>
            </div>
        </ViewTransition>
    )
}

export default Variables
