import {
    UserRoundPen,
    Cake,
    MailOpen,
    MapPinHouse,
    Smartphone,
    GraduationCap,
    ContactRound
} from "./IconFactory";

function Profile() {
    return (
        <section id="Profile" className="bg-white rounded-xl shadow p-8 mt-12 scroll-mt-[72px]">
            {/* 제목 */}
            <div className="flex items-center justify-center mb-8">
                <span className="text-4xl mb-2 font-black-han align-middle">🪪 Profile</span>
            </div>
            {/* 2열 그리드 (큰박스 2개씩 한줄, 3줄) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 이름 */}
                <div className="flex bg-gray-50 rounded-lg p-6 min-h-[120px]">
                    {/* 왼쪽: 아이콘(2층) */}
                    <div className="flex flex-col items-center justify-center mr-6 min-w-[60px]">
                        <UserRoundPen className="w-12 h-12 text-mocha-mousse mb-2" />
                    </div>
                    {/* 오른쪽: 항목명/값 2줄 */}
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-gray-500 font-bold mb-1">이름</span>
                        <span className="text-lg font-bold">정성주</span>
                    </div>
                </div>
                {/* 생년월일 */}
                <div className="flex bg-gray-50 rounded-lg p-6 min-h-[120px]">
                    <div className="flex flex-col items-center justify-center mr-6 min-w-[60px]">
                        <Cake className="w-12 h-12 text-mocha-mousse mb-2" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-gray-500 font-bold mb-1">생년월일</span>
                        <span className="text-lg font-bold">2000.01.08</span>
                    </div>
                </div>
                {/* 이메일 */}
                <div className="flex bg-gray-50 rounded-lg p-6 min-h-[120px]">
                    <div className="flex flex-col items-center justify-center mr-6 min-w-[60px]">
                        <MailOpen className="w-12 h-12 text-mocha-mousse mb-2" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-gray-500 font-bold mb-1">이메일</span>
                        <span className="text-lg font-bold">tjdwn1171@gmail.com</span>
                    </div>
                </div>
                {/* 위치 */}
                <div className="flex bg-gray-50 rounded-lg p-6 min-h-[120px]">
                    <div className="flex flex-col items-center justify-center mr-6 min-w-[60px]">
                        <MapPinHouse className="w-12 h-12 text-mocha-mousse mb-2" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-gray-500 font-bold mb-1">위치</span>
                        <span className="text-lg font-bold">인천광역시 남동구 구월동</span>
                    </div>
                </div>
                {/* 연락처 */}
                {/* <div className="flex bg-gray-50 rounded-lg p-6 min-h-[120px]">
                    <div className="flex flex-col items-center justify-center mr-6 min-w-[60px]">
                        <Smartphone className="w-12 h-12 text-mocha-mousse mb-2" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-gray-500 font-bold mb-1">연락처</span>
                        <span className="text-lg font-bold">010-XXXX-XXXX</span>
                    </div>
                </div> */}
                {/* 학력 */}
                <div className="flex bg-gray-50 rounded-lg p-6 min-h-[120px]">
                    <div className="flex flex-col items-center justify-center mr-6 min-w-[60px]">
                        <GraduationCap className="w-12 h-12 text-mocha-mousse mb-2" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-gray-500 font-bold mb-1">학력</span>
                        <span className="text-lg font-bold">한국폴리텍대학교</span>
                        <span className="text-lg font-bold">(정보통신 2년제 졸업)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
