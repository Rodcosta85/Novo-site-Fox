"use client"
import Link from "next/link"
import { useFox } from "@/hooks/useFox"
import LogoAmarela from "@/public/images/logo-amarelo-fox.png"

const Header = () => {
    const { toggleHamb, setToggleHamb } = useFox()

    return (
        <section
            id='header'
            className='absolute top-0 left-0 z-50 flex justify-center items-center w-full'
        >
            <div className="flex justify-between items-center w-full md:w-240 lg:w-276 py-6 px-5 md:px-8 lg:px-12">
                
                {/* container preto */}
                <div className={`relative flex flex-col items-center justify-between
                    w-full pt-4 px-8 bg-fox-black 
                    ${toggleHamb ? "rounded-[30px] md:rounded-[60px] pb-8" : "rounded-[60px] pb-4"}
                    transition-all duration-300 ease-in-out`}
                >
                    {/* logo + nav + treinus/TP */}
                    <div className={`flex justify-between items-center w-full`}>
                        {/* logo + nav */}
                        <div className="flex items-center gap-8">
                            {/* logo */}
                            <Link href="/">
                                <img src={LogoAmarela.src} alt="Logo da Equipe Fox" className="w-25 h-12.5" />
                            </Link>

                            {/* navegação desktop/tablet */}
                            <nav className="hidden md:block">
                                <ul className="flex items-center gap-6">
                                    <a
                                        href="/quem-somos"
                                        className="text-white font-inter hover:text-fox-yellow transition-all duration-250 ease-in-out"
                                    >
                                        QUEM SOMOS
                                    </a>
                                    <a
                                        href="/home/#atividades"
                                        className="text-white font-inter hover:text-fox-yellow transition-all duration-250 ease-in-out"
                                    >
                                        ATIVIDADES
                                    </a>
                                    <a
                                        href="/contato"
                                        className="text-white font-inter hover:text-fox-yellow transition-all duration-250 ease-in-out"
                                    >
                                        CONTATO
                                    </a>
                                </ul>
                            </nav>
                        </div>

                        {/* treinus + TP */}
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href=""
                                className="text-fox-yellow px-4 py-2 border border-fox-yellow rounded-full hover:bg-fox-yellow hover:text-fox-black transition-all duration-250 ease-in-out"
                            >
                                TREINUS
                            </a>
                            <a
                                href=""
                                className="text-fox-yellow px-4 py-2 border border-fox-yellow rounded-full hover:bg-fox-yellow hover:text-fox-black transition-all duration-250 ease-in-out"
                            >
                                TRAINING PEAKS
                            </a>
                        </div>

                        {/* menu hamburger */}
                        <button
                            onClick={setToggleHamb}
                            className="flex md:hidden flex-col justify-center gap-1.5 cursor-pointer"
                        >
                            <div className={`w-8 h-0.5 bg-white transition-all duration-200 ease-in-out ${toggleHamb && "transform -rotate-45 translate-y-2"}`} />
                            <div className={`w-8 h-0.5 bg-white transition-all duration-200 ease-in-out ${toggleHamb ? "opacity-0" : "opacity-100"}`} />
                            <div className={`w-8 h-0.5 bg-white transition-all duration-200 ease-in-out ${toggleHamb && "transform rotate-45 -translate-y-2"} `} />
                        </button>
                    </div>

                    {/* dropdown do mobile */}
                    <div className={`flex md:hidden flex-col items-center justify-between 
                        w-full
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${toggleHamb ? "max-h-80 opacity-100 pt-8 mt-4 border-t border-t-fox-light-gray/30" : "max-h-0 opacity-0 pt-0 pb-0"}`}
                    >
                        <nav className="w-full">
                            <ul className="flex flex-col items-center gap-8">
                                <a
                                    href="/quem-somos"
                                    className="text-white font-inter hover:text-fox-yellow 
                                    transition-all duration-250 ease-in-out"
                                >
                                    QUEM SOMOS
                                </a>
                                <a
                                    href="/home/#atividades"
                                    className="text-white font-inter hover:text-fox-yellow transition-all duration-250 ease-in-out"
                                >
                                    ATIVIDADES
                                </a>
                                <a
                                    href="/contato"
                                    className="text-white font-inter hover:text-fox-yellow transition-all duration-250 ease-in-out"
                                >
                                    CONTATO
                                </a>
                                <a
                                    href="/contato"
                                    className="text-white font-inter hover:text-fox-yellow transition-all duration-250 ease-in-out"
                                >
                                    TREINUS
                                </a>
                                <a
                                    href="/contato"
                                    className="text-white font-inter hover:text-fox-yellow transition-all duration-250 ease-in-out"
                                >
                                    TRAINING PEAKS
                                </a>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header