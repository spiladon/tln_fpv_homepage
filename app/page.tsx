import Link from "next/link";
import SocialButtons from "@/components/SocialButtons";
import YouTubeCard from "@/components/YouTubeCard";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Latest Video",
    description: "Replace this with one of your latest YouTube videos.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "FPV / RC Adventure",
    description: "Add another video from your channel.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Behind the Scenes",
    description: "Add your third featured video here.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">WELCOME</p>
            <h1>Hi, I’m Kristofer.</h1>
            <p className="hero-text">
              Welcome to my website. Here you can find my latest videos,
              projects and social media. I create content around FPV,
              RC adventures and video editing.
            </p>
            <div className="hero-actions">
              <Link href="#videos" className="button button-primary">
                Watch videos
              </Link>
              <Link href="/contact" className="button button-secondary">
                Contact me
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-glow" />
            <span>CREATE</span>
            <strong>FLY · DRIVE · FILM</strong>
          </div>
        </div>
      </section>

      <section id="videos" className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUTUBE</p>
              <h2>Latest videos</h2>
            </div>
            <a
              className="text-link"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit YouTube →
            </a>
          </div>

          <div className="video-grid">
            {videos.map((video, index) => (
              <YouTubeCard key={`${video.id}-${index}`} {...video} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container social-section">
          <p className="eyebrow">FOLLOW ALONG</p>
          <h2>Find me on social media</h2>
          <p className="section-text">
            Follow for new videos, short clips, behind-the-scenes content
            and updates.
          </p>
          <SocialButtons />
        </div>
      </section>
    </>
  );
}