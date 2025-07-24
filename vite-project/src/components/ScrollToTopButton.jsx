import { useEffect, useState } from "react";

function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerHeight = window.innerHeight * 0.6;
            setShowButton(scrollY > triggerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-md hover:bg-opacity-80 transition"
            >
                ⬆ 상단으로
            </button>
        )
    );
}

export default ScrollToTopButton;
