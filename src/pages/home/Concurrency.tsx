import Link from "next/link";
import { ArrowLeft, Zap, MessageSquare, AlertCircle, RefreshCw, Code } from "lucide-react";

const codeGoroutines = `package main

import (
    "fmt"
    "time"
)

func mostrarMensaje(texto string) {
    for i := 0; i < 3; i++ {
        fmt.Println(texto)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // Inicia una goroutine concurrente
    go mostrarMensaje("Concurrente ⚡")

    // Corre en la goroutine principal (main)
    mostrarMensaje("Síncrono 📄")
    
    // Nota: Si el programa principal termina, las goroutines se abortan inmediatamente.
}`;

const codeChannels = `package main

import "fmt"

func enviarDato(c chan string) {
    c <- "Mensaje desde otra goroutine 💬" // Envía un valor al canal
}

func main() {
    // Crear un canal
    canal := make(chan string)

    // Lanzar goroutine
    go enviarDato(canal)

    // Recibir valor del canal (bloquea hasta recibirlo)
    mensaje := <-canal
    fmt.Println(mensaje)
}`;

const codeWaitGroup = `package main

import (
    "fmt"
    "sync"
    "time"
)

func realizarTarea(id int, wg *sync.WaitGroup) {
    defer wg.Done() // Disminuye el contador en 1 al salir

    fmt.Printf("Tarea %d iniciada\\n", id)
    time.Sleep(500 * time.Millisecond)
    fmt.Printf("Tarea %d completada\\n", id)
}

func main() {
    var wg sync.WaitGroup // Inicializa el WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1) // Aumenta el contador de tareas pendientes
        go realizarTarea(i, &wg)
    }

    wg.Wait() // Bloquea el hilo principal hasta que el contador llegue a 0
    fmt.Println("¡Todas las tareas concurrentes finalizaron!")
}`;

const codeSelect = `package main

import (
    "fmt"
    "time"
)

func main() {
    c1 := make(chan string)
    c2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        c1 <- "Respuesta rápida"
    }()

    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "Respuesta lenta"
    }()

    for i := 0; i < 2; i++ {
        // select permite esperar múltiples operaciones de canales
        select {
        case msg1 := <-c1:
            fmt.Println("Recibido c1:", msg1)
        case msg2 := <-c2:
            fmt.Println("Recibido c2:", msg2)
        }
    }
}`;

function Concurrency() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                ⚡ Concurrencia en Go
            </h1>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar al inicio
            </Link>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Go tiene soporte nativo para la concurrencia a través de las <strong>Goroutines</strong> y los <strong>Canales</strong>, implementando el modelo matemático de Procesos Secuenciales Comunicantes (CSP).
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-amber-500" />
                    1. Goroutines
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Una goroutine es un hilo ligero administrado por el runtime de Go. Consumen muy poca memoria (apenas unos 2 KB al crearse) lo que permite correr cientos de miles simultáneamente. Solo antepón la palabra clave <code>go</code>.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Uso de Goroutines</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeGoroutines}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2 text-blue-500" />
                    2. Canales (Channels)
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Los canales son los conductos a través de los cuales las goroutines se comunican y sincronizan de forma segura sin recurrir a locks globales o memoria compartida.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Uso de Canales</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeChannels}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <RefreshCw className="w-6 h-6 mr-2 text-green-500" />
                    3. WaitGroups (Sincronización)
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Para esperar que varias goroutines terminen antes de continuar, Go nos provee el paquete <code>sync</code> y su estructura <code>WaitGroup</code>.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo WaitGroup</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeWaitGroup}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-purple-500" />
                    4. Multiplexación con <code>select</code>
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    La instrucción <code>select</code> permite que una goroutine espere en múltiples operaciones de comunicación de canales. Se bloquea hasta que uno de sus casos esté listo para ejecutarse.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Ejemplo Select</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeSelect}</code>
                    </pre>
                </div>
            </section>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-1">Filosofía de Concurrencia</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        En Go rige el lema: <em>"No te comuniques compartiendo memoria; en su lugar, comparte memoria comunicándote"</em>. Evita el uso de variables globales modificadas concurrentemente y prefiere siempre la transferencia segura de datos vía canales.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-between items-center gap-4">
                <Link
                    href="/go-interfaces"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Anterior
                </Link>
                <Link
                    href="/go-modules"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    Siguiente: Módulos
                </Link>
            </div>
        </div>
    );
}

export default Concurrency;
