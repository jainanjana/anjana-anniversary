// ============================================================================
//  ANNIVERSARY CONTENT — the only file you need to edit.
//
//  - Change the text between the quotation marks.
//  - Keep the commas and quotation marks exactly as they are.
//  - Photo paths are relative to the "public" folder, e.g.
//      'assets/photos/photo-01.jpg'
//  - To replace a photo, put your new file in public/assets/photos/
//    with the SAME file name. No other change is needed.
// ============================================================================

export const anniversary = {
  couple: {
    him: 'Jain',
    her: 'Anjana',
  },

  // ---------- Opening screen ----------
  opening: {
    heroImage: 'assets/photos/photo-01.jpg',
    kicker: 'Chakuduu,',
    title: 'Three years of us.',
    dateLine: '07 November 2026',
    note: 'I made this for you. Take your time with it.',
    buttonText: 'Open your surprise',
  },

  // ---------- Memories gallery ----------
  // style options: 'polaroid', 'portrait', 'landscape', 'editorial'
  gallery: {
    heading: "Look how far we've come...",
    items: [
      { src: 'assets/photos/photo-01.jpg', caption: "Pine trees and our first Kodaikanal breeze", style: 'polaroid' },
      { src: 'assets/photos/photo-02.jpg', caption: "Hidden in the caves, finding our way together", style: 'portrait' },
      { src: 'assets/photos/photo-03.jpg', caption: "Pedalling through the hills, side by side", style: 'landscape' },
      { src: 'assets/photos/photo-04.jpg', caption: "A Christmas, just us", style: 'polaroid' },
      { src: 'assets/photos/photo-05.jpg', caption: "Our favourite uniform, and closer than ever", style: 'editorial' },
      { src: 'assets/photos/photo-06.jpg', caption: "Lost in the mist, found in each other", style: 'portrait' },
      { src: 'assets/photos/photo-07.jpg', caption: "Dancing our hearts out", style: 'polaroid' },
      { src: 'assets/photos/photo-08.jpg', caption: "The day we closed one chapter and opened another", style: 'landscape' },
      { src: 'assets/photos/photo-09.jpg', caption: "A little Onam joy, captured in a selfie", style: 'portrait' },
      { src: 'assets/photos/photo-10.jpg', caption: "Onam in our traditional best, glowing together", style: 'polaroid' },
      { src: 'assets/photos/photo-11.jpg', caption: "Nehru Park, uppilittathu, and your happiest smile", style: 'editorial' },
      { src: 'assets/photos/photo-12.jpg', caption: "Your head on my shoulder, the whole world quiet", style: 'landscape' },
    ],
  },

  // ---------- Optional short videos (user presses play) ----------
  // Example:  { src: 'assets/videos/memory-01.mp4', caption: 'Our trip to the hills' },
  videos: [],

  // ---------- The letter ----------
  letter: {
    heading: 'Something I wanted you to know...',
    greeting: 'My dearest Anjanaa,',
    paragraphs: [
      "Three years ago, on 7 November, we were two people at the beginning of something we did not yet understand. Looking back now, I am so grateful that it became this.",
      "What I love most is how many of our best moments were ordinary ones. A slow walk, a shared meal, a conversation that went on much longer than we planned. I never knew small things could mean so much until I had them with you.",
      "Thank you for your patience, your laughter, and the way you make even difficult days feel lighter. You bring out the best version of me, and I do not say that often enough.",
      "I do not need grand promises. What I want is simple: to keep growing with you, to have more mornings like this, more journeys we have not planned yet, and more reasons to smile at each other across a room.",
      "Happy anniversary, Anjana. Here is to the memories we have already made and the ones still waiting for us.",
    ],
    signature: ['With all my love,', 'Jaikuttan ♡'],
  },

  // ---------- Final section ----------
  finale: {
    heroImage: 'assets/photos/photo-12.jpg',
    heading: 'Happy 3rd Anniversary, Chakuduu ❤️',
    lines: [
      'Thank you for being part of my story.',
      "And if I could go back to November 7, 2023, I'd still want to meet you.",
    ],
    signature: ['With love,', 'Jaikuttan ♡'],
    revisitText: 'Revisit our memories',
  },

  // ---------- Background music (optional) ----------
  // Put the file at public/assets/audio/background.mp3
  audio: {
    src: 'assets/audio/background.mp3',
    volume: 0.35,
  },
};
