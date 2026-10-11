import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DoorGate } from "@/components/invite/DoorGate";
import { MusicToggle } from "@/components/invite/MusicToggle";
import { SmoothScroll } from "@/components/invite/SmoothScroll";

import { Petals } from "@/components/invite/Petals";
import { Hero } from "@/components/invite/Hero";
import { Countdown } from "@/components/invite/Countdown";
import { InviteText } from "@/components/invite/InviteText";
import { Story } from "@/components/invite/Story";
import { Events } from "@/components/invite/Events";
import { Venue } from "@/components/invite/Venue";
import { Rsvp } from "@/components/invite/Rsvp";
import { FooterBlessing } from "@/components/invite/FooterBlessing";
import { invitation } from "@/config/invitation";

const title = `${invitation.couple.bride} & ${invitation.couple.groom} — Wedding Invitation`;
const description = `Join us on 23rd & 24th November 2026 at ${invitation.venue.name}, Orchha, M.P. Schedule, venue map and countdown inside.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:secure_url", content: "/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${title} — Raj Vilas Palace, Orchha` },
      { property: "og:site_name", content: "InviteStory" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "image_src", href: "/og-image.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: invitation.mainEvent.title,
          startDate: invitation.mainEvent.startsAt,
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: invitation.venue.name,
            address: invitation.venue.address,
          },
        }),
      },
    ],
  }),
  component: InvitationPage,
});

function InvitationPage() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="paper-bg text-ink relative min-h-screen overflow-x-hidden">
      <SmoothScroll enabled={opened} />
      <Petals />
      <DoorGate onOpen={() => setOpened(true)} />
      <MusicToggle started={opened} />
      <main className="relative z-10">
        <Hero />
        <Countdown />
        <InviteText />
        <Story />
        <Events />
        <Venue />
        <Rsvp />
      </main>
      <FooterBlessing />
    </div>
  );
}

