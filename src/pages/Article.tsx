
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, User, Share2, Facebook, Twitter, ArrowLeft, MessageSquare, ThumbsUp, Bookmark, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import RelatedNews from '../components/RelatedNews';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sample article data - in a real app, this would come from API
  const getArticleById = (articleId: string) => {
    const articles = {
      "1": {
        id: 1,
        title: "ആഗോള കാലാവസ്ഥാ ഉച്ചകോടി ചരിത്രപരമായ കരാറിലെത്തി",
        content: `
          <p>2050-ഓടെ കാർബൺ ന്യൂട്രാലിറ്റിക്കായി ബൈൻഡിംഗ് പ്രതിബദ്ധതകളോടെ അഭൂതപൂർവമായ കാലാവസ്ഥാ പ്രവർത്തന പദ്ധതിയിൽ ലോക നേതാക്കൾ ഒന്നിച്ചു.</p>
          
          <p>ലോകമെമ്പാടുമുള്ള 195 രാജ്യങ്ങളിൽ നിന്നുള്ള പ്രതിനിധികൾ പങ്കെടുത്ത മൂന്ന് ദിവസത്തെ തീവ്രമായ ചർച്ചകൾക്ക് ശേഷമാണ് ഈ ചരിത്രപരമായ കരാർ ഒപ്പിട്ടത്. കാലാവസ്ഥാ മാറ്റത്തിനെതിരായ പോരാട്ടത്തിൽ ഇത് ഒരു നിർണായക നിമിഷമായി കണക്കാക്കപ്പെടുന്നു.</p>

          <h3>പ്രധാന കരാർ വ്യവസ്ഥകൾ</h3>
          <ul>
            <li>2030-ഓടെ ആഗോള ഉദ്‌വമനം 50% കുറയ്ക്കുക</li>
            <li>2050-ഓടെ പൂർണ്ണ കാർബൺ ന്യൂട്രാലിറ്റി നേടുക</li>
            <li>പുനരുപയോഗ ഊർജത്തിലേക്കുള്ള പരിവർത്തനം ത്വരിതപ്പെടുത്തുക</li>
            <li>വികസ്വര രാജ്യങ്ങൾക്ക് കാലാവസ്ഥാ ധനസഹായം വർധിപ്പിക്കുക</li>
          </ul>

          <p>ഈ കരാറിൽ നിന്ന് പ്രതീക്ഷിക്കുന്ന ഫലങ്ങൾ അടുത്ത ദശകത്തിൽ കാണാനാകുമെന്ന് വിദഗ്ധർ പ്രതീക്ഷിക്കുന്നു. സാങ്കേതിക നവീകരണവും അന്താരാഷ്ട്ര സഹകരണവും ഈ ലക്ഷ്യങ്ങൾ കൈവരിക്കുന്നതിൽ നിർണായക പങ്ക് വഹിക്കുമെന്ന് കരുതപ്പെടുന്നു.</p>

          <h3>ഇന്ത്യയുടെ സ്ഥാനം</h3>
          <p>ഇന്ത്യ ഈ കരാറിൽ ഒപ്പുവെച്ച പ്രധാന രാജ്യങ്ങളിലൊന്നാണ്. സൗരോർജ്ജ ഉൽപ്പാദനത്തിൽ ലോകത്തെ മുൻനിര രാജ്യമായി മാറുകയാണ് ഇന്ത്യയുടെ ലക്ഷ്യം. 2030-ഓടെ 500 ജിഗാവാട്ട് പുനരുപയോഗ ഊർജ്ജ ശേഷി കൈവരിക്കാൻ ഇന്ത്യ പ്രതിജ്ഞാബദ്ധമാണ്.</p>
        `,
        author: "സാറാ ജോൺസൺ",
        time: "2 മണിക്കൂർ മുമ്പ്",
        publishDate: "2024-01-15",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
        category: "പരിസ്ഥിതി",
        tags: ["കാലാവസ്ഥാ മാറ്റം", "പരിസ്ഥിതി", "അന്താരാഷ്ട്ര", "രാഷ്ട്രീയം"],
        readTime: "5 മിനിറ്റ് വായന",
        views: "12,456"
      },
      "2": {
        id: 2,
        title: "വിപ്ലവകരമായ AI സാങ്കേതികവിദ്യ ആരോഗ്യരംഗത്തെ രൂപാന്തരപ്പെടുത്തുന്നു",
        content: `
          <p>പുതിയ AI സിസ്റ്റം രോഗനിർണയത്തിൽ 95% കൃത്യത പ്രകടിപ്പിക്കുന്നു, മെഡിക്കൽ ഡയഗ്നോസ്റ്റിക്സിൽ വിപ്ലവം വാഗ്ദാനം ചെയ്യുന്നു.</p>
          
          <p>ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസിന്റെ ശക്തി ഉപയോഗിച്ച് മെഡിക്കൽ രംഗത്ത് പുതിയ മാനങ്ങൾ സൃഷ്ടിക്കുന്ന സാങ്കേതികവിദ്യയാണ് ഇപ്പോൾ വികസിപ്പിച്ചിരിക്കുന്നത്. ഇത് രോഗനിർണയത്തിൽ മാത്രമല്ല, ചികിത്സാ പദ്ധതികളിലും വിപ്ലവകരമായ മാറ്റങ്ങൾ കൊണ്ടുവരുമെന്ന് പ്രതീക്ഷിക്കുന്നു.</p>

          <h3>AI സിസ്റ്റത്തിന്റെ പ്രത്യേകതകൾ</h3>
          <ul>
            <li>രോഗനിർണയത്തിൽ 95% കൃത്യത</li>
            <li>സെക്കൻഡുകൾക്കുള്ളിൽ ഫലം ലഭിക്കുന്ന വേഗത</li>
            <li>24/7 ലഭ്യത</li>
            <li>മനുഷ്യ പിശകുകൾ കുറയ്ക്കൽ</li>
          </ul>

          <p>ഈ സാങ്കേതികവിദ്യ ഗ്രാമീണ മേഖലകളിലേക്ക് ഗുണനിലവാരമുള്ള ആരോഗ്യ സേവനങ്ങൾ എത്തിക്കുന്നതിൽ നിർണായക പങ്ക് വഹിക്കുമെന്ന് വിദഗ്ധർ അഭിപ്രായപ്പെടുന്നു.</p>
        `,
        author: "ഡോ. മൈക്കൽ ചെൻ",
        time: "4 മണിക്കൂർ മുമ്പ്",
        publishDate: "2024-01-15",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        category: "സാങ്കേതികവിദ്യ",
        tags: ["AI", "ആരോഗ്യം", "സാങ്കേതികവിദ്യ", "നവീകരണം"],
        readTime: "4 മിനിറ്റ് വായന",
        views: "8,234"
      }
    };
    
    return articles[articleId as keyof typeof articles] || null;
  };

  useEffect(() => {
    if (id) {
      const articleData = getArticleById(id);
      setArticle(articleData);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">വാർത്ത കണ്ടെത്തിയില്ല</h1>
          <Button onClick={() => navigate('/')}>ഹോമിലേക്ക് തിരികെ പോകുക</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-3">
            <article className="space-y-6">
              {/* Back Button */}
              <Button 
                variant="ghost" 
                onClick={() => navigate(-1)}
                className="mb-4 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                തിരികെ
              </Button>

              {/* Category & Metadata */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold font-serif leading-tight">
                  {article.title}
                </h1>

                <div className="flex items-center justify-between py-4 border-y">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.views} കാഴ്ചകൾ</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      പങ്കിടുക
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-6">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="text-foreground leading-relaxed space-y-4"
                />
              </div>

              {/* Tags */}
              <div className="pt-6 border-t">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-muted-foreground">ടാഗുകൾ:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Share */}
              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">ഈ വാർത്ത പങ്കിടുക</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <AdBanner type="sidebar" />
            <RelatedNews currentArticleId={article.id} />
            <AdBanner type="mobile" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
