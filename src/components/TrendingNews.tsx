import { useState } from 'react';
import { TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TrendingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const trendingStories = [
    {
      id: 1,
      title: "ടെക് ഭീമൻമാർ പ്രധാന AI പങ്കാളിത്തം പ്രഖ്യാപിച്ചു",
      excerpt: "ധാർമ്മിക AI മാനദണ്ഡങ്ങൾ വികസിപ്പിക്കുന്നതിനായി മുൻനിര സാങ്കേതിക കമ്പനികൾ സഖ്യം രൂപീകരിച്ചു.",
      time: "1 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "സാങ്കേതികവിദ്യ",
      trending: 1
    },
    {
      id: 2,
      title: "ആഗോള വിപണികൾ റെക്കോർഡ് ഉയരത്തിലെത്തി",
      excerpt: "ലോകമെമ്പാടുമുള്ള ഓഹരി വിപണികൾ അഞ്ച് വർഷത്തിലെ ഏറ്റവും ശക്തമായ പ്രകടനം ആഘോഷിക്കുന്നു.",
      time: "2 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "ബിസിനസ്",
      trending: 2
    },
    {
      id: 3,
      title: "വിപ്ലവകരമായ മെഡിക്കൽ മുന്നേറ്റം",
      excerpt: "പരീക്ഷണങ്ങളിൽ 90% വിജയ നിരക്ക് കാണിക്കുന്ന പുതിയ ചികിത്സ ശാസ്ത്രജ്ഞർ വികസിപ്പിച്ചു.",
      time: "3 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      category: "ആരോഗ്യം",
      trending: 3
    },
    {
      id: 4,
      title: "ബഹിരാകാശ ദൗത്യം സാമ്പിളുകളുമായി തിരിച്ചെത്തി",
      excerpt: "ചരിത്രപരമായ ബഹിരാകാശ ദൗത്യം അഭൂതപൂർവമായ ശാസ്ത്രീയ ഡാറ്റ തിരികെ കൊണ്ടുവരുന്നു.",
      time: "4 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "ശാസ്ത്രം",
      trending: 4
    },
    {
      id: 5,
      title: "അന്താരാഷ്ട്ര വ്യാപാര കരാർ ഒപ്പിട്ടു",
      excerpt: "പ്രധാന സമ്പദ്‌വ്യവസ്ഥകൾ സുസ്ഥിര വ്യാപാര രീതികൾക്ക് പ്രതിബദ്ധത പ്രകടിപ്പിക്കുന്നു.",
      time: "5 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      category: "രാഷ്ട്രീയം",
      trending: 5
    },
    {
      id: 6,
      title: "ഒളിമ്പിക് ഗെയിംസ് തയ്യാറെടുപ്പ് അപ്ഡേറ്റ്",
      excerpt: "വരാനിരിക്കുന്ന അന്താരാഷ്ട്ര കായിക മത്സരങ്ങളിലെ ഏറ്റവും പുതിയ സംഭവവികാസങ്ങൾ.",
      time: "6 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop",
      category: "കായികം",
      trending: 6
    }
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold font-serif text-foreground">ട്രെൻഡിംഗ് ഇപ്പോൾ</h2>
        </div>
        <Button variant="ghost" className="group">
          എല്ലാം കാണുക
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden md:block">
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {trendingStories.map((story, index) => (
            <div
              key={story.id}
              className="flex-none w-80 group cursor-pointer"
              onClick={() => navigate(`/article/${story.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    #{story.trending}
                  </span>
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                    {story.category}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg leading-tight mb-2 group-hover:text-primary-foreground transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-2 line-clamp-2">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-white/80">
                    <Clock className="h-3 w-3" />
                    <span>{story.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {trendingStories.slice(0, 4).map((story, index) => (
          <div
            key={story.id}
            className="flex space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
            onClick={() => navigate(`/article/${story.id}`)}
          >
            <div className="relative">
              <span className="absolute -top-2 -left-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center z-10">
                {story.trending}
              </span>
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                  {story.category}
                </span>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{story.time}</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {story.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNews;
