import Link from "next/link";
import { ArrowLeft, HelpCircle, Code, Cpu, Layers } from "lucide-react";

const codePointer = `package main

import "fmt"

func main() {
    x := 10
    p := &x // p guarda la dirección de memoria de x

    fmt.Println("Dirección (p):", p)   // Imprime algo como: 0xc0000b2008
    fmt.Println("Valor de x (*p):", *p) // Desreferencia el puntero (imprime 10)

    *p = 20 // Modifica el valor almacenado en la dirección apuntada
    fmt.Println("Nuevo valor de x:", x) // Imprime 20 (x cambió indirectamente!)
}`;

const codeStruct = `package main

import "fmt"

// Definición de una estructura
type Persona struct {
    Nombre string
    Edad   int
    Activo bool
}

func main() {
    // Crear una instancia
    p1 := Persona{
        Nombre: "Gopher",
        Edad:   15,
        Activo: true,
    }

    // Inicializar puntero a struct
    p2 := &Persona{Nombre: "María", Edad: 28, Activo: false}

    fmt.Println(p1.Nombre) // Acceso directo a campos
    fmt.Println(p2.Nombre) // Go desreferencia de forma implícita (p2.Nombre en vez de (*p2).Nombre)
}`;

const codeMethods = `package main

import "fmt"

type Rectangulo struct {
    Ancho, Alto float64
}

// Receptor de Valor: Copia el struct (no lo modifica)
func (r Rectangulo) Area() float64 {
    return r.Ancho * r.Alto
}

// Receptor de Puntero: Puede modificar la estructura original
func (r *Rectangulo) Escalar(factor float64) {
    r.Ancho *= factor
    r.Alto *= factor
}

func main() {
    r := Rectangulo{Ancho: 10, Alto: 5}
    
    fmt.Println("Área original:", r.Area()) // 50
    
    r.Escalar(2) // Modifica el ancho y alto a 20 y 10
    fmt.Println("Nuevo Ancho:", r.Ancho)   // 20
}`;

function PointersStructs() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                🧠 Punteros y Estructuras
            </h1>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar al inicio
            </Link>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Go combina la potencia del bajo nivel mediante punteros con la expresividad del alto nivel al modelar datos con estructuras (<code>struct</code>).
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Cpu className="w-6 h-6 mr-2 text-rose-500" />
                    1. ¿Qué son los Punteros?
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Un puntero almacena la <strong>dirección de memoria</strong> de otra variable. En Go usamos:
                </p>
                <ul className="list-disc list-inside mb-4 pl-4 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><code>&amp;</code> (operador "dirección de") para obtener el puntero de una variable.</li>
                    <li><code>*</code> (operador "valor en") para acceder o modificar el valor al que apunta.</li>
                </ul>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Punteros en Go</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codePointer}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Layers className="w-6 h-6 mr-2 text-blue-500" />
                    2. Estructuras (Structs)
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Las estructuras agrupan campos de datos relacionados para formar tipos personalizados. A diferencia de las clases tradicionales de la POO, los structs en Go son colecciones de propiedades simples.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Definición e Inicialización</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeStruct}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-green-500" />
                    3. Métodos y Receptores
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    En Go no hay clases, pero puedes declarar **métodos** agregando un parámetro especial a las funciones llamado <strong>receptor (receiver)</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Receptor de Valor</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Recibe una copia del struct. Es útil para cálculos donde no necesitas cambiar los valores originales de la estructura.
                        </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Receptor de Puntero</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Recibe la dirección de memoria del struct. Permite modificar campos directamente en el struct original y evita copiar structs grandes en memoria.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Receptores en Métodos</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeMethods}</code>
                    </pre>
                </div>
            </section>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-start">
                <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Dato Clave</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                        Go no tiene herencia clásica (como <code>extends</code>). En su lugar, fomenta la <strong>composición</strong> mediante campos anónimos incrustados (struct embedding) para reutilizar comportamiento.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-between items-center gap-4">
                <Link
                    href="/go-functions"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Anterior
                </Link>
                <Link
                    href="/go-interfaces"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    Siguiente: Interfaces
                </Link>
            </div>
        </div>
    );
}

export default PointersStructs;
