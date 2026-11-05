import Photo from './Photo';

export default function Opening({ data, onOpen, leaving }) {
  return (
    <section className={`opening ${leaving ? 'is-leaving' : ''}`} aria-label="Welcome">
      <Photo src={data.heroImage} alt="" className="opening-photo" />
      <div className="opening-content">
        <p className="kicker handwritten">{data.kicker}</p>
        <h1 className="opening-title">{data.title}</h1>
        <p className="opening-date">{data.dateLine}</p>
        <p className="opening-note">{data.note}</p>
        <button className="btn-primary" onClick={onOpen} disabled={leaving}>
          {data.buttonText}
        </button>
      </div>
    </section>
  );
}
