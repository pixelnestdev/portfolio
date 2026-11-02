import { profile, services, projects, skills } from './data.js';

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

export default function App() {
  const year = new Date().getFullYear();
  const links = [
    profile.github && { label: 'GitHub', href: profile.github },
    profile.fiverr && { label: 'Fiverr', href: profile.fiverr },
    profile.upwork && { label: 'Upwork', href: profile.upwork },
  ].filter(Boolean);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo" aria-label="Home">
            {initials(profile.name)}
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="btn btn-small">Hire me</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">{profile.role}</p>
          <h1>
            Hi, I'm <span className="accent">{profile.name}</span>.
          </h1>
          <p className="lead">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn">Let's work together</a>
            <a href="#projects" className="btn btn-ghost">See my work</a>
          </div>
          <p className="muted small">📍 {profile.location}</p>
        </section>

        <section id="services" className="section container">
          <h2>What I can do for you</h2>
          <div className="grid grid-3">
            {services.map((s) => (
              <article key={s.title} className="card">
                <div className="card-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section container">
          <h2>Projects</h2>
          <div className="grid grid-2">
            {projects.map((p) => (
              <article key={p.title} className="card project">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="chips">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="link">
                    View project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <h2>Skills</h2>
          <ul className="chips chips-lg">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section container">
          <div className="contact card">
            <h2>Have a project in mind?</h2>
            <p>Send me a message with your idea or design — I usually reply within a few hours.</p>
            <a href={`mailto:${profile.email}`} className="btn">{profile.email}</a>
            {links.length > 0 && (
              <div className="contact-links">
                {links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="container footer muted small">
        © {year} {profile.name}. Built with React.
      </footer>
    </>
  );
}
