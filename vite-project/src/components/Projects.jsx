import { useState } from "react";
import ProjectModal from "./ProjectModal";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleClose = () => {
        setSelectedProject(null);
        setShowModal(false);
    };

    const projectList = [
        {
            title: "문진을 통한 위험도 분석",
            description: "건강 위험도를 분석하고 전문가를 매칭하는 시스템입니다.",
            stack: "Spring Boot · JPA · Firebase · EC2 · Tailwind CSS · QueryDSL",
            features: [
                "JWT 인증 + Firebase 연동",
                "OAuth2 로그인(Google/Kakao/Naver)",
                "QueryDSL 기반 검색/페이징",
                "관리자 승인 시스템",
                "전역 예외 처리 및 공통 API 설계"
            ],
            github: "https://github.com/seonoh-k/charti",
            url : "https://charti.kr",
            canSee : false,
        },
        {
            title: "BirdClown",
            description: "파티 서비스 홍보 웹사이트",
            stack: "AWS S3 SDK · JPA · Spring Boot · Spring Security · Swagger UI · Thumbnailator ",
            features: [
                "관리자 인증 및 보안",
                "앨범 및 사진 관리",
                "클라우드 스토리지 연동",
                "자동 이미지 리사이징",
                "API 명세 자동화 (Swagger)",
            ],
            github: "https://github.com/seonoh-k/BirdClown",
            url : "https://birdclown.kr",
            canSee : true,
        }
    ];

    return (
        <section id="Projects" className="w-full shadow py-8 bg-white scroll-mt-[72px]">
            <div className="flex justify-center mb-8 ">
                <span className="font-black-han text-4xl mb-2 text-black align-middle pl-2">🗓️ Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-xl shadow-[1rem_1rem_1rem_0_rgba(68,68,68,.2)]">
                {projectList.map((project, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleOpen(project)}
                        className="block rounded-xl bg-brown-500 shadow-[0_0_1rem_0_rgba(254,249,194,.2)] transition-all duration-300 hover:scale-105 hover:bg-brown-600 cursor-pointer"
                    >
                        <div className="flex flex-col items-start p-8">
                            <p className="text-l font-black-han text-xl text-white">{project.title}</p>
                            <p className="text-base font-noto text-xl">프로젝트 요약 보기</p>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <ProjectModal project={selectedProject} onClose={handleClose} />
            )}
        </section>
    );
}

export default Projects;
