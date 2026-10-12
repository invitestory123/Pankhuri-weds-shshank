import { CalendarPlus, Clock, MapPin, Sparkles } from "lucide-react";
import { invitation } from "@/config/invitation";
import { formatEventDate, formatEventTime, googleCalendarUrl } from "@/lib/invite-utils";
import { Reveal } from "./Reveal";

export function Events() {
  return (
    <section id="events" className="relative px-5 py-16">
      <Reveal className="mx-auto mb-10 max-w-md text-center">
        <p className="font-kicker text-gold text-[0.68rem] tracking-[0.42em] uppercase">
          Wedding Itinerary
        </p>
        <h2 className="font-display text-maroon mt-3 text-3xl sm:text-4xl">
          The Celebrations
        </h2>
        <p className="font-display text-maroon/90 mt-2 text-sm sm:text-base font-semibold tracking-wider uppercase">
          23rd &amp; 24th November 2026 · Orchha
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-lg gap-4">
        {invitation.events.map((event, i) => (
          <Reveal key={event.key} delay={i * 0.05}>
            <article className="border-gold/30 bg-paper/85 rounded-3xl border px-6 py-5 shadow-[0_18px_40px_-34px_var(--shadow-gold)] backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 border-b border-gold/20 pb-2.5">
                <span className="font-display text-maroon text-base sm:text-lg font-semibold tracking-wide">
                  {formatEventDate(event.startsAt)}
                </span>
                <Sparkles className="text-gold/80 size-4" aria-hidden />
              </div>

              <h3 className="font-display text-maroon mt-3 text-3xl">{event.name}</h3>

              <div className="mt-3 space-y-1.5">
                <p className="font-body text-ink/75 flex items-center gap-2 text-sm">
                  <Clock className="text-gold size-3.5 shrink-0" aria-hidden />
                  <span>{formatEventTime(event.startsAt)}</span>
                </p>
                <p className="font-body text-ink/75 flex items-start gap-2 text-sm">
                  <MapPin className="text-gold mt-0.5 size-3.5 shrink-0" aria-hidden />
                  <span>
                    {event.venue} · {event.address}
                  </span>
                </p>
              </div>

              {/* Dress Code Badge */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-paper/95 px-3 py-1 text-xs text-ink/80 shadow-xs">
                  <span className="size-1.5 rounded-full bg-ink/70 shrink-0" aria-hidden />
                  <span>
                    Dress: <strong className="font-medium text-ink/90">{event.dressCode}</strong>
                  </span>
                </span>
              </div>

              {event.note ? (
                <p className="font-body text-ink/60 mt-3 text-xs italic">{event.note}</p>
              ) : null}

              <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
                <a
                  href={googleCalendarUrl({
                    title: `${event.name} — ${invitation.couple.monogram}`,
                    startsAt: event.startsAt,
                    durationMinutes: event.durationMinutes,
                    location: `${event.venue}, ${event.address}`,
                    description: `Dress Code: ${event.dressCode}. ${event.note ?? ""}`,
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold font-kicker inline-flex items-center gap-1.5 text-[0.62rem] tracking-[0.24em] uppercase underline-offset-4 hover:underline"
                >
                  <CalendarPlus className="size-3.5" aria-hidden />
                  Add to Google Calendar
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
