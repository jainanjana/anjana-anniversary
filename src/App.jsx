import { useEffect, useRef, useState } from 'react';
import { anniversary as data } from './data/anniversaryData';
import { asset } from './utils/asset';
import Opening from './components/Opening';
import Gallery from './components/Gallery';
import Letter from './components/Letter';
import Finale from './components/Finale';
import MusicToggle from './components/MusicToggle';

export default function App() {
  const audioRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(Boolean(data.audio?.src));

  // Create the audio element once. Nothing plays until the user taps.
  useEffect(() => {
    if (!data.audio?.src) return undefined;
    const audio = new Audio(asset(data.audio.src));
    audio.loop = true;
    audio.volume = data.audio.volume ?? 0.35;
    audio.onerror = () => {
      setMusicAvailable(false);
      setPlaying(false);
    };
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
    };
  }, []);

  // Reveal-on-scroll for elements with the .reveal class
  useEffect(() => {
    if (!opened) return undefined;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [opened]);

  const startMusic = () => {
    const audio = audioRef.current;
    if (!audio || !musicAvailable) return;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  // Called directly from the tap so the browser allows audio playback.
  const handleOpen = () => {
    startMusic();
    setLeaving(true);
    window.setTimeout(() => {
      setOpened(true);
      window.scrollTo(0, 0);
    }, 700);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      startMusic();
    }
  };

  const revisit = () => {
    document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {!opened && <Opening data={data.opening} onOpen={handleOpen} leaving={leaving} />}

      {opened && (
        <main className="site fade-in">
          <section id="memories" className="section">
            <Gallery data={data.gallery} videos={data.videos} />
          </section>
          <section id="letter" className="section">
            <Letter data={data.letter} />
          </section>
          <section id="finale" className="section">
            <Finale data={data.finale} onRevisit={revisit} />
          </section>
        </main>
      )}

      {opened && musicAvailable && <MusicToggle playing={playing} onToggle={toggleMusic} />}
    </>
  );
}
