import { unstable_ViewTransition as ViewTransition } from 'react'
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const code1 = `package main

import "fmt"

func main() {
    fmt.Println("Hola Mundo")
}
`

function HelloWorld() {
    return (
        <ViewTransition>
            <div className="max-w-2xl mx-auto p-6">
                <ViewTransition name="go-introduction-label">
                    <h1 className="text-3xl font-bold mb-4">🎯 Tu primer programa en Go</h1>
                </ViewTransition>
                <Link href="/" className="flex items-center text-sm font-light hover:underline mb-8 px-3">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Regresar
                </Link>
                <h2 className="text-2xl font-semibold mt-6">🔹 Hola Mundo</h2>
                <p className="mt-2">
                    El programa "Hola Mundo" es una tradición en la programación que sirve como primer contacto con un nuevo lenguaje. Pero antes de escribir el código, es necesario la creación de nuestro primer modulo en Go.
                </p>

                <p className="mt-3">
                    Para crear un modulo en Go, se debe ejecutar el comando <code>go mod init &lt;nombre_del_modulo&gt;</code> en la terminal. Por ejemplo, si queremos crear un modulo llamado "hola_mundo", se debe ejecutar el comando <code>go mod init hola_mundo</code>.
                </p>

                <p className="mt-3">
                    Una vez creado el modulo, se puede crear un archivo con extensión main.go y escribir el siguiente código:
                </p>

                <pre className="mt-3 dark:bg-gray-800 bg-gray-400  text-black dark:text-white p-2 rounded-md">
                    <code>
                        {code1}
                    </code>
                </pre>

                <p className="mt-3">
                    Para ejecutar el programa, se debe ejecutar el comando <code>go run main.go</code> en la terminal.
                </p>

                <p className="mt-3">
                    Ahora, analicemos el código:
                </p>

                <p className="mt-3">
                    <code className="dark:bg-gray-800 bg-gray-400  text-black dark:text-white p-2 rounded-md">package main</code>: Indica que el archivo pertenece al paquete principal, lo que lo convierte en un programa ejecutable.
                </p>

                <p className="mt-3">
                    <code className="dark:bg-gray-800 bg-gray-400  text-black dark:text-white p-2 rounded-md">import "fmt"</code>: Importa el paquete "fmt" (format), que contiene funciones para entrada y salida de datos, como la función <code>Println</code>.
                </p>

                <p className="mt-3">
                    <code className="dark:bg-gray-800 bg-gray-400  text-black dark:text-white p-2 rounded-md">func main()</code>: Es la función principal del programa, desde donde comienza la ejecución.
                </p>

                <p className="mt-3">
                    <code className="dark:bg-gray-800 bg-gray-400  text-black dark:text-white p-2 rounded-md">fmt.Println("Hola Mundo")</code>: Imprime el texto "Hola Mundo" en la consola.
                </p>

                <p className="mt-8">
                    ¡Felicidades! Has escrito y ejecutado tu primer programa en Go.
                </p>

                <p className="mt-3">
                    Ahora, vamos a explorar cómo declarar variables en Go.
                </p>

            </div>
        </ViewTransition>
    )
}

export default HelloWorld