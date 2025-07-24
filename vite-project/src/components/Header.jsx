import { useState, useEffect } from "react";

// 아이콘
const MenuIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
);
const CloseIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/>
    </svg>
);

function Header() {
    const HEADER_HEIGHT = 72;
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > HEADER_HEIGHT);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 메뉴명 배열
    const navItems = ["Profile", "Skills", "Archive", "Projects"];

    // body scroll lock (슬라이드 열릴 때)
    useEffect(() => {
        if (menuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [menuOpen]);

    return (
        <header
            className={`
                fixed top-0 w-full z-50 transition-colors duration-300
                ${scrolled ? "bg-white text-black" : "bg-transparent"}
            `}
            style={{
                boxShadow: scrolled ? "0 2px 8px hsla(0,0%,80%,.8)" : "none"
            }}
        >
            <div className="w-full max-w-[71.25rem] mx-auto flex justify-between h-[4.5rem] py-5 px-6 items-center">
                <span
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`font-black-han text-2xl 
                        ${scrolled ? "text-black hover:text-orange-500 cursor-pointer" : "text-gray-300 hover:text-white cursor-pointer"}`}
                >
                    정성주 Portfolio
                </span> 
                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex">
                    {navItems.map((text) => (
                        <a
                            key={text}
                            href={`#${text}`}
                            className={`
                                font-noto text-2xl px-2 transition-colors duration-200
                                ${scrolled 
                                    ? "text-black hover:text-orange-500"
                                    : "text-gray-300 hover:text-white"
                                }
                            `}
                        >
                            {text}
                        </a>
                    ))}
                </nav>
                {/* 모바일 햄버거 */}
                <button
                    className="flex md:hidden items-center justify-center w-10 h-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
                >
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            {/* 모바일 메뉴: 위에서 아래로 슬라이드 */}
            <div
                className={`
                    fixed left-0 top-0 w-full z-50 md:hidden transition-transform duration-300
                    bg-white
                    ${menuOpen ? "translate-y-0" : "-translate-y-full"}
                `}
                style={{
                    height: "50vh",
                    boxShadow: menuOpen ? "0 4px 24px hsla(24, 86%, 70%, 0.13)" : "none"
                }}
            >
                {/* X(닫기) 버튼 - 우측 상단 */}
                <button
                    className="absolute top-6 right-6 text-3xl"
                    onClick={() => setMenuOpen(false)}
                    aria-label="메뉴 닫기"
                >
                    <CloseIcon />
                </button>
                {/* 메뉴 리스트 */}
                <div className="flex flex-col justify-center items-center h-full gap-2">
                    {navItems.map((text) => (
                        <a
                            key={text}
                            href={`#${text}`}
                            className={`
                                w-full
                                text-center
                                py-4
                                font-noto text-2xl
                                text-black
                                transition-colors duration-200
                                rounded
                                hover:bg-orange-50
                                hover:text-orange-500
                                active:bg-orange-100
                            `}
                            onClick={() => setMenuOpen(false)}
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
