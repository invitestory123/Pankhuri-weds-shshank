import { Phone } from "lucide-react";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.7 20.28 11.91C20.28 16.45 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM9.14 7.39C8.97 7.39 8.69 7.45 8.46 7.7C8.23 7.96 7.58 8.57 7.58 9.82C7.58 11.07 8.49 12.27 8.62 12.44C8.75 12.61 10.37 15.11 12.87 16.19C13.47 16.44 13.93 16.6 14.29 16.71C14.89 16.9 15.44 16.87 15.88 16.81C16.36 16.74 17.36 16.2 17.57 15.61C17.78 15.02 17.78 14.51 17.72 14.41C17.65 14.31 17.48 14.24 17.22 14.11C16.96 13.98 15.69 13.35 15.46 13.27C15.22 13.19 15.05 13.14 14.88 13.39C14.71 13.64 14.22 14.24 14.07 14.41C13.92 14.57 13.78 14.6 13.52 14.47C13.26 14.34 12.43 14.07 11.44 13.19C10.67 12.5 10.15 11.66 10.01 11.41C9.86 11.16 10 11.02 10.13 10.89C10.25 10.77 10.39 10.59 10.53 10.43C10.66 10.27 10.71 10.15 10.8 9.98C10.88 9.81 10.84 9.67 10.77 9.54C10.71 9.42 10.19 8.16 9.98 7.64C9.77 7.13 9.56 7.2 9.4 7.19L8.9 7.19C8.98 7.19 9.14 7.39 9.14 7.39Z" />
    </svg>
  );
}

export function Rsvp() {
  const { rsvp } = invitation;

  const defaultWaMessage = encodeURIComponent(
    "Namaste! We are happy to confirm our presence for Pankhuri & Shashank's wedding celebrations at Orchha.\n\n• Name:\n• Number of Guests:\n• Attached: Aadhar Card photo(s) for hotel check-in"
  );

  return (
    <section id="rsvp" className="relative px-5 py-16">
      <Reveal className="mx-auto mb-10 max-w-md text-center">
        <h2 className="font-display text-maroon text-3xl sm:text-4xl">
          {rsvp.title}
        </h2>
        <div className="via-gold mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent to-transparent" />
      </Reveal>

      <Reveal className="mx-auto max-w-lg">
        {/* Notice Card regarding Aadhar photo & guests */}
        <div className="border-gold/30 bg-paper/85 rounded-3xl border p-6 text-center shadow-[0_18px_40px_-34px_var(--shadow-gold)] backdrop-blur-sm">
          <p className="font-body text-ink/80 text-sm leading-relaxed sm:text-base">
            {rsvp.instructions}
          </p>

          <div className="via-gold/30 my-6 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

          {/* Contacts List */}
          <div className="grid gap-4 sm:grid-cols-2">
            {rsvp.contacts.map((contact) => {
              const waUrl = `https://wa.me/${contact.whatsapp}?text=${defaultWaMessage}`;

              return (
                <div
                  key={contact.phone}
                  className="border-gold/25 bg-paper/90 flex flex-col justify-between rounded-2xl border p-4 text-center shadow-xs"
                >
                  <div>
                    <h3 className="font-display text-maroon text-lg">
                      {contact.name}
                    </h3>
                    <p className="font-kicker text-ink/60 mt-0.5 text-[0.62rem] tracking-wider uppercase">
                      {contact.relation}
                    </p>
                    <p className="font-body text-ink/75 mt-2 text-xs font-medium">
                      {contact.phone}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:brightness-105 active:scale-95"
                    >
                      <WhatsAppIcon className="size-4 shrink-0" />
                      <span>RSVP on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="btn-outline inline-flex items-center justify-center gap-1.5 py-1.5 text-xs"
                    >
                      <Phone className="size-3" aria-hidden />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="font-body text-ink/55 mt-5 text-xs italic">
            Please attach Aadhar card photos of all staying guests for seamless hotel check-in.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
