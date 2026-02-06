
interface Skill {
  category: string;
  items: string[];
}

export default function Skills() {
  const skills: Skill[] = [
    {
      category: 'Frontend Development',
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js']
    },
    // {
    //   category: 'Backend Development',
    //   items: [ 'Python', 'RESTful APIs', 'GraphQL']
    // },
    {
      category: 'Database & Tools',
      items: ['MySQL', 'Firebase', 'Git', 'Docker', 'AWS']
    },
    {
      category: 'Design & UX',
      items: ['Figma', 'Responsive Design', 'Accessibility', 'UI/UX Principles']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}