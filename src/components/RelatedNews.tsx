
import { Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RelatedNewsProps {
  currentArticleId: number;
}

const RelatedNews = ({ currentArticleId }: RelatedNewsProps) => {
  const navigate = useNavigate();

  const relatedArticles = [
    {
      id: 3,
      title: "പുതിയ സൗരോർജ്ജ പദ്ധതി കേരളത്തിൽ",
      author: "രാജേഷ് കുമാർ",
      time: "1 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=300&h=200&fit=crop",
      category: "പരിസ്ഥിതി"
    },
    {
      id: 4,
      title: "ഡിജിറ്റൽ ഇന്ത്യ പദ്ധതിയിൽ പുതിയ മാനങ്ങൾ",
      author: "പ്രിയ നായർ",
      time: "3 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "സാങ്കേതികവിദ്യ"
    },
    {
      id: 5,
      title: "കാർഷിക മേഖലയിൽ നവീകരണ സാങ്കേതികവിദ്യ",
      author: "അനിൽ മേനോൻ",
      time: "5 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      category: "കൃഷി"
    },
    {
      id: 6,
      title: "സ്മാർട്ട് സിറ്റി പദ്ധതിയുടെ പുരോഗതി",
      author: "സുനിൽ രാജ്",
      time: "7 മണിക്കൂർ മുമ്പ്",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      category: "നഗരവികസനം"
    }
  ].filter(article => article.id !== currentArticleId);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">സമാന വാർത്തകൾ</h3>
      
      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => navigate(`/article/${article.id}`)}
            className="group cursor-pointer bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex space-x-3">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-1 space-y-2">
                <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                  {article.category}
                </span>
                
                <h4 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
