import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { ChevronDown } from "lucide-react";
const couple = "https://media.invitestory.in/rajwada-royale-alt/src/assets/couple.png";
const floral = "https://media.invitestory.in/rajwada-royale-alt/src/assets/floral-corner.png";
const lantern = "https://media.invitestory.in/rajwada-royale-alt/src/assets/lantern.png";
import { invitation } from "@/config/invitation";

const Aurora = lazy(() => import("@/components/Aurora"));


export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const floralY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const coupleY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMounted(true);
  }, []);

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 pt-10 pb-16 sm:pt-16">
      {mounted ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-45">
          <Suspense fallback={null}>
            <Aurora colorStops={["#C9A84C", "#F3D9C6", "#7B1E2B"]} amplitude={0.75} blend={0.6} speed={0.5} />
          </Suspense>
        </div>
      ) : null}

      <motion.img
        src={lantern}
        alt=""
        aria-hidden
        width={624}
        height={1088}
        className="lantern-sway pointer-events-none absolute -top-6 left-2 w-16 origin-top sm:w-24"
      />
      <motion.img
        src={lantern}
        alt=""
        aria-hidden
        width={624}
        height={1088}
        className="lantern-sway-slow pointer-events-none absolute -top-10 right-2 w-14 origin-top sm:w-20"
      />

      <div className="relative mx-auto max-w-md">
        <div className="arch-frame relative px-6 pt-16 pb-8 text-center sm:px-10 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-xs space-y-3"
          >
            <p className="font-kicker text-gold text-[0.62rem] sm:text-xs tracking-[0.24em] uppercase font-semibold">
              || Shree Ganeshaya Namah ||
            </p>

            <div className="pt-1">
              <p className="font-display text-maroon text-sm sm:text-base font-semibold tracking-wide">
                Lt. Mrs. Seema Puri &amp; Mr. Neeraj Puri
              </p>
            </div>

            <div className="space-y-0.5">
              <p className="font-body text-ink/80 text-xs sm:text-[0.82rem] font-medium">
                Mrs. Suman Puri &amp; Mr. Sanjay Puri
              </p>
              <p className="font-body text-ink/80 text-xs sm:text-[0.82rem] font-medium">
                Mrs. Sunita Puri &amp; Mr. Anuj Puri
              </p>
            </div>

            <div className="via-gold/50 mx-auto my-2 h-px w-28 bg-gradient-to-r from-transparent to-transparent" />

            <p className="font-body text-ink/75 text-xs sm:text-[0.82rem] leading-relaxed italic px-2">
              Together, we request your gracious presence at the wedding festivities of
            </p>

            <h1 className="font-script text-maroon pt-1 text-[2.5rem] leading-[1.12] sm:text-5xl">
              Shashank{" "}
              <span className="font-display text-gold mx-1 text-xl sm:text-2xl font-light italic">
                with
              </span>{" "}
              Pankhuri
            </h1>
          </motion.div>

          <motion.img
            src={couple}
            alt={`Illustration of ${invitation.couple.groom} and ${invitation.couple.bride} in traditional wedding attire`}
            width={912}
            height={1200}
            style={{ y: coupleY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto mt-6 w-[86%] max-w-xs drop-shadow-[0_18px_28px_var(--shadow-gold)]"
          />

          <motion.img
            src={floral}
            alt=""
            aria-hidden
            width={912}
            height={912}
            style={{ y: floralY }}
            className="pointer-events-none absolute -bottom-6 -left-6 w-40 opacity-95 sm:w-52"
          />
          <motion.img
            src={floral}
            alt=""
            aria-hidden
            width={912}
            height={912}
            style={{ y: floralY }}
            className="pointer-events-none absolute -right-6 -bottom-6 w-40 scale-x-[-1] opacity-95 sm:w-52"
          />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="text-gold mt-10 flex justify-center"
      >
        <ChevronDown className="size-6" aria-hidden />
      </motion.div>
    </section>
  );
}
