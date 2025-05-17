// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-400 py-10 text-center text-sm">
            <p>© {new Date().getFullYear()} YourBrandName. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Contact</a>
            </div>
        </footer>
    );
}
