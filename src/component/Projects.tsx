import { Github, ExternalLink } from 'lucide-react';
import DashboardImg from "../assets/Dasboard.png"

interface Project {
  id: number;
  title: string;
  description: string;
  tech?: string[];
  github?: string;
  demo?: string;
  image: string;
  loginDetails: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'Full-stack employee management solution with React, Node.js, and MongoDB featuring real-time employee data management, which include the employee deptartments, leave management, salary and attendance management for both Admin and employee sections.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/isiakaadamu02/EMS-frontend',
      demo: 'https://ems-frontend-silk.vercel.app',
      loginDetails: "email: admin@gmail.com, password: admin123",
      image: DashboardImg
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool with drag-and-drop kanban boards, team analytics, and real-time updates using WebSocket.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Firebase', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      loginDetails: "null",
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="18" fill="%23666"%3EProject Image%3C/text%3E%3C/svg%3E'
    },
    {
      id: 3,
      title: 'Conduent Website',
      description: 'Part of a legacy project i have worked on',
      demo: "https://www.conduent.com/",
      loginDetails: "null",
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="18" fill="%23666"%3EProject Image%3C/text%3E%3C/svg%3E'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A selection of recent work showcasing my expertise in building modern web applications
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.loginDetails}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}