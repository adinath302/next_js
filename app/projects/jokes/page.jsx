'use client';

import { useEffect, useState } from "react";

const RandomJoke = () => {
    const [randomJoke, setRandomJoke] = useState({})
    const [showJoke, setShowJoke] = useState(true)

    const fetchRandomJoke = async () => {
        try {
            const res = await fetch('https://official-joke-api.appspot.com/random_joke')
            const data = await res.json();
            setRandomJoke(data)

        } catch (error) {
            throw new Error('Failed to fetch joke')
        }
    }

    useEffect(() => {
        const load = async () => {
            const res = await fetchRandomJoke()
            return res
        }
        load()
    }, [])

    return (
        <>
            <section className="relative flex flex-col items-center justify-center gap-8 p-10 bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-800 max-w-lg mx-auto mt-43 overflow-hidden">
                {/* Background Accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>

                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        RANDOM JOKE
                    </h1>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full opacity-50"></div>
                </div>

                <div className="w-full text-center px-4">
                    <p className="text-xl font-medium text-gray-200 leading-relaxed italic">
                        "{randomJoke.setup}"
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 w-full">
                    {showJoke
                        ?
                        <button
                            onClick={() => setShowJoke(false)}
                            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 cursor-pointer select-none"
                        >
                            <span className="relative z-10">Reveal Punchline</span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                        :
                        <div className="flex flex-col items-center justify-center gap-6 animate-in fade-in zoom-in duration-300">
                            <div className="p-6 bg-gray-800/50 border border-blue-500/30 rounded-3xl backdrop-blur-sm">
                                <p className="text-2xl font-bold text-blue-400 text-center uppercase tracking-wide">
                                    {randomJoke.punchline}
                                </p>
                            </div>
                            <button
                                onClick={() => setShowJoke(true)}
                                className="text-sm font-semibold text-gray-400 hover:text-red-400 transition-colors cursor-pointer select-none underline underline-offset-4"
                            >
                                Hide
                            </button>
                        </div>
                    }
                </div>

                <button
                    onClick={fetchRandomJoke}
                    className="mt-4 flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white border border-gray-700 rounded-xl transition-all duration-200 cursor-pointer select-none group"
                >
                    <span>Next Joke</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </section>

        </>
    )
}

export default RandomJoke;