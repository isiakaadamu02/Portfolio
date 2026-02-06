import { Download } from 'lucide-react';
import resumePDF from "../assets/Isiaka AdamuCV.pdf"

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
          Resume
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Download my resume to learn more about my experience, education, and professional background
        </p>
        
        <a
          href={resumePDF}
          download
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>
    </section>
  );
}