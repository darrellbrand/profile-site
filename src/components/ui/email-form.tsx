import React from 'react'


export default function EmailForm() {
    return (
        <div className='pb-16'>
            <form
                action="https://formspree.io/f/xeoanalj"
                method="POST"
                target="_blank"
                className="flex flex-col gap-4 max-w-md mx-auto"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="p-2 rounded border"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="p-2 rounded border"
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    required
                    className="p-2 rounded border"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}