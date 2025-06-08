
import { useState, useEffect } from 'react';
import { Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredStories = [
    {
      id: 1,
      title: "Global Climate Summit Reaches Historic Agreement",
      excerpt: "World leaders unite on unprecedented climate action plan with binding commitments for carbon neutrality by 2050.",
      author: "Sarah Johnson",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
      category: "Environment"
    },
    {
      id: 2,
      title: "Revolutionary AI Technology Transforms Healthcare",
      excerpt: "New AI system demonstrates 95% accuracy in early disease detection, promising to revolutionize medical diagnostics.",
      author: "Dr. Michael Chen",
      time: "4 hours ago",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      category: "Technology"
    },
    {
      id: 3,
      title: "International Space Mission Discovers New Exoplanet",
      excerpt: "Scientists confirm Earth-like planet in habitable zone, raising possibilities for extraterrestrial life.",
      author: "Emma Rodriguez",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=500&fit=crop",
      category: "Science"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredStories.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured Story */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                BREAKING
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-foreground">
              {featuredStories[currentSlide].title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuredStories[currentSlide].excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{featuredStories[currentSlide].author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{featuredStories[currentSlide].time}</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Read Full Story
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={featuredStories[currentSlide].image}
                alt={featuredStories[currentSlide].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {featuredStories[currentSlide].category}
                </span>
              </div>
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {featuredStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
