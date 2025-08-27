import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Ryan Wez Portfolio",
  description: "Explore innovative AI-powered projects by Ryan Wez including SayarKaung, Employee-MM, MiYanMar AI, and other cutting-edge web applications.",
  keywords: ["Ryan Wez Projects", "AI Projects", "Web Applications", "Chatbots", "SayarKaung", "Employee-MM", "MiYanMar AI"],
  openGraph: {
    title: "Projects - Ryan Wez Portfolio",
    description: "Explore innovative AI-powered projects and web applications",
    images: [
      {
        url: "/og-image-projects.png",
        width: 1200,
        height: 630,
        alt: "Ryan Wez Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div>
      {/* Projects content will be here */}
      <h1>Projects</h1>
    </div>
  );
}