export default function NewsLetter() {
    return (
      <section className="py-10" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="bg-gradient-to-r from-orange-400 to-orange-500 p-8 rounded-2xl"
            data-aos="zoom-in"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold mb-2 font-britannic">
                  Subscribe to our newsletter
                </h3>
                <p className="opacity-80 font-futura">
                  Stay up-to-date about new features and supported apps & games.
                </p>
              </div>
              <div
                className="flex gap-4 w-full md:w-auto rounded-full p-2 bg-white"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-black font-semibold text-black focus:outline-none focus:border-white"
                />
                <button className="font-futura bg-gradient-to-r from-orange-400 to-orange-800 px-8 py-3 rounded-full text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}