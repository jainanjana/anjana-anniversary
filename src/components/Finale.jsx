import Photo from './Photo';

export default function Finale({ data, onRevisit }) {
  return (
    <div className="finale reveal">
      <Photo src={data.heroImage} alt="" className="finale-photo" />
      <h2 className="finale-heading">{data.heading}</h2>
      {data.lines.map((line, i) => (
        <p key={i} className="finale-line">
          {line}
        </p>
      ))}
      <p className="finale-signature handwritten">
        {data.signature.map((line, i) => (
          <span key={i} className="sig-line">
            {line}
          </span>
        ))}
      </p>
      <button className="btn-ghost" onClick={onRevisit}>
        {data.revisitText}
      </button>
    </div>
  );
}
