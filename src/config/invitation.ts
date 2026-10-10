/**
 * SINGLE SOURCE OF TRUTH FOR THIS INVITATION.
 * Customized for Pankhuri & Shashank
 * Raj Vilas Palace, Orchha, M.P. — 23rd & 24th November 2026
 */

const storyOne = "https://media.invitestory.in/rajwada-royale-alt/src/assets/story-1.jpg";
const storyTwo = "https://media.invitestory.in/rajwada-royale-alt/src/assets/story-2.jpg";
const storyThree = "https://media.invitestory.in/rajwada-royale-alt/src/assets/story-3.jpg";
const galleryOne = "https://media.invitestory.in/rajwada-royale-alt/src/assets/gallery-1.jpg";
const galleryTwo = "https://media.invitestory.in/rajwada-royale-alt/src/assets/gallery-2.jpg";
const galleryThree = "https://media.invitestory.in/rajwada-royale-alt/src/assets/gallery-3.jpg";
const galleryFour = "https://media.invitestory.in/rajwada-royale-alt/src/assets/gallery-4.jpg";

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
    hashtag: "#PankhuriWedsShashank",
  },

  /** The main muhurat — powers the countdown and the primary calendar button */
  mainEvent: {
    title: "Pankhuri & Shashank — Wedding Ceremony",
    startsAt: "2026-11-24T19:00:00+05:30",
    durationMinutes: 300,
    dateLabel: "Tuesday, 24 November 2026",
    timeLabel: "7:00 PM onwards",
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
      line: "Daughter of Mrs. Manisha Shukla & Mr. Gopal Krishna Shukla",
    },
    blessings: [
      "Mrs. Suman Puri & Mr. Sanjay Puri",
      "Mrs. Manisha Puri & Mr. Anuj Puri",
      "Mrs. Nishi Gupta & Mr. Ashutosh Gupta",
      "Baby Raysha Gupta",
    ],
  },

  invitationNote:
    "With the heavenly blessings of our ancestors and the loving presence of our families, we cordially invite you to celebrate the wedding festivities of Pankhuri & Shashank. Your love and blessings are our greatest gift.",

  story: [
    {
      year: "2023",
      title: "When Paths Crossed",
      text: "A serendipitous conversation, shared laughter, and an unspoken connection that grew with every passing day.",
      image: storyOne,
    },
    {
      year: "2025",
      title: "Roka Ceremony",
      text: "Two families united with blessings, smiles, and the sweet promise of forever amidst marigolds and celebration.",
      image: storyTwo,
    },
    {
      year: "2026",
      title: "The Beginning of Forever",
      text: "Two souls ready to embark on a lifetime of companionship, surrounded by the warmth of loved ones.",
      image: storyThree,
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

  gallery: [
    { src: galleryOne, alt: "Mehendi celebrations with floral decor" },
    { src: galleryTwo, alt: "Sangeet night filled with dance and music" },
    { src: galleryThree, alt: "Palace courtyard lit up in royal evening hues" },
    { src: galleryFour, alt: "Auspicious wedding ceremony mandap" },
  ],

  closing: {
    blessing: "Two families united in bond, and a beautiful journey that begins with your warm presence and blessings.",
    signOff: "With love and gratitude,",
  },

  contacts: [
    { name: "Puri Family (Groom Side)", phone: "+919876543210" },
    { name: "Shukla Family (Bride Side)", phone: "+919812345678" },
  ],
} as const;

export type Invitation = typeof invitation;
