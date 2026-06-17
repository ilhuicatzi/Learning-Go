"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Globe, Send, Terminal, Play, CheckCircle2, Trash2, Plus, Code } from "lucide-react";

const codeServer = `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "strconv"
)

type Tarea struct {
    ID     int    \`json:"id"\`
    Titulo string \`json:"titulo"\`
    Hecho  bool   \`json:"hecho"\`
}

var tareas = []Tarea{
    {ID: 1, Titulo: "Aprender Go", Hecho: true},
    {ID: 2, Titulo: "Crear una API REST", Hecho: false},
}
var proximoID = 3

func main() {
    // Go 1.22+ introduce rutas avanzadas nativas en net/http
    http.HandleFunc("GET /tareas", obtenerTareas)
    http.HandleFunc("POST /tareas", crearTarea)
    http.HandleFunc("PUT /tareas/{id}", actualizarTarea)
    http.HandleFunc("DELETE /tareas/{id}", eliminarTarea)

    fmt.Println("Servidor iniciado en http://localhost:8080 🚀")
    http.ListenAndServe(":8080", nil)
}`;

const codeHandlers = `// Handler para obtener todas las tareas
func obtenerTareas(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(tareas)
}

// Handler para crear una nueva tarea
func crearTarea(w http.ResponseWriter, r *http.Request) {
    var nueva Tarea
    if err := json.NewDecoder(r.Body).Decode(&nueva); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    nueva.ID = proximoID
    proximoID++
    tareas = append(tareas, nueva)

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated) // HTTP 201
    json.NewEncoder(w).Encode(nueva)
}

// Handler para actualizar una tarea existente
func actualizarTarea(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id") // Lee el parámetro {id} de la ruta
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "ID inválido", http.StatusBadRequest)
        return
    }

    var actualizada Tarea
    if err := json.NewDecoder(r.Body).Decode(&actualizada); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    for i, t := range tareas {
        if t.ID == id {
            tareas[i].Titulo = actualizada.Titulo
            tareas[i].Hecho = actualizada.Hecho
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(tareas[i])
            return
        }
    }
    http.Error(w, "Tarea no encontrada", http.StatusNotFound) // HTTP 404
}

// Handler para eliminar una tarea
func eliminarTarea(w http.ResponseWriter, r *http.Request) {
    idStr := r.PathValue("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "ID inválido", http.StatusBadRequest)
        return
    }

    for i, t := range tareas {
        if t.ID == id {
            tareas = append(tareas[:i], tareas[i+1:]...)
            w.WriteHeader(http.StatusNoContent) // HTTP 204 (sin contenido)
            return
        }
    }
    http.Error(w, "Tarea no encontrada", http.StatusNotFound)
}`;

interface TaskSim {
    id: number;
    titulo: string;
    hecho: boolean;
}

function RestApi() {
    // Simulator State
    const [simTareas, setSimTareas] = useState<TaskSim[]>([
        { id: 1, titulo: "Aprender Go", hecho: true },
        { id: 2, titulo: "Crear una API REST", hecho: false },
    ]);
    const [newTitle, setNewTitle] = useState("");
    const [lastRequest, setLastRequest] = useState({
        method: "GET",
        url: "/tareas",
        status: "200 OK",
        payload: "N/A",
        response: JSON.stringify([
            { id: 1, titulo: "Aprender Go", hecho: true },
            { id: 2, titulo: "Crear una API REST", hecho: false },
        ], null, 2)
    });

    const triggerGet = (updatedTareas = simTareas) => {
        setLastRequest({
            method: "GET",
            url: "/tareas",
            status: "200 OK",
            payload: "N/A",
            response: JSON.stringify(updatedTareas, null, 2)
        });
    };

    const triggerPost = () => {
        if (!newTitle.trim()) return;
        const newId = simTareas.length > 0 ? Math.max(...simTareas.map(t => t.id)) + 1 : 1;
        const newTask = { id: newId, titulo: newTitle, hecho: false };
        const updated = [...simTareas, newTask];
        setSimTareas(updated);
        setNewTitle("");
        setLastRequest({
            method: "POST",
            url: "/tareas",
            status: "201 Created",
            payload: JSON.stringify({ titulo: newTitle, hecho: false }, null, 2),
            response: JSON.stringify(newTask, null, 2)
        });
    };

    const triggerToggle = (id: number) => {
        const target = simTareas.find(t => t.id === id);
        if (!target) return;
        const updatedTask = { ...target, hecho: !target.hecho };
        const updated = simTareas.map(t => t.id === id ? updatedTask : t);
        setSimTareas(updated);
        setLastRequest({
            method: "PUT",
            url: `/tareas/${id}`,
            status: "200 OK",
            payload: JSON.stringify({ titulo: target.titulo, hecho: !target.hecho }, null, 2),
            response: JSON.stringify(updatedTask, null, 2)
        });
    };

    const triggerDelete = (id: number) => {
        const updated = simTareas.filter(t => t.id !== id);
        setSimTareas(updated);
        setLastRequest({
            method: "DELETE",
            url: `/tareas/${id}`,
            status: "204 No Content",
            payload: "N/A",
            response: "/* No Content - Resource Deleted Successfully */"
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 text-slate-900 dark:text-slate-100">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                🌐 API REST con CRUD
            </h1>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Regresar al inicio
            </Link>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                ¡Has llegado a la meta final! En esta lección aprenderemos a implementar una **API REST completa con operaciones CRUD** (Crear, Leer, Actualizar y Eliminar) usando únicamente la librería estándar de Go y el enrutador mejorado nativo de Go 1.22+.
            </p>

            {/* Estructura del Servidor */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-cyan-500" />
                    1. Configuración de Rutas en Go 1.22+
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Desde la versión 1.22, el enrutador estándar de Go (<code>net/http</code>) soporta de forma nativa especificar el método HTTP y comodines en las rutas (ej. <code>&#123;id&#125;</code>) sin recurrir a frameworks externos como Gin o Fiber.
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">main.go</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeServer}</code>
                    </pre>
                </div>
            </section>

            {/* Handlers de Operaciones CRUD */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-blue-500" />
                    2. Serialización y Lógica de Operaciones (Handlers)
                </h2>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                    Utilizaremos el paquete <code>encoding/json</code> para decodificar cuerpos de peticiones JSON entrantes (<code>json.NewDecoder(r.Body).Decode()</code>) y codificar estructuras Go a respuestas JSON de salida (<code>json.NewEncoder(w).Encode()</code>).
                </p>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono uppercase">handlers.go</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-slate-100 font-mono text-sm">
                        <code className="language-go">{codeHandlers}</code>
                    </pre>
                </div>
            </section>

            {/* Interactive REST API Simulator */}
            <section className="mb-12 border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 rounded-3xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-2 flex items-center text-blue-600 dark:text-blue-400">
                    <Play className="w-6 h-6 mr-2" />
                    Simulador Interactivo de la API REST
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                    Utiliza el panel a continuación para simular peticiones HTTP hacia la API de Go implementada en el código anterior. Verás cómo interactúan los métodos HTTP, los JSON payloads y los códigos de respuesta en tiempo real.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: Interactive Client Mockup */}
                    <div className="lg:col-span-5 flex flex-col gap-4 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
                        <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wide">Vista de Cliente / UI</h4>
                        
                        {/* GET Trigger */}
                        <button
                            onClick={() => triggerGet()}
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold transition-all border border-blue-100 dark:border-blue-900/30 shadow-sm"
                        >
                            <Send className="w-4 h-4" /> Ejecutar GET /tareas
                        </button>

                        {/* POST Form */}
                        <div className="border border-slate-200 dark:border-slate-800 p-3 rounded-xl bg-white dark:bg-slate-900">
                            <label className="block text-xs font-bold text-slate-500 mb-2">Crear nueva Tarea (POST /tareas)</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Ej. Escribir pruebas unitarias"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="flex-1 bg-slate-50 dark:bg-slate-800 text-sm px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <button
                                    onClick={triggerPost}
                                    className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* In-Memory Database List */}
                        <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1">
                            <label className="block text-xs font-bold text-slate-500 mb-1">Base de Datos (En Memoria)</label>
                            {simTareas.length === 0 ? (
                                <p className="text-xs text-slate-400 italic py-2">No hay tareas en el servidor.</p>
                            ) : (
                                simTareas.map(tarea => (
                                    <div key={tarea.id} className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={tarea.hecho}
                                                onChange={() => triggerToggle(tarea.id)}
                                                className="w-4 h-4 rounded text-blue-600 cursor-pointer"
                                            />
                                            <span className={`text-sm ${tarea.hecho ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-800 dark:text-slate-200"}`}>
                                                {tarea.titulo}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => triggerDelete(tarea.id)}
                                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right: Network Request / Output Box */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                        <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wide flex items-center">
                            <Terminal className="w-4 h-4 mr-2" /> Monitor de Tráfico HTTP
                        </h4>

                        {/* Request Summary bar */}
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono">
                            <span className={`px-2 py-0.5 rounded font-bold ${
                                lastRequest.method === "GET" ? "bg-blue-900 text-blue-300" :
                                lastRequest.method === "POST" ? "bg-green-900 text-green-300" :
                                lastRequest.method === "PUT" ? "bg-amber-900 text-amber-300" :
                                "bg-red-900 text-red-300"
                            }`}>
                                {lastRequest.method}
                            </span>
                            <span className="text-slate-300">{lastRequest.url}</span>
                            <span className="ml-auto text-slate-400 font-bold">Status:</span>
                            <span className={`font-bold ${
                                lastRequest.status.startsWith("2") ? "text-green-400" : "text-red-400"
                            }`}>
                                {lastRequest.status}
                            </span>
                        </div>

                        {/* Request Body Payload */}
                        <div className="flex-1 flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-slate-500 mb-1">Request Body (JSON enviado)</span>
                            <pre className="bg-slate-900 text-slate-300 p-3 rounded-lg font-mono text-xs overflow-x-auto border border-slate-800 max-h-[80px]">
                                {lastRequest.payload}
                            </pre>
                        </div>

                        {/* Response Body Payload */}
                        <div className="flex-1 flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-slate-500 mb-1">Response Body (JSON de Go recibido)</span>
                            <pre className="bg-slate-900 text-slate-300 p-3 rounded-lg font-mono text-xs overflow-x-auto border border-slate-800 max-h-[160px] overflow-y-auto">
                                {lastRequest.response}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl flex items-start">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-1">¡Felicitaciones! 🎉</h4>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300">
                        Has completado la ruta desde lo más básico hasta una API REST CRUD funcional. Has aprendido tipos, variables, estructuras de control, funciones, punteros, estructuras, interfaces, concurrencia, módulos y el funcionamiento del protocolo HTTP en Go. ¡Estás listo para desarrollar aplicaciones web de producción en Go!
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-between items-center gap-4">
                <Link
                    href="/go-modules"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Anterior
                </Link>
                <Link
                    href="/"
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-lg font-bold transition-colors shadow-lg"
                >
                    🏠 Volver al Inicio
                </Link>
            </div>
        </div>
    );
}

export default RestApi;
