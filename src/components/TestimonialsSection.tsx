import type {Testimonial} from "../../constants/type";

interface TestimonialsSectionProps {
  title?: string;
  testimonials: Testimonial[];
  itemsPerPage?: number;
}

interface TestimonialCardProps {
  testimonial: {
    text: string;
    author: string;
    position: string;
    avatar?: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
      <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
          {testimonial.avatar ? (
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              {testimonial.author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = ({
  title = "Отзывы наших клиентов",
  testimonials
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};