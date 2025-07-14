import {
    Code2,
    Layout,
    Server,
    Cloud,
    Database
} from "./IconFactory";

function Archive(){
    return (
        <section id="Archive" className="bg-black shadow py-8 scroll-mt-[72px]">
            <div className="flex items-center justify-center mb-8 text-white">
                <span className="font-black-han text-4xl mb-2  align-middle pl-2"> 📦 Archive</span>
            </div>
            <div className="grid grid-cols-1 gap-4 bg-white rounded-xl p-8 shadow-[1rem_1rem_1rem_0_rgba(68,68,68,.2)] md:grid-cols-2 gap-8">
                {/* Notion */}
                <a  
                    href="https://amplified-kingfisher-7fa.notion.site/22ae5543db6a80b89a9fe968c5adc04a?source=copy_link"
                    target="_blank"
                    rel="noopener"
                    className="block rounded-xl bg-gray-50 shadow-[0_0_1rem_0_rgba(254,249,194,.2)] transition-all duration-300 hover:scale-105 hover:bg-gray-300 cursor-pointer"
                >
                    <div className="p-8">
                        <img 
                            src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"
                            alt="Notion"
                        />
                        <p className="text-l font-black-han text-xl my-2">노션 주소</p>
                        <p className="text-base font-noto text-xl my-2">공부 등 개발 관련 저장소[이력서 보러가기]</p>
                    </div>
                </a>
                {/* Github */}
                <a
                    href="https://github.com/holyrootx"
                    target="_blank"
                    rel="noopener"
                    className="block rounded-xl bg-gray-50 shadow-[0_0_1rem_0_rgba(254,249,194,.2)] transition-all duration-300 hover:scale-105 hover:bg-gray-300 cursor-pointer"
                >
                    <div className="p-8">
                        <img
                            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                            alt="GitHub"
                        />
                        <p className="text-l font-black-han text-xl my-2">깃허브 주소</p>
                        <p className="text-base font-noto text-xl my-2">소스 코드 저장소</p>
                    </div>
                </a>
                {/* Blog */}
                <a
                    href="https://your-tistory-blog.tistory.com/"
                    target="_blank"
                    rel="noopener"
                    className="block rounded-xl bg-gray-50 shadow-[0_0_1rem_0_rgba(254,249,194,.2)] transition-all duration-300 hover:scale-105 hover:bg-gray-300 cursor-pointer"
                >
                    <div className="p-8">
                        <img
                            src="https://img.shields.io/badge/Tistory-000000?style=for-the-badge&logo=tistory&logoColor=white"
                            alt="Tistory Blog"
                        />
                        <p className="text-l font-black-han text-xl my-2">티스토리 블로그</p>
                        <p className="text-base font-noto text-xl my-2">개인 개발/기록 아카이브</p>
                    </div>
                </a>
            </div>
            

            
        </section>
    );
}


export default Archive;