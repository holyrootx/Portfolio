import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 p-6 overflow-y-auto max-h-[80vh] relative">

                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
                >
                    ✕
                </button>

                {/* 제목 */}
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    🧠 {project.title}
                </h2>

                {/* 설명 */}
                <p className="mb-3 text-gray-700 text-sm">{project.description}</p>

                {/* 기술 스택 */}
                <p className="mb-3 text-gray-700 text-sm">
                    <strong className="text-black">🛠 기술 스택:</strong> {project.stack}
                </p>

                {/* 기능 리스트 */}
                <div className="mb-3">
                    <p className="text-sm font-semibold text-black mb-1">🔧 주요 구현 기능:</p>
                    <ul className="list-disc list-inside pl-4 text-sm text-gray-700 space-y-1">
                        {project.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>

                {/* 깃허브 링크 */}
                <div className="mt-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm hover:text-blue-800"
                    >
                        📂 GitHub에서 자세히 보기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;