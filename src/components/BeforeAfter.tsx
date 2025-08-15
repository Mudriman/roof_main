// components/BeforeAfter.tsx
import { Project } from "../constants/type";

interface BeforeAfterProps {
  project: Project;
}

export const BeforeAfter = ({ project }: BeforeAfterProps) => {
  if (!project.beforeAfter) return null;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        До / После
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { type: 'before', image: project.beforeAfter.before, label: 'До' },
          { type: 'after', image: project.beforeAfter.after, label: 'После' }
        ].map((item) => (
          <div key={item.type} className="flex flex-col items-center">
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <img
                src={item.image}
                alt={`${project.title} - ${item.label}`}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="mt-4 text-xl font-semibold text-gray-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};