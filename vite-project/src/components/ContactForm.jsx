// src/components/ContactForm.jsx
import { useState } from 'react';

function ContactForm() {
    // 'email' state와 그 값을 변경할 'setEmail' 함수
    const [email, setEmail] = useState('');
    // 'message' state와 그 값을 변경할 'setMessage' 함수
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 것을 방지
        alert(`Email: ${email}\nMessage: ${message}`);
        // 실제로는 여기서 서버로 데이터를 전송합니다.
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="p-8 bg-white rounded-lg shadow-md mt-8 scroll-mt-[72px]">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default ContactForm;