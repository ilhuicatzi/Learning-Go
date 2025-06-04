import { unstable_ViewTransition as ViewTransition } from 'react'
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Introduction = () => {
    return (
        <ViewTransition>
        <div className="max-w-2xl mx-auto p-6">
            <ViewTransition name="go-introduction-label">
            <h1 className="text-3xl font-bold mb-4">🔹 Introducción a Go</h1>
            </ViewTransition>
            <Link href="/" className="flex items-center text-sm font-light hover:underline mb-8 px-3">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar
            </Link>

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
        </div>
        </ViewTransition>
    );
};

export default Introduction;