import Link from "next/link";
import { ArrowLeft, Play, Box, Layers, Code, Terminal } from "lucide-react";

const codeBasic = `func sumar(a int, b int) int {
    return a + b
}

func main() {
    resultado := sumar(3, 4)
    fmt.Println(resultado) // 7
}`

const codeMultipleReturns = `func dividir(a, b int) (int, int) {
    cociente := a / b
    resto := a % b
    return cociente, resto
}

func main() {
    c, r := dividir(10, 3)
    fmt.Printf("Cociente: %d, Resto: %d\n", c, r)
}`

const codeVariadic = `func sumarTodo(numeros ...int) int {
    total := 0
    for _, num := range numeros {
        total += num
    }
    return total
}

func main() {
    fmt.Println(sumarTodo(1, 2, 3))       // 6
    fmt.Println(sumarTodo(10, 20, 30, 40)) // 100
}`

const codeAnonymous = `func main() {
    // Función anónima ejecutada inmediatamente
    func() {
        fmt.Println("Hola desde anónima")
    }()

    // Asignada a variable
    saludo := func(nombre string) {
        fmt.Printf("Hola %s\n", nombre)
    }
    saludo("Gopher")
}`

function Functions() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                🧩 Funciones
            </h1>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar al inicio
            </Link>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Las funciones son bloques de código reutilizables. En Go, son ciudadanos de primera clase: pueden ser asignadas a variables, pasadas como argumentos y retornadas desde otras funciones.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-blue-500" />
                    Sintaxis Básica
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Se definen con la palabra clave <code>func</code>. Los tipos de los parámetros van después del nombre, y el tipo de retorno va al final.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo Básico</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeBasic}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Layers className="w-6 h-6 mr-2 text-purple-500" />
                    Múltiples Retornos
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Una característica poderosa de Go es que las funciones pueden retornar múltiples valores. Esto es muy común para devolver un resultado y un error.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo Múltiples Retornos</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeMultipleReturns}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Box className="w-6 h-6 mr-2 text-orange-500" />
                    Funciones Variádicas
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Aceptan un número variable de argumentos. El tipo del parámetro se precede con <code>...</code>.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo Variádico</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeVariadic}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Terminal className="w-6 h-6 mr-2 text-green-500" />
                    Funciones Anónimas y Closures
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Puedes definir funciones sin nombre dentro de otras funciones. Son útiles para definir lógica local o callbacks.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo Anónima</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeAnonymous}</code>
                    </pre>
                </div>
            </section>

            <div className="mt-8 flex justify-end">
                <Link
                    href="/"
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-lg font-bold transition-colors shadow-lg"
                >
                    🏠 Volver al Inicio
                </Link>
            </div>

        </div>
    )
}

export default Functions
