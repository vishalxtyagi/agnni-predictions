import { Bookmark } from "lucide-react"

export default function FooterMenu() {
    return (
        <footer className="py-16 border-t border-white/10 ">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
                <div className="relative mb-6">
                <h3 className="text-lg font-semibold text-white">Our Consultation</h3>
                <div 
                    className="absolute bottom-0 left-0 h-0.5 w-full"
                    style={{
                    background: 'linear-gradient(to right, #FBBF24, #D97706, transparent)'
                    }}
                ></div>
                </div>
                <ul className="space-y-4">
                <li>
                    <a href="#" className="text-white/70 hover:text-orange-400 flex items-center">
                    <Bookmark className="text-yellow-400 w-4 h-4 mr-2 fill-yellow-400" />
                    Tarot Card Reading
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white/70 hover:text-orange-400 flex items-center">
                    <Bookmark className="text-yellow-400 w-4 h-4 mr-2 fill-yellow-400" />
                    Angel Reading
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white/70 hover:text-orange-400 flex items-center">
                    <Bookmark className="text-yellow-400 w-4 h-4 mr-2 fill-yellow-400" />
                    Crystal Healing
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white/70 hover:text-orange-400 flex items-center">
                    <Bookmark className="text-yellow-400 w-4 h-4 mr-2 fill-yellow-400" />
                    Vastu Consultation
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white/70 hover:text-orange-400 flex items-center">
                    <Bookmark className="text-yellow-400 w-4 h-4 mr-2 fill-yellow-400" />
                    Numerology
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white/70 hover:text-orange-400 flex items-center">
                    <Bookmark className="text-yellow-400 w-4 h-4 mr-2 fill-yellow-400" />
                    Astrological Predictions
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white/70 hover:text-orange-400 flex items-center">
                    <Bookmark className="text-yellow-400 w-4 h-4 mr-2 fill-yellow-400" />
                    Signature Analysis
                    </a>
                </li>
                </ul>
            </div>

            <div>
                <div className="relative mb-6">
                <h3 className="text-lg font-semibold text-white">Products/Shop</h3>
                <div 
                    className="absolute bottom-0 left-0 h-0.5 w-full"
                    style={{
                    background: 'linear-gradient(to right, #FBBF24, #D97706, transparent)'
                    }}
                ></div>
                </div>
                <ul className="space-y-4">
                <li>
                    <a href="/shop" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Black Salt for Nazar Removal
                    </a>
                </li>
                <li>
                    <a href="/shop" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Crystal Bracelets
                    </a>
                </li>
                <li>
                    <a href="/shop" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Amethyst Healing
                    </a>
                </li>
                <li>
                    <a href="/shop" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Spiritual Products
                    </a>
                </li>
                </ul>
            </div>

            <div>
                <div className="relative mb-6">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <div 
                    className="absolute bottom-0 left-0 h-0.5 w-full"
                    style={{
                    background: 'linear-gradient(to right, #FBBF24, #D97706, transparent)'
                    }}
                ></div>
                </div>
                <ul className="space-y-4">
                <li>
                    <a href="/" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Home
                    </a>
                </li>
                <li>
                    <a href="/consultation" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Consultation Services
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    About Agnni Predictions
                    </a>
                </li>
                <li>
                    <a href="/shop" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Products/Shop
                    </a>
                </li>
                <li>
                    <a href="/contact" className="text-white/70 hover:text-purple-300 flex items-center">
                    <Bookmark className="text-purple-400 w-4 h-4 mr-2 fill-purple-400" />
                    Contact Us
                    </a>
                </li>
                </ul>
            </div>

            <div>
                <div className="relative mb-6">
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <div 
                    className="absolute bottom-0 left-0 h-0.5 w-full"
                    style={{
                    background: 'linear-gradient(to right, #FBBF24, #D97706, transparent)'
                    }}
                ></div>
                </div>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                📍 B 507 Tulsi 1 Appartment, Near Versova Metro Station, Bon Bon lane, Seven Bungalows, Andheri west, Mumbai 400061
                </p>
                <div className="space-y-2">
                    <a href="tel:+919870111356" className="text-purple-300 hover:text-purple-200 block text-sm">
                        📞 +91-9870111356
                    </a>
                    <a href="mailto:pranjal@agnni.co.in" className="text-purple-300 hover:text-purple-200 block text-sm">
                        📧 pranjal@agnni.co.in
                    </a>
                    <a href="https://agnni.co.in" className="text-purple-300 hover:text-purple-200 block text-sm">
                        🌐 agnni.co.in
                    </a>
                </div>
                <div className="mt-4">
                    <p className="text-white/60 text-sm">
                        Monday – Saturday: 10:00 AM – 7:00 PM<br/>
                        Wednesday: 4:00PM - 10:00 PM (Oberoi Mall, Goregaon)
                    </p>
                </div>
            </div>
            </div>

            <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/70 text-sm">
                Copyright ©2024 Agnni Predictions | All Rights Reserved. | Developed by digitaxperts.co.in
            </p>
            </div>
        </div>
        </footer>
    )
}