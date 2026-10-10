const garland = "https://media.invitestory.in/rajwada-royale-alt/src/assets/garland.png";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function InviteText() {
  const { families, invitationNote, couple } = invitation;

  return (
    <section className="relative px-5 py-12 sm:py-16">
      <img
        src={garland}
        alt=""
        aria-hidden
        width={1600}
        height={544}
        loading="lazy"
        className="mx-auto mb-8 w-full max-w-sm opacity-90"
      />
      <Reveal className="mx-auto max-w-lg text-center">
        <div className="space-y-6">
          {/* Bride Section */}
          <div className="border-gold/30 bg-paper/70 rounded-3xl border px-6 py-7 shadow-[0_16px_36px_-28px_var(--shadow-gold)] backdrop-blur-sm">
            <p className="font-kicker text-gold text-[0.62rem] tracking-[0.38em] uppercase">
              The Bride
            </p>
            <h2 className="font-script text-maroon mt-2 text-4xl sm:text-5xl">{couple.bride}</h2>
            <div className="via-gold/40 mx-auto my-3 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
            <p className="font-body text-ink/80 text-sm leading-6">
              Daughter of {families.brideSide.parents}
            </p>
          </div>

          {/* Weds Knot */}
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="via-gold/50 h-px w-16 bg-gradient-to-r from-transparent to-transparent" />
            <span className="font-script text-maroon text-2xl italic sm:text-3xl">&amp;</span>
            <span className="via-gold/50 h-px w-16 bg-gradient-to-l from-transparent to-transparent" />
          </div>

          {/* Groom Section */}
          <div className="border-gold/30 bg-paper/70 rounded-3xl border px-6 py-7 shadow-[0_16px_36px_-28px_var(--shadow-gold)] backdrop-blur-sm">
            <p className="font-kicker text-gold text-[0.62rem] tracking-[0.38em] uppercase">
              The Groom
            </p>
            <h2 className="font-script text-maroon mt-2 text-4xl sm:text-5xl">{couple.groom}</h2>
            <div className="via-gold/40 mx-auto my-3 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
            <p className="font-body text-ink/80 text-sm leading-6">
              Son of {families.groomSide.parents}
            </p>
            <p className="font-body text-ink/65 mt-1.5 text-xs leading-5">
              Grandson of {families.groomSide.grandParents}
            </p>
          </div>

          {/* With Blessings and Regards */}
          <div className="border-gold/35 bg-paper/85 rounded-3xl border px-6 py-6 shadow-[0_16px_36px_-28px_var(--shadow-gold)]">
            <p className="font-kicker text-gold text-[0.64rem] tracking-[0.34em] uppercase">
              With Blessings &amp; Regards From
            </p>
            <div className="via-gold/40 mx-auto mt-2.5 mb-4 h-px w-28 bg-gradient-to-r from-transparent to-transparent" />
            <div className="space-y-1.5 font-body text-ink/80 text-sm sm:text-base leading-relaxed">
              {families.blessings.map((name, i) => (
                <p key={i} className="font-medium">
                  {name}
                </p>
              ))}
            </div>
          </div>

          {/* Warm Invitation Note */}
          <div className="border-gold/25 bg-paper/50 rounded-3xl border px-6 py-6">
            <p className="font-body text-ink/75 text-sm leading-7 italic">
              &ldquo;{invitationNote}&rdquo;
            </p>
            <p className="font-kicker text-gold mt-4 text-[0.62rem] tracking-[0.3em] uppercase">
              {couple.hashtag}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
