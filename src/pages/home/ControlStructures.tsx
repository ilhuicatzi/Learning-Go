import Link from "next/link";
import { ArrowLeft, GitBranch, Repeat, AlertCircle } from "lucide-react";

const codeIf = `func main() {
    x := 10
    
    if x > 5 {
        fmt.Println("x es mayor que 5")
    } else {
        fmt.Println("x es menor o igual a 5")
    }

    // If con inicialización
    if y := getValue(); y > 0 {
        fmt.Println("y es positivo:", y)
    }
}`

const codeSwitch = `func main() {
    dia := "Lunes"

    switch dia {
    case "Lunes":
        fmt.Println("Inicio de semana")
    case "Viernes":
        fmt.Println("Fin de semana cerca")
    default:
        fmt.Println("Día normal")
    }
    
    // Switch sin condición (como if-else limpio)
    t := time.Now().Hour()
    switch {
    case t < 12:
        fmt.Println("Buenos días")
    case t < 17:
        fmt.Println("Buenas tardes")
    default:
        fmt.Println("Buenas noches")
    }
}`

const codeFor = `func main() {
    // Estilo C (inicio; condición; post)
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }

    // Estilo While (solo condición)
    sum := 1
    for sum < 100 {
        sum += sum
    }

    // Infinito
    for {
        // bucle eterno
        break // romper bucle
    }
    
    // Range (para iterar arrays, slices, maps)
    nums := []int{2, 4, 6}
    for i, v := range nums {
        fmt.Printf("Índice: %d, Valor: %d\n", i, v)
    }
}`

function ControlStructures() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                🔀 Estructuras de Control
            </h1>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar al inicio
            </Link>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Go se caracteriza por tener pocas estructuras de control, pero muy versátiles. No tiene <code>while</code> ni <code>do-while</code>, solo <code>for</code>.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <GitBranch className="w-6 h-6 mr-2 text-blue-500" />
                    Condicional If / Else
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Similar a otros lenguajes, pero los paréntesis <code>( )</code> envolviendo la condición no son necesarios. Las llaves <code>{`{ }`}</code> son obligatorias.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo If</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeIf}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <GitBranch className="w-6 h-6 mr-2 text-purple-500" />
                    Switch
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Más flexible que en C/Java. No necesita <code>break</code> al final de cada caso (es el comportamiento por defecto). Puedes usar <code>switch</code> sin expresión para cadenas <code>if-else</code> más limpias.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo Switch</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeSwitch}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Repeat className="w-6 h-6 mr-2 text-green-500" />
                    Bucle For
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    El único bucle en Go. Puede comportarse como un <code>for</code> tradicional, un <code>while</code>, o un bucle infinito.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo For</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeFor}</code>
                    </pre>
                </div>
            </section>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-1">Dato Importante</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Go introduce <code>defer</code>, una sentencia para posponer la ejecución de una función hasta que la función que la contiene retorne. Es ideal para limpieza de recursos (cerrar archivos, desbloquear mutex).
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <Link
                    href="/go-functions"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    Siguiente: Funciones
                </Link>
            </div>

        </div>
    )
}

export default ControlStructures
