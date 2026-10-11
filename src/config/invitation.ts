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
  invocation: "|| Shree Ganeshaya Namah ||",

  couple: {
    bride: "Pankhuri",
    groom: "Shashank",
    monogram: "P & S",
    hashtag: "#P.S.ILoveYou",
  },

  /** The main muhurat — powers the countdown and the primary calendar button */
  mainEvent: {
    title: "Pankhuri & Shashank — Wedding Celebrations",
    startsAt: "2026-11-23T12:00:00+05:30",
    durationMinutes: 300,
    dateLabel: "Monday, 23 November 2026",
    timeLabel: "12:00 PM onwards",
  },

  heroDates: {
    month: "November",
    dates: "23 · 24",
    year: "2026",
    subtitle: "Raj Vilas Palace · Orchha, M.P.",
  },

  families: {
    groomSide: {
      parents: "Mr. Neeraj Puri & Lt. Mrs. Seema Puri",
      grandParents: "Lt. Mrs. Kanchan Puri & Lt. Mr. Kulwant Rai Puri",
      line: "Son of Mr. Neeraj Puri & Lt. Mrs. Seema Puri",
    },
    brideSide: {
      parents: "Mrs. Manisha Shukla & Mr. Gopal Krishna Shukla",
      grandParents: "Lt. Mrs Ram Shree & Lt. Mr. K.C. Shukla",
      line: "Daughter of Mrs. Manisha Shukla & Mr. Gopal Krishna Shukla",
    },
    blessings: [
      "Mrs. Suman Puri & Mr. Sanjay Puri",
      "Mrs. Sunita Puri & Mr. Anuj Puri",
      "Mrs. Nishi Gupta & Mr. Ashutosh Gupta",
      "Baby Raysha Gupta",
    ],
  },

  invitationNote:
    "With the heavenly blessings of our ancestors and the loving presence of our families, we cordially invite you to celebrate the wedding festivities of Pankhuri & Shashank. Your love and blessings are our greatest gift.",

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
      name: "Engagement / Sangeet",
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
    title: "RSVP",
    instructions:
      "Please click on WhatsApp below to send details of the number of guests along with Aadhar card photo(s) for hotel check-in at Raj Vilas Palace.",
    contacts: [
      {
        name: "Neeraj Puri",
        relation: "Father",
        phone: "+91-9443041916",
        whatsapp: "919443041916",
      },
      {
        name: "Sandeep Puri",
        relation: "Brother",
        phone: "+91-8400834097",
        whatsapp: "918400834097",
      },
    ],
  },

  closing: {
    blessing: "Two families united in bond, and a beautiful journey that begins with your warm presence and blessings.",
    signOff: "With love and gratitude,",
  },
} as const;

export type Invitation = typeof invitation;
