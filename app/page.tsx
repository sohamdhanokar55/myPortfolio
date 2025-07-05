"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Code,
  Database,
  Globe,
  Trophy,
  GraduationCap,
  User,
  Briefcase,
  ChevronDown,
  Star,
  Dumbbell,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  type Achievement = {
    title: string;
    description: string;
    date: string;
    icon: JSX.Element;
    image?: string;
  };

  const skills = [
    {
      name: "Next.js",
      level: "Expert",
      icon: <Globe className="w-5 h-5" />,
      href: "https://nextjs.org/",
    },
    {
      name: "React.js",
      level: "Expert",
      icon: <Code className="w-5 h-5" />,
      href: "https://reactjs.org/",
    },
    {
      name: "Firebase",
      level: "Advanced",
      icon: <Database className="w-5 h-5" />,
      href: "https://firebase.google.com/",
    },
    {
      name: "JavaScript",
      level: "Expert",
      icon: <Code className="w-5 h-5" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Java",
      level: "Intermediate",
      icon: <Code className="w-5 h-5" />,
      href: "https://www.java.com/",
    },
    {
      name: "Python",
      level: "Intermediate",
      icon: <Code className="w-5 h-5" />,
      href: "https://www.python.org/",
    },
  ];

  const projects = [
    {
      title: "Codecratz 2025 Website",
      description:
        "A website created for hosting a 24 hour live hackathon at Agnel Polytechnic on 17th-18th January. We showcased various problem statements, declared results, and also provided with the contact information",
      tech: ["Html", "Javascript", "CSS", "Firebase"],
      image: "/assets/images/codecratz.png",
      github: "#",
      live: "https://codecratz.in/",
    },
    {
      title: "Late-Comers System",
      description:
        "A modern web application to automate and manage the late comers attendance and fine system for colleges Built as a real-world project for my college's official late comers tracking and reporting.",
      tech: ["Next.js", "React", "Tailwind CSS", "Firebase"],
      image: "/assets/images/late-comers.png",
      github: "https://github.com/sohamdhanokar55/new-late-comers-next.git",
      live: "#",
    },
    {
      title: "Broodl - Mood Tracker",
      description:
        "A modern web application built with Next.js, featuring authentication, a dashboard, and a suite of reusable UI components. Powered by Firebase for backend services",
      tech: ["React JS", "Tailwind CSS", "Firebase"],
      image: "/assets/images/broodl.png",
      github: "https://github.com/sohamdhanokar55/broodl.git",
      live: "https://broodl-blond.vercel.app/",
    },
  ];

  const achievements = [
    {
      title: "Hackathon",
      description:
        "Grand Finalist Team in Technothon held by VES Polytechnic, Chembur",
      date: "2025",
      icon: <Star className="w-6 h-6" />,
      image: "/assets/images/ves.jpg",
    },
    {
      title: "Clue Chronicle",
      description: "Best Project Award at Agnel Polytechnic Tech Fest",
      date: "2024",
      icon: <Award className="w-6 h-6" />,
      image: "/assets/images/cluechronicle.jpg",
    },
    {
      title: "Technical Paper Presentation",
      description: "Top 10 finalist in State-level Programming Contest",
      date: "2023",
      icon: <Trophy className="w-6 h-6" />,
      image: "/assets/images/bvit.png",
    },
  ];

  const coCurricularActivities = [
    {
      title: "Marathon Runner",
      description: "Active Member of Run club organizing marathons and events",
      date: "2024",
      icon: <Dumbbell className="w-6 h-6" />,
      image: "/assets/images/run.jpg",
    },
    {
      title: "OCM Head",
      description: "Conducted web development workshops for junior students",
      date: "2024",
      icon: <Award className="w-6 h-6" />,
      image: "/assets/images/OCM.png",
    },
    {
      title: "Mr. Agnel",
      description:
        "Was awarded the title Mr.Agnel at Fashion show competition held at Agnel Polytechnic",
      date: "2025",
      icon: <Trophy className="w-6 h-6" />,
      image: "/assets/images/agnel.jpg",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedAchievement(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div
          className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <img
                src="/assets/images/myPhoto.jpg" // Or use the new image path
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Soham Dhanokar
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              Full-Stack Developer & Student
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              Agnel Polytechnic, Vashi • Diploma Student
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                Next.js Expert
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                React Specialist
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Firebase Developer
              </Badge>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate Artificial Intelligence and Machine Learning student
              with expertise in modern web development technologies. I love
              building innovative solutions and competing in coding challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Diploma in Artificial Intelligence and Machine Learning
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Agnel Polytechnic Vashi • Currently pursuing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Trophy className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Competition Enthusiast
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Active participant in coding competitions and hackathons
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Full-Stack Developer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Specializing in modern web technologies and frameworks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <a
                        href={skill.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600">{skill.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {skill.level}
                            </p>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects that demonstrate my skills and passion
              for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Competitions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Recognition and awards from various competitions and events
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleAchievementClick(achievement)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-full text-white">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                          {achievement.description}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Achievement Photo</DialogTitle>
              <DialogDescription>
                {selectedAchievement ? (
                  <span>{selectedAchievement.title}</span>
                ) : null}
              </DialogDescription>
            </DialogHeader>
            {selectedAchievement && selectedAchievement.image && (
              <div className="mt-4">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="max-h-96 w-full object-contain rounded shadow border mx-auto"
                />
              </div>
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDialogClose}
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Co-Curricular Activities Section */}
      <section
        id="co-curricular"
        className="py-20 px-4 bg-white dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Co-Curricular Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beyond academics - my involvement in various college activities
              and leadership roles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coCurricularActivities.map((activity, index) => (
              <div key={index}>
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer "
                  onClick={() => handleAchievementClick(activity)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-2 rounded-full text-white">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {activity.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                          {activity.description}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {activity.date}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects.
              Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    sosadhanokar@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    +91 9321895202
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Seawoods, Navi Mumbai, India
                  </span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/sohamdhanokar55"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/soham-dhanokar-13807a355/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm currently available for internships, freelance projects, and
                collaboration opportunities. Whether you have a project in mind
                or just want to chat about technology, I'd love to hear from
                you.
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <a href="mailto:sosadhanokar@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Me a Message
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            © 2025 Soham Dhanokar. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
