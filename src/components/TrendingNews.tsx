
import { useState } from 'react';
import { TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrendingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingStories = [
    {
      id: 1,
      title: "Tech Giants Announce Major AI Partnership",
      excerpt: "Leading technology companies form alliance to develop ethical AI standards.",
      time: "1 hour ago",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "Technology",
      trending: 1
    },
    {
      id: 2,
      title: "Global Markets Reach Record Highs",
      excerpt: "Stock markets worldwide celebrate strongest performance in five years.",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "Business",
      trending: 2
    },
    {
      id: 3,
      title: "Revolutionary Medical Breakthrough",
      excerpt: "Scientists develop new treatment showing 90% success rate in trials.",
      time: "3 hours ago",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      category: "Health",
      trending: 3
    },
    {
      id: 4,
      title: "Space Mission Returns with Samples",
      excerpt: "Historic space mission brings back unprecedented scientific data.",
      time: "4 hours ago",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Science",
      trending: 4
    },
    {
      id: 5,
      title: "International Trade Agreement Signed",
      excerpt: "Major economies commit to sustainable trade practices.",
      time: "5 hours ago",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      category: "Politics",
      trending: 5
    },
    {
      id: 6,
      title: "Olympic Games Preparation Update",
      excerpt: "Latest developments in upcoming international sporting events.",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop",
      category: "Sports",
      trending: 6
    }
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold font-serif text-foreground">Trending Now</h2>
        </div>
        <Button variant="ghost" className="group">
          View All
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
