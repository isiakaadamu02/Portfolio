
interface CTAProps {
  scrollToSection: (sectionId: string) => void;
}

export default function CTA({ scrollToSection }: CTAProps) {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Let's Build Something Amazing
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to new opportunities
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium cursor-pointer"
        >
          Start a Conversation
        </button>
      </div>
    </section>
  );
}