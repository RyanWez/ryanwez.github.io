'use client';
import Link from 'next/link';

interface IconProps {
  className?: string;
}

const FacebookIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const TelegramIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const GithubIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const socialLinks = [
    { name: "GitHub", href: "https://github.com/RyanWez", icon: <GithubIcon className="w-6 h-6"/>, hoverColor: 'hover:bg-[#333]' },
    { name: "Facebook", href: "https://www.facebook.com/ryanwez0", icon: <FacebookIcon className="w-6 h-6"/>, hoverColor: 'hover:bg-[#1877F2]' },
    { name: "Telegram", href: "https://t.me/RyanWez", icon: <TelegramIcon className="w-6 h-6"/>, hoverColor: 'hover:bg-[#2AABEE]' },
];

const Contact = () => {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Get in Touch</h2>
      <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
        I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex gap-6 justify-center">
        {socialLinks.map(link => (
          <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`My ${link.name} profile`} className={`w-14 h-14 flex items-center justify-center rounded-full glass text-foreground transition-all duration-300 hover:text-white hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/20 ${link.hoverColor}`}>
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Contact;
