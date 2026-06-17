import Link from "next/link";
import { ArrowLeft, Package, Terminal, Code, HelpCircle } from "lucide-react";

const codeModInit = `module github.com/usuario/mi-app

go 1.22.0

// Aquí se listarán tus dependencias una vez agregadas`;

const codeGoGet = `$ go get github.com/google/uuid

# Output esperado:
go: downloading github.com/google/uuid v1.6.0
go: added github.com/google/uuid v1.6.0`;

const codeImport = `package main

import (
    "fmt"                  // Paquete estándar (Standard Library)
    "github.com/google/uuid" // Paquete de terceros (Descargado vía go get)
)

func main() {
    id := uuid.New()
    fmt.Printf("ID Autogenerado: %s\\n", id.String())
}`;

function Modules() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-slate-900 dark:text-slate-100">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                📦 Módulos y Dependencias
            </h1>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar al inicio
            </Link>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Para cualquier proyecto de software real, necesitarás estructurar tu código en módulos y utilizar paquetes de terceros. En Go, esto se gestiona mediante el sistema oficial de **Go Modules**.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Terminal className="w-6 h-6 mr-2 text-violet-500" />
                    1. Creación de un Módulo (<code>go mod init</code>)
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Un módulo es una colección de paquetes Go relacionados. Se inicializa en la raíz de tu proyecto ejecutando el comando <code>go mod init</code> seguido del nombre del módulo (generalmente una URL de repositorio para facilitar la descarga):
                </p>
                <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-sm border border-slate-700 shadow-md mb-6">
                    <div className="flex select-none text-slate-500 mb-2">
                        <span>$</span>
                        <span className="ml-2 text-green-400">go mod init github.com/usuario/mi-app</span>
                    </div>
                </div>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Esto crea el archivo <strong><code>go.mod</code></strong>, el cual rastrea las dependencias del proyecto:
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Contenido de go.mod</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeModInit}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Package className="w-6 h-6 mr-2 text-blue-500" />
                    2. Instalación de Dependencias Externas (<code>go get</code>)
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Para añadir una librería externa a tu proyecto, usas <code>go get</code>. Go descargará el paquete y actualizará tus archivos <code>go.mod</code> y <code>go.sum</code> (que guarda las sumas de verificación de seguridad de cada paquete).
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">Comando de Instalación</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-bash">{codeGoGet}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-green-500" />
                    3. Importación de Paquetes
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Una vez descargadas, puedes importar las dependencias directamente en tus archivos de código.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">main.go</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeImport}</code>
                    </pre>
                </div>
            </section>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl flex items-start">
                <HelpCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-1">Mantenimiento con <code>go mod tidy</code></h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        El comando <code>go mod tidy</code> es extremadamente útil. Analiza todo tu código fuente y automáticamente añade cualquier módulo importado que falte, y elimina los módulos descargados que ya no uses en tu código. ¡Úsalo con frecuencia!
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-between items-center gap-4">
                <Link
                    href="/go-concurrency"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Anterior
                </Link>
                <Link
                    href="/go-rest-api"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    Siguiente: API REST (CRUD)
                </Link>
            </div>
        </div>
    );
}

export default Modules;
