import {
    Code2,
    Layout,
    Server,
    Cloud,
    Database
} from "./IconFactory";

function Skills(){
    return (
        <section id="Skills" className="bg-lemon-yellow shadow py-8 mt-12 scroll-mt-[72px]">
            {/* 제목 */}
            <div className="flex items-center justify-center mb-8">
                <span className="text-4xl mb-2 font-black-han align-middle">🛠️ Skills</span>
            </div>
            <div className="grid grid-cols-1 gap-4 bg-beige rounded-xl p-8 shadow-[1rem_1rem_1rem_0_rgba(68,68,68,.2)] md:grid-cols-2 gap-8" >
                {/* Language */}
                <div className="flex items-center gap-4 rounded-xl bg-lemon-beige shadow-[0_0_1rem_0_rgba(254, 249, 194,.2)]">
                    <div className="flex flex-col items-center justify-center min-w-[180px] p-8">
                        <Code2 className="w-10 h-10 text-mocha-mousse mb-2" />
                        <span className="text-l font-black-han text-xl">Language</span>
                    </div>
                    
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 items-center ">
                        <li className="text-l font-noto font-bold px-2 py-1">Java</li>
                        <li className="text-l font-noto font-bold px-2 py-1">JavaScript</li>
                        <li className="text-l font-noto font-bold px-2 py-1">Python</li>
                    </ul>
                </div>
                {/* FrontEnd */}
                <div className="flex items-center gap-4 rounded-xl bg-lemon-beige shadow-[0_0_1rem_0_rgba(254, 249, 194,.2)]">
                    <div className="flex flex-col items-center justify-center min-w-[180px] p-8">
                        <Layout className="w-10 h-10 text-mocha-mousse mb-2" />
                        <span className="text-l font-black-han text-xl">FrontEnd</span>
                    </div>
                    
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 items-center ">
                        <li className="text-l font-noto font-bold px-2 py-1">HTML</li>
                        <li className="text-l font-noto font-bold px-2 py-1">CSS</li>
                        <li className="text-l font-noto font-bold px-2 py-1">JavaScript</li>
                        <li className="text-l font-noto font-bold px-2 py-1">TailWind</li>
                    </ul>
                </div>
                
                {/* Backend */}
                <div className="flex items-center gap-4 rounded-xl bg-lemon-beige shadow-[0_0_1rem_0_rgba(254, 249, 194,.2)]">
                    <div className="flex flex-col items-center justify-center min-w-[180px] p-8">
                        <Server className="w-10 h-10 text-violet-500 mb-2" />
                        <span className="text-l font-black-han text-xl">Backend</span>
                    </div>
                    
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 items-center ">
                        <li className="text-l font-noto font-bold px-2 py-1">Spring Boot</li>
                        <li className="text-l font-noto font-bold px-2 py-1">JPA</li>
                        <li className="text-l font-noto font-bold px-2 py-1">Spring Security</li>

                    </ul>
                </div>
                {/* DevOps */}
                <div className="flex items-center gap-4 rounded-xl bg-lemon-beige shadow-[0_0_1rem_0_rgba(254, 249, 194,.2)]">
                    <div className="flex flex-col items-center justify-center min-w-[180px] p-8">
                        <Cloud className="w-10 h-10 text-blue-500 mb-2" />
                        <span className="text-l font-black-han text-xl">DevOps</span>
                    </div>
                    
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 items-center ">
                        <li className="text-l font-noto font-bold px-2 py-1">Firebase</li>
                        <li className="text-l font-noto font-bold px-2 py-1">AWS EC2</li>
                        <li className="text-l font-noto font-bold px-2 py-1">Lightsail</li>
                        <li className="text-l font-noto font-bold px-2 py-1">RDS</li>
                    </ul>
                </div>
                
                {/* DB */}
                <div className="flex items-center gap-4 rounded-xl bg-lemon-beige shadow-[0_0_1rem_0_rgba(254, 249, 194,.2)]">
                    <div className="flex flex-col items-center justify-center min-w-[180px] p-8">
                        <Database className="w-10 h-10 text-blue-500 mb-2" />
                        <span className="text-l font-black-han text-xl">DataBase</span>
                    </div>
                    
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 items-center ">
                        <li className="text-l font-noto font-bold px-2 py-1">Oracle</li>
                        <li className="text-l font-noto font-bold px-2 py-1">MariaDB</li>
                        <li className="text-l font-noto font-bold px-2 py-1">MySQL</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Skills;