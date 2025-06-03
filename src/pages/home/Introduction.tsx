import React from "react";

const Introduction = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">🔹 Introducción a Go</h1>

            <h2 className="text-2xl font-semibold mt-6">📜 Contexto</h2>
            <p className="mt-2">
                Go, también conocido como <strong>Golang</strong>, es un lenguaje de programación creado por <strong>Google</strong> en <strong>2007</strong> y lanzado oficialmente en <strong>2009</strong>. Fue diseñado por
                Robert Griesemer, Rob Pike y Ken Thompson con el objetivo de mejorar el desarrollo
                de software para sistemas distribuidos y altamente concurrentes.
            </p>
            <p className="mt-2">
                Inspirado en lenguajes como <strong>C</strong> y <strong>Python</strong>, Go combina <strong>simplicidad</strong> con <strong>alto rendimiento</strong>
                y una gestión eficiente de la <strong>concurrencia</strong> mediante <strong>goroutines</strong>. Hoy en día, es ampliamente
                utilizado en infraestructuras backend, API REST y microservicios por empresas como
                Netflix, Uber y Cloudflare.
            </p>

            <h2 className="text-2xl font-semibold mt-6">⚙️ Instalación de Go</h2>
            <p className="mt-2">
                Para comenzar con Go, sigue estos pasos:
            </p>
            <ol className="list-decimal list-inside mt-3 space-y-2">
                <li>
                    Descarga la versión más reciente desde{" "}
                    <a
                        href="https://go.dev/dl/"
                        className="text-blue-500 hover:underline"
                    >
                        el sitio oficial de Go
                    </a>.
                </li>
                <li>Instala Go siguiendo las instrucciones del asistente.</li>
                <li>Verifica la instalación con el siguiente comando en la terminal:</li>
            </ol>

            <div className="bg-gray-100 p-4 mt-3 rounded">
                <code className="text-gray-800">$ go version</code>
            </div>

            <p className="mt-2">
                Si ves una versión de Go en la salida, ¡todo está listo! Ahora puedes crear tu primer
                archivo Go y ejecutar un programa simple.
            </p>

            <h2 className="text-2xl font-semibold mt-6">🎯 Próximos pasos</h2>
            <p className="mt-2">
                En la siguiente sección, exploraremos la estructura de un programa en Go y cómo
                escribir tu primer servidor básico. ¡Vamos avanzando paso a paso! 🚀
            </p>
        </div>
    );
};

export default Introduction;