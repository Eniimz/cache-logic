import { ArrowUpRight, Twitter, Linkedin, Globe } from "lucide-react"
import Image from "next/image"

export default function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#f5f5ff] mb-4">
          <span className="text-[#414ec6] text-sm font-medium">Our Team</span>
        </div>

        <h2 className="text-[#101828] text-4xl font-semibold text-center mb-5">Meet Our Team</h2>

        <p className="text-[#475467] text-lg text-center max-w-2xl mx-auto mb-10">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to
          do your best work.
        </p>

        <div className="flex gap-4">
          <button className="px-5 py-2.5 border border-[#d0d5dd] rounded-lg text-[#344054] font-medium hover:bg-[#f9fafb] transition-colors">
            Read our principles
          </button>
          <button className="px-5 py-2.5 bg-[#1d315f] text-white rounded-lg font-medium hover:bg-[#152241] transition-colors">
            We're hiring!
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        {/* Main team member card - 7 columns */}
        <div className="md:col-span-7 relative rounded-2xl overflow-hidden h-[750px]">
          <Image src="/Faizan.png" alt="Faizan Ahmad" width={700} height={750} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-3xl font-semibold mb-1">Faizan Ahmad</h3>
                <p className="text-white/90 text-lg mb-1">Founder & CEO</p>
                <p className="text-white/80 text-sm mb-6">
                  Former co-founder of Opendoor. Early staff at Apple and Google.
                </p>

                <div className="flex gap-3">
                  <button className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Globe className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Right column with two smaller cards - 5 columns */}
        <div className="md:col-span-5 flex flex-col gap-6 h-[750px] pl-4">
          {/* Abdullah card - only top-right corner rounded */}
          <div className="relative overflow-hidden h-[363px] w-[90%] rounded-none rounded-tr-[32px]">
            <Image
              src="/abdullah.png"
              alt="Abdullah Sarfaraz"
              width={450}
              height={363}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-1">Abdullah Sarfaraz</h3>
                  <p className="text-white/90 text-lg">Co-Founder</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Annie card - only bottom-right corner rounded */}
          <div className="relative overflow-hidden h-[363px] w-[90%] rounded-none rounded-br-[32px]">
            <Image
              src="/annie stanley.png"
              alt="Annie Stanley"
              width={450}
              height={363}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-1">Annie Stanley</h3>
                  <p className="text-white/90 text-lg">Product Manager</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

