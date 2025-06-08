
import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryNewsProps {
  category: string;
}

const CategoryNews = ({ category }: CategoryNewsProps) => {
  // Sample data - in a real app, this would come from props or API
  const getNewsData = (category: string) => {
    const newsData: Record<string, any[]> = {
      Politics: [
        {
          id: 1,
          title: "Senate Passes Historic Infrastructure Bill",
          excerpt: "Bipartisan legislation allocates $1.2 trillion for roads, bridges, and broadband expansion across the nation.",
          author: "Emma Thompson",
          time: "3 hours ago",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
          readTime: "4 min read"
        },
        {
          id: 2,
          title: "International Summit Addresses Trade Relations",
          excerpt: "World leaders gather to discuss new trade agreements and economic cooperation initiatives.",
          author: "James Wilson",
          time: "5 hours ago",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
          readTime: "3 min read"
        },
        {
          id: 3,
          title: "New Environmental Policy Announced",
          excerpt: "Government unveils comprehensive plan to reduce carbon emissions by 50% within the next decade.",
          author: "Sarah Green",
          time: "8 hours ago",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          readTime: "5 min read"
        }
      ],
      Technology: [
        {
          id: 1,
          title: "AI Revolution in Healthcare Diagnostics",
          excerpt: "Machine learning algorithms now detect diseases with 95% accuracy, transforming medical practice.",
          author: "Dr. Alex Kumar",
          time: "2 hours ago",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
          readTime: "6 min read"
        },
        {
          id: 2,
          title: "Quantum Computing Breakthrough Achieved",
          excerpt: "Scientists successfully demonstrate quantum supremacy in complex problem-solving applications.",
          author: "Maria Rodriguez",
          time: "4 hours ago",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
          readTime: "4 min read"
        },
        {
          id: 3,
          title: "Sustainable Tech Solutions Gain Momentum",
          excerpt: "Green technology startups receive record funding for renewable energy innovations.",
          author: "Tom Chen",
          time: "7 hours ago",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
          readTime: "3 min read"
        }
      ],
      Sports: [
        {
          id: 1,
          title: "World Cup Qualifiers Deliver Shocking Results",
          excerpt: "Underdog teams secure surprising victories in yesterday's qualification matches.",
          author: "Mike Johnson",
          time: "1 hour ago",
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
          readTime: "2 min read"
        },
        {
          id: 2,
          title: "Olympic Records Broken at National Championships",
          excerpt: "Athletes set new world records ahead of upcoming international competitions.",
          author: "Lisa Park",
          time: "6 hours ago",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
          readTime: "3 min read"
        },
        {
          id: 3,
          title: "Esports Industry Reaches New Heights",
          excerpt: "Professional gaming tournaments attract record viewership and prize pools.",
          author: "Kevin Lee",
          time: "9 hours ago",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop",
          readTime: "4 min read"
        }
      ],
      Entertainment: [
        {
          id: 1,
          title: "Blockbuster Film Breaks Opening Weekend Records",
          excerpt: "Latest superhero movie shatters box office expectations with $300M global debut.",
          author: "Jennifer Adams",
          time: "3 hours ago",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
          readTime: "3 min read"
        },
        {
          id: 2,
          title: "Streaming Platform Announces Original Series",
          excerpt: "Major streaming service invests $2B in exclusive content for upcoming season.",
          author: "Robert Davis",
          time: "5 hours ago",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
          readTime: "2 min read"
        },
        {
          id: 3,
          title: "Music Festival Returns with Star-Studded Lineup",
          excerpt: "Annual music celebration announces headliners including Grammy winners and rising stars.",
          author: "Amanda White",
          time: "7 hours ago",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          readTime: "4 min read"
        }
      ],
      Business: [
        {
          id: 1,
          title: "Tech Stock Rally Continues for Third Week",
          excerpt: "Technology sector leads market gains as investors show confidence in innovation companies.",
          author: "David Kim",
          time: "4 hours ago",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
          readTime: "5 min read"
        },
        {
          id: 2,
          title: "Startup Funding Reaches Record High",
          excerpt: "Venture capital investments surge as entrepreneurs launch innovative solutions.",
          author: "Rachel Brown",
          time: "6 hours ago",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
          readTime: "3 min read"
        },
        {
          id: 3,
          title: "Sustainable Business Practices Gain Adoption",
          excerpt: "Corporations embrace environmental responsibility as consumers demand eco-friendly options.",
          author: "Steve Miller",
          time: "8 hours ago",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
          readTime: "4 min read"
        }
      ]
    };
    
    return newsData[category] || [];
  };

  const news = getNewsData(category);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-serif text-foreground">{category}</h2>
        <Button variant="ghost" className="group">
          View More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <article
            key={article.id}
            className={`group cursor-pointer ${
              index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className={`font-semibold leading-tight group-hover:text-primary transition-colors ${
                  index === 0 ? 'text-xl' : 'text-lg'
                }`}>
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                  <span className="font-medium">{article.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryNews;
