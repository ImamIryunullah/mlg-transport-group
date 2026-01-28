import React from "react";

const LetterSection = () => {
  return (
    <section
      id="letter"
      className="relative py-32 md:py-48 bg-[#0a0a0c] text-white overflow-hidden"
    >
      {/* BACKGROUND DECORATION - Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6b5b3e] blur-[200px] opacity-[0.03] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-6">
        {/* ENVELOPE TOP DECORATION */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#d6c28f]/40 to-[#d6c28f]" />
          <div className="mt-4 text-[#d6c28f] text-[10px] tracking-[0.8em] uppercase font-light">
            A Note to Us
          </div>
        </div>

        {/* THE LETTER CONTENT */}
        <div className="relative group">
          {/* Subtle Border Frame */}
          <div className="absolute -inset-8 md:-inset-16 border border-white/[0.03] rounded-[3rem] pointer-events-none transition-all duration-700 group-hover:border-[#d6c28f]/10" />

          <div className="text-center space-y-10 md:space-y-14">
            <h2 className="text-3xl md:text-5xl font-extralight italic leading-snug text-[#d6c28f]/90">
              "Di antara bisingnya dunia, <br />
              terima kasih telah menjadi satu-satunya <br />
              <span className="font-medium not-italic">
                tempat yang paling tenang.
              </span>
              "
            </h2>

            <div className="space-y-8 text-gray-400 font-light leading-[2.2] text-base md:text-xl max-w-3xl mx-auto italic">
              <p>
                Mungkin tidak semua hari akan terasa mudah, dan mungkin tidak
                setiap saat langit akan terlihat cerah. Namun, memiliki kamu di
                sampingku adalah pengingat bahwa badai sekuat apapun tidak akan
                pernah benar-benar menakutkan selama jemari kita masih bertaut.
              </p>
              <p>
                Terima kasih telah sabar dengan segala rumitku, telah merayakan
                setiap pencapaian kecilku, dan telah memilih untuk tetap tinggal
                bahkan ketika pintu keluar terasa begitu nyata.
              </p>
              <p>
                Mari terus tumbuh, bukan hanya sekadar bertambah usia. Mari
                terus belajar, bukan hanya sekadar mengenal. Dan yang paling
                penting, mari terus saling mencintai—dengan cara yang paling
                sederhana namun paling dalam.
              </p>
            </div>

            {/* CLOSING & DATE */}
            <div className="pt-10 flex flex-col items-center gap-6">
              <div className="w-12 h-[1px] bg-[#d6c28f]/30" />
              <div className="text-center">
                <p className="font-serif text-2xl text-[#d6c28f] mb-2">
                  Selamanya, kita.
                </p>
                <p className="text-[10px] tracking-[0.4em] text-gray-500 uppercase">
                  Januari, 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DECORATION */}
        <div className="mt-24 flex justify-center opacity-20">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d6c28f]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
