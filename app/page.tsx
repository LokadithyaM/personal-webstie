import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/video-player"
import SkillCard from "@/components/skill-card"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Lokadithya Matti</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="https://github.com/LokadithyaM"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/lokadithya-matti-8b84a926b"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-primary">Lokadithya</span>
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              I’m a Computer Science professional with a deep focus on building systems from first principles. I design and engineer innovative, scalable solutions that drive long-term business growth and technological resilience. My work bridges theoretical understanding with practical application—enabling organizations to solve complex problems, optimize performance, and stay ahead in a rapidly evolving digital landscape.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary">
                <Image
                  src="/profile.png?height=300&width=300"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

{/* About Section */}
<section id="about" className="bg-muted py-16">
  <div className="container space-y-8">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        Learn more about my background, experience, and what drives me.
      </p>
    </div>
    
    <div className="mx-auto max-w-3xl space-y-6 text-center">
      <p className="text-lg leading-relaxed">
        I’m a third-year Computer Science and Engineering student with a strong passion for computational theory, blockchain, and metaheuristics. Over the past few years, I’ve gained hands-on experience in algorithmic problem-solving, specifically in the Traveling Salesman Problem, where I improved genetic algorithm performance through data segregation and multi-round feeding. Additionally, I’ve developed a job scheduling algorithm by blending reinforcement learning with GRASP-oriented concepts.
      </p>
      
      <p className="text-lg leading-relaxed">
        Recently, my focus has been on product shipping and development, primarily using the Next.js framework. This has been my full attention lately, and I am thoroughly enjoying working on real-world applications.
      </p>

      <p className="text-lg leading-relaxed">
        I’ve qualified for GATE, solved over 800 problems on LeetCode, and am proficient in Java and Next.js. I’m currently exploring Go and diving into distributed systems research to expand my technical toolkit even further.
      </p>

      <p className="text-lg leading-relaxed">
        If you're interested in discussing algorithms, product development, or anything tech-related, feel free to reach out!
      </p>
    </div>
  </div>
</section>


        {/* Skills Section */}
        <section id="skills" className="py-16">
  <div className="container space-y-6">
    <div className="space-y-2 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        Here are some of the key skills and technologies I specialize in.
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <SkillCard
        title="Java Programming"
        description="Strong grasp of OOP, multithreading, and backend systems with Java."
        icon="Code"
      />
      <SkillCard
        title="Next.js"
        description="Production-ready full-stack apps with SSR, API routes, and React-based architecture."
        icon="Layout"
      />
      <SkillCard
        title="TypeScript"
        description="Robust type safety and scalable codebases with modern JavaScript tooling."
        icon="FileCode"
      />
      <SkillCard
        title="Redis"
        description="In-memory data stores for session management, caching, and real-time pipelines."
        icon="Bolt"
      />
      <SkillCard
        title="MongoDB"
        description="NoSQL document modeling and schema design for scalable web applications."
        icon="Database"
      />
      <SkillCard
        title="SQL"
        description="Relational query logic and normalization; proficient in MySQL and PostgreSQL."
        icon="Table"
      />
      <SkillCard
        title="System Design"
        description="Architecting scalable, reliable systems; experience with queues, load balancers, databases."
        icon="Layers"
      />
      <SkillCard
        title="Git & Version Control"
        description="Efficient with branching, rebasing, and collaborative workflows."
        icon="GitBranch"
      />
      <SkillCard
        title="Vercel Deployment"
        description="Streamlined CI/CD pipelines for deploying Next.js apps via Vercel."
        icon="Cloud"
      />
      <SkillCard
        title="Data Structures & Algorithms"
        description="Over 800 LeetCode problems solved; focused on optimization and complexity reduction."
        icon="Cpu"
      />
      <SkillCard
        title="Technical Research"
        description="Experience in metaheuristics, scheduling problems, and foundational CS concepts."
        icon="BookOpen"
      />
    </div>
  </div>
</section>


        {/* Projects Section */}
        <section id="projects" className="bg-muted py-16">
          <div className="container space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Check out some of my recent work and product demonstrations.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Project 1"
                description="Now Lite is a fast, AI-powered ticketing and team communication system built for real-time collaboration and automation."
                imageUrl="/p1.png?height=200&width=400"
                demoUrl="https://youtu.be/9-WiS6_1N4o?si=NvsFMr6KLc2_egD8"
                projectUrl="https://github.com/LokadithyaM/ServiceNow-lite"
              />
              <ProjectCard
                title="Project 2"
                description="Awake is a minimal, AI-powered goal-tracking platform that combines real-time insights, mentorship chat, and seamless productivity tools.."
                imageUrl="/image.png?height=200&width=400"
                demoUrl="https://youtu.be/pqpSk4MElFo"
                projectUrl="https://github.com/LokadithyaM/Awake"
              />
              <ProjectCard
                title="Project 3"
                description="AI-driven e-commerce engine that lets users search products in natural language, scrapes real-time data, and delivers intelligent purchase insights."
                imageUrl="/image copy.png?height=200&width=400"
                demoUrl="https://youtu.be/gMYg6bbVuBM"
                projectUrl="https://github.com/LokadithyaM/hollow"
              />
            </div>
            <div className="flex justify-center pt-8">
              <Button variant="outline" asChild>
                <Link href="https://github.com/LokadithyaM?tab=repositories">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

{/* Featured LeetCode Section */}
<section className="py-16">
  <div className="container space-y-6">
    <div className="space-y-2 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">LeetCode Profile</h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        Over 800+ problems solved, focusing on core algorithmic thinking and data structure mastery.
      </p>
    </div>
    <div className="mx-auto max-w-4xl flex justify-center">
      <a
        href="https://leetcode.com/Lokadithya_M/" // replace with your actual handle if different
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-xl border border-border bg-muted p-6 text-center shadow-sm transition-all hover:shadow-lg"
      >
        <h3 className="text-2xl font-semibold">Visit My LeetCode Profile</h3>
        <p className="text-muted-foreground mt-2">leetcode.com/LokadithyaM</p>
      </a>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <p className="text-lg">lokad1thya.m@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <p className="text-lg">www.linkedin.com/in/lokadithya-matti-8b84a926b</p>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-6 w-6 text-primary" />
                  <p className="text-lg">https://github.com/LokadithyaM</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Lokadithya Matti. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/LokadithyaM"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/lokadithya-matti-8b84a926b"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
