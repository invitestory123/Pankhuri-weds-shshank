/**
 * SINGLE SOURCE OF TRUTH FOR THIS INVITATION.
 * Customized for Pankhuri & Shashank
 * Raj Vilas Palace, Orchha, M.P. — 23rd & 24th November 2026
 */

import storyProposal from "@/assets/story-proposal.jpg";
import storyRoka from "@/assets/story-roka.jpg";
import storyPathsCrossed from "@/assets/story-paths-crossed.jpg";

export type InviteEvent = {
  key: string;
  name: string;
  /** ISO 8601 with timezone offset */
  startsAt: string;
  /** duration in minutes, used for calendar entries */
  durationMinutes: number;
  venue: string;
  address: string;
  dressCode: string;
  /** any CSS colour token or hex used for dress-code dot badge */
  dressCodeColor: string;
  note?: string;
};

export const invitation = {
  invocation: "Shree Ganeshaya Namah",

  couple: {
    groom: "Shashank",
    bride: "Pankhuri",
    monogram: "S & P",
    hashtag: "#S.P.ILoveYou",
  },

  /** The main muhurat — powers the countdown and the primary calendar button */
  mainEvent: {
    title: "Shashank & Pankhuri — Wedding Celebrations",
    startsAt: "2026-11-23T12:00:00+05:30",
    durationMinutes: 300,
    dateLabel: "Monday, 23 November 2026",
    timeLabel: "12:00 PM onwards",
  },

  heroCard: {
    invocation: "Shree Ganeshaya Namah",
    parents: "Lt. Mrs. Seema Puri & Mr. Neeraj Puri",
    elders: [
      "Mrs. Suman Puri & Mr. Sanjay Puri",
      "Mrs. Sunita Puri & Mr. Anuj Puri",
    ],
    invitationLine:
      "Together, we request your gracious presence at the wedding festivities of",
  },

  heroDates: {
    month: "November",
    dates: "23 · 24",
    year: "2026",
    subtitle: "Raj Vilas Palace · Orchha, M.P.",
  },

  families: {
    groomSide: {
      parents: "Lt. Mrs. Seema Puri & Mr. Neeraj Puri",
      grandParents: "Lt. Mrs. Kanchan Puri & Lt. Mr. Kulwant Rai Puri",
      line: "Son of Lt. Mrs. Seema Puri & Mr. Neeraj Puri",
    },
    brideSide: {
      parents: "Mrs. Manisha Shukla & Mr. Gopal Krishna Shukla",
      grandParents: "Lt. Mrs Ram Shree & Lt. Mr. K.C. Shukla",
      line: "Daughter of Mrs. Manisha Shukla & Mr. Gopal Krishna Shukla",
    },
    blessings: [
      "Puri Family",
      "Arora Family",
      "Sachdeva Family",
      "Kapoor Family",
      "Gupta Family",
      "Gandhi Family",
    ],
  },

  heavenlyBlessings: [
    "Lt. Mrs. Kanchan Puri",
    "Lt. Mr. Kulwant Rai Puri",
    "Lt. Mrs. Seema Puri",
  ],

  invitationNote:
    "With the heavenly blessings of our ancestors and the loving presence of our families, we cordially invite you to celebrate the wedding festivities of Shashank & Pankhuri. Your love and blessings are our greatest gift.",

  story: [
    {
      year: "2024",
      title: "When Paths Crossed",
      text: "A serendipitous conversation, shared laughter, and an unspoken connection that grew with every passing day.",
      image: storyPathsCrossed,
    },
    {
      year: "2025",
      title: "The Proposal",
      text: "A magical proposal by the river where two hearts promised to walk hand in hand forever.",
      image: storyProposal,
    },
    {
      year: "2025",
      title: "Roka Ceremony",
      text: "Two families united with blessings, smiles, and the sweet promise of forever amidst marigolds and celebration.",
      image: storyRoka,
    },
  ],

  events: [
    {
      key: "mehendi",
      name: "Mehendi",
      startsAt: "2026-11-23T12:00:00+05:30",
      durationMinutes: 240,
      venue: "Krishav Lawn",
      address: "Raj Vilas Palace, Orchha, M.P.",
      dressCode: "Boho-chic desi",
      dressCodeColor: "#2E7D32",
      note: "12:00 PM onwards · Vibrant henna and folk rhythms",
    },
    {
      key: "sangeet",
      name: "Sagan/Engagement",
      startsAt: "2026-11-23T19:00:00+05:30",
      durationMinutes: 300,
      venue: "Bhoomika Hall",
      address: "Raj Vilas Palace, Orchha, M.P.",
      dressCode: "Glitz and Glamour",
      dressCodeColor: "#C9A84C",
      note: "7:00 PM onwards · An evening of music, dance & sparkles",
    },
    {
      key: "haldi",
      name: "Haldi",
      startsAt: "2026-11-24T11:00:00+05:30",
      durationMinutes: 180,
      venue: "Courtyard",
      address: "Raj Vilas Palace, Orchha, M.P.",
      dressCode: "Vanilla Sunbeams",
      dressCodeColor: "#F59E0B",
      note: "11:00 AM onwards · Sunshine yellow, turmeric & joyous blessings",
    },
    {
      key: "wedding",
      name: "Wedding",
      startsAt: "2026-11-24T19:00:00+05:30",
      durationMinutes: 300,
      venue: "Chaturbhuj Lawn",
      address: "Raj Vilas Palace, Orchha, M.P.",
      dressCode: "Nawabi elegance",
      dressCodeColor: "#7B1E2B",
      note: "7:00 PM onwards · The auspicious Varmala and Pheras ceremony",
    },
  ] satisfies InviteEvent[],

  venue: {
    name: "Raj Vilas Palace",
    address: "Khasra No 16/1/1, Azad Ward, Orchha - Jhansi Road, Orchha, Madhya Pradesh 472246",
    lat: 25.3512,
    lng: 78.6366,
    shareUrl: "https://share.google/xNjzkQZFybOKHnpPZ",
    directionsNote: "Situated near Chandra Shekhar Azad Park, Orchha. Valet and guest parking available at the venue.",
  },

  audioTrack: "/audio/din-shagna-da.mp3",
  youtubeBgmUrl: "https://youtu.be/1LVpuWpRs3I?si=iIRl-CVJ33y_hMGx",

  rsvp: {
    title: "R.S.V.P.",
    firms: [
      "M/s Bullet Lock Co",
      "M/s K.K. Precision Works",
      "M/s Puri Auto Products",
    ],
    contacts: [
      {
        name: "Sanjay Puri",
        phone: "+91-9792168376",
        whatsapp: "919792168376",
      },
      {
        name: "Neeraj Puri",
        phone: "+91-9453041916",
        whatsapp: "919453041916",
      },
      {
        name: "Anuj Puri",
        phone: "+91-9453041917",
        whatsapp: "919453041917",
      },
    ],
  },

  closing: {
    blessing: "Two families united in bond, and a beautiful journey that begins with your warm presence and blessings.",
    signOff: "With love and gratitude,",
  },
} as const;

export type Invitation = typeof invitation;
