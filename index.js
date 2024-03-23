// pages/index.js

import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="dark-theme">
      <header className="header">
        <nav>
          <ul>
            <li><Link href="/login"><a>Login</a></Link></li>
            <li><Link href="/signup"><a>Signup</a></Link></li>
            <li><Link href="/games"><a>Games</a></Link></li>
            <li><Link href="/waiting-time"><a>Waiting Time</a></Link></li>
            <li><Link href="/join-game-room"><a>Join Game Room</a></Link></li>
          </ul>
          <button>Play Now</button>
        </nav>
      </header>

      <main>
        <section className="content">
          <h1>Welcome to Your Game</h1>
          <p>Description of your game goes here...</p>
        </section>
      </main>

      <footer className="footer">
        <nav>
          <ul>
            <li><Link href="/about-game"><a>About the Game</a></Link></li>
            <li><Link href="/about-us"><a>About Us</a></Link></li>
            <li><Link href="/about-project"><a>About the Project</a></Link></li>
            <li><Link href="/team"><a>Team</a></Link></li>
          </ul>
        </nav>
      </footer>

      <style jsx>{`
        .dark-theme {
          background-color: #111111;
          color: #ffffff;
          min-height: 100vh;
        }
        .header {
          background-color: #ffffff;
          color: #111111;
          padding: 20px;
        }
        .footer {
          background-color: #333333;
          padding: 20px;
        }
        .content {
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
