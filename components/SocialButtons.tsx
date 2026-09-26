const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/tln_fpv",
    icon: "◎",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@tln_fpv",
    icon: "♪",
  },
];

export default function SocialButtons() {
  return (
    <div className="social-buttons">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="social-button"
        >
          <span className="social-icon">{social.icon}</span>
          <span>{social.name}</span>
          <span className="social-arrow">↗</span>
        </a>
      ))}
    </div>
  );
}
