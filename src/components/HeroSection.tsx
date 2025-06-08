
import { useState, useEffect } from 'react';
import { Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredStories = [
    {
      id: 1,
      title: "ആഗോള കാലാവസ്ഥാ ഉച്ചകോടി ചരിത്രപരമായ കരാറിലെത്തി",
      excerpt: "2050-ഓടെ കാർബൺ ന്യൂട്രാലിറ്റിക്കായി ബൈൻഡിംഗ് പ്രതിബദ്ധതകളോടെ അഭൂതപൂർവമായ കാലാവസ്ഥാ പ്രവർത്തന പദ്ധതിയിൽ ലോക നേതാക്കൾ ഒന്നിച്ചു.",
      author: "സാറാ ജോൺസൺ",
      time: "2 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
      category: "പരിസ്ഥിതി"
    },
    {
      id: 2,
      title: "വിപ്ലവകരമായ AI സാങ്കേതികവിദ്യ ആരോഗ്യരംഗത്തെ രൂപാന്തരപ്പെടുത്തുന്നു",
      excerpt: "പുതിയ AI സിസ്റ്റം രോഗനിർണയത്തിൽ 95% കൃത്യത പ്രകടിപ്പിക്കുന്നു, മെഡിക്കൽ ഡയഗ്നോസ്റ്റിക്സിൽ വിപ്ലവം വാഗ്ദാനം ചെയ്യുന്നു.",
      author: "ഡോ. മൈക്കൽ ചെൻ",
      time: "4 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      category: "സാങ്കേതികവിദ്യ"
    },
    {
      id: 3,
      title: "അന്താരാഷ്ട്ര ബഹിരാകാശ ദൗത്യം പുതിയ എക്സോപ്ലാനറ്റ് കണ്ടെത്തി",
      excerpt: "ജീവസാധ്യമായ മേഖലയിൽ ഭൂമിക്ക് സമാനമായ ഗ്രഹം ശാസ്ത്രജ്ഞർ സ്ഥിരീകരിച്ചു, ബഹിരാകാശ ജീവിതത്തിന്റെ സാധ്യതകൾ ഉയർത്തുന്നു.",
      author: "എമ്മാ റോഡ്രിഗസ്",
      time: "6 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=500&fit=crop",
      category: "ശാസ്ത്രം"
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
                ബ്രേക്കിംഗ്
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
              പൂർണ്ണ വാർത്ത വായിക്കുക
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
