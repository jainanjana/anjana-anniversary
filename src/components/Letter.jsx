export default function Letter({ data }) {
  return (
    <div className="letter-wrap">
      <h2 className="section-title reveal">{data.heading}</h2>
      <article className="letter-paper reveal">
        <p className="letter-greeting handwritten">{data.greeting}</p>
        {data.paragraphs.map((p, i) => (
          <p key={i} className="letter-body">
            {p}
          </p>
        ))}
        <p className="letter-signature handwritten">
          {data.signature.map((line, i) => (
            <span key={i} className="sig-line">
              {line}
            </span>
          ))}
        </p>
      </article>
    </div>
  );
}
