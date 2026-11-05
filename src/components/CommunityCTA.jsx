import { LINKS } from '../lib/links';
import { WhatsApp, YouTube } from './Icons';

export default function CommunityCTA() {
  return (
    <section className="container-x mt-20">
      <div className="relative overflow-hidden rounded-3xl bg-orange px-6 py-12 text-white sm:px-12">
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/15" aria-hidden />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Questions? Ask students who've done it.</h2>
            <p className="mt-3 max-w-xl text-orange-50">
              Join the SpotScholars WhatsApp community for scholarship alerts and real answers, and watch the admission sessions on YouTube.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn bg-white text-navy-900 hover:bg-navy-50">
              <WhatsApp className="text-[#25D366]" /> Join WhatsApp community
            </a>
            <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="btn bg-navy-900 text-white hover:bg-navy-800">
              <YouTube className="text-[#ff3d3d]" /> Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
