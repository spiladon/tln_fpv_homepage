type Props = {
  id: string;
  title: string;
  description: string;
};

export default function YouTubeCard({ id, title, description }: Props) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="video-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}