// src/components/Intro.jsx
function Intro() {
    return (
        <section className="relative w-full h-[480px] flex items-center justify-center overflow-hidden scroll-mt-[72px]">
            {/* 배경 (그라데이션 + 이미지) */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(150, 75, 0,.8) 0%, rgba(140, 65, 0,.6) 90%), url('/images/masthead.jpg') 50% no-repeat",
                    backgroundSize: "cover",
                }}
            />
            {/* 실제 콘텐츠 */}
            <div className="relative z-10 text-center text-white flex flex-col h-1/2 justify-evenly">
                <h1 className="font-black-han text-4xl mb-2">정성주 Portfolio</h1>
                <p className="font-noto text-lg">안녕하세요</p>
                <p className="font-noto text-lg">꾸준함을 중요시하는 개발자 정성주입니다.</p>
                <a
                    href="#Profile"
                    className="bg-mocha-mousse text-white px-6 py-2 rounded-full shadow hover:bg-mocha-mousse/80 transition-colors"
                >
                    프로필
                </a>
                
            </div>
        </section>
    );
}

export default Intro;
