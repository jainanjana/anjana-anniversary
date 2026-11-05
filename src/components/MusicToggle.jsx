export default function MusicToggle({ playing, onToggle }) {
  return (
    <button className="music-toggle" onClick={onToggle} aria-label={playing ? 'Pause music' : 'Play music'}>
      ♪ Music {playing ? 'on' : 'off'}
    </button>
  );
}
