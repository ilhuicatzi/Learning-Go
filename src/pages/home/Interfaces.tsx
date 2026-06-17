import Link from "next/link";
import { ArrowLeft, CheckCircle2, Code, Shield, Workflow } from "lucide-react";

const codeInterface = `package main

import "fmt"

// 1. Definición de la interfaz
type Animal interface {
    Sonido() string
}

// 2. Tipo Perro
type Perro struct {
    Nombre string
}

// Perro implementa la interfaz Animal IMPLÍCITAMENTE (sin palabras clave como "implements")
func (p Perro) Sonido() string {
    return "¡Guau!"
}

// 3. Tipo Gato
type Gato struct{}

func (g Gato) Sonido() string {
    return "¡Miau!"
}

// Función que acepta CUALQUIER tipo que implemente Animal
func hacerSonido(a Animal) {
    fmt.Println(a.Sonido())
}

func main() {
    perro := Perro{Nombre: "Firulais"}
    gato := Gato{}

    hacerSonido(perro) // Imprime: ¡Guau!
    hacerSonido(gato)  // Imprime: ¡Miau!
}`;

const codeEmptyInterface = `package main

import "fmt"

// La interfaz vacía 'any' (alias de interface{}) no tiene métodos.
// Por lo tanto, todos los tipos en Go la implementan.
func procesarDato(x any) {
    fmt.Printf("Valor: %v, Tipo: %T\\n", x, x)
}

func main() {
    procesarDato(42)
    procesarDato("Hola Gopher")
    procesarDato(3.1416)
}`;

const codeAssertions = `package main

import "fmt"

func chequearTipo(x any) {
    // 1. Type Assertion (Aserción de tipo)
    str, ok := x.(string)
    if ok {
        fmt.Println("Es un string de longitud:", len(str))
        return
    }

    // 2. Type Switch (Estructura switch por tipo)
    switch v := x.(type) {
    case int:
        fmt.Println("Es un entero multiplicado por 2:", v*2)
    case bool:
        fmt.Println("Es un booleano:", v)
    default:
        fmt.Println("Tipo desconocido")
    }
}

func main() {
    chequearTipo("hola") // Aserción exitosa
    chequearTipo(10)     // Entra en el caso int
    chequearTipo(true)   // Entra en el caso bool
}`;

function Interfaces() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                🧩 Interfaces en Go
            </h1>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar al inicio
            </Link>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Las interfaces en Go expresan polimorfismo de una forma única: son **implícitas**. No necesitas declarar explícitamente qué interfaces implementa tu tipo, lo que permite desacoplar componentes de forma natural y limpia.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Workflow className="w-6 h-6 mr-2 text-emerald-500" />
                    1. Interfaces e Implementación Implícita
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Una interfaz es simplemente un **conjunto de firmas de métodos**. Si un tipo define todos los métodos requeridos por una interfaz, entonces **implementa la interfaz automáticamente**.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo de Interfaz</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeInterface}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-purple-500" />
                    2. La Interfaz Vacía: <code>any</code>
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    En Go, <code>any</code> (introducido en Go 1.18 como alias de <code>interface&#123;&#125;</code>) representa una interfaz sin métodos. Como no exige nada, **cualquier valor de cualquier tipo es compatible con <code>any</code>**. Es el equivalente a <code>object</code> en otros lenguajes.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Uso de any</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeEmptyInterface}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-blue-500" />
                    3. Aserciones y Switch de Tipos
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Para recuperar el tipo concreto detrás de una variable de interfaz, Go ofrece dos mecanismos seguros: **Type Assertion** y **Type Switch**.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Type Assertion y Switch</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeAssertions}</code>
                    </pre>
                </div>
            </section>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-1">Filosofía de Go</h4>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        Un proverbio muy famoso en la comunidad de Go dice: <em>"Acepta interfaces, retorna estructuras concretas"</em>. Esto facilita mantener tu código altamente flexible y desacoplado sin complicar innecesariamente los flujos de retorno de funciones.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-between items-center gap-4">
                <Link
                    href="/go-pointers-structs"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Anterior
                </Link>
                <Link
                    href="/go-concurrency"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    Siguiente: Concurrencia
                </Link>
            </div>
        </div>
    );
}

export default Interfaces;
