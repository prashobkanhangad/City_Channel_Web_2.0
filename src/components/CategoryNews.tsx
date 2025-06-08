
import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryNewsProps {
  category: string;
}

const CategoryNews = ({ category }: CategoryNewsProps) => {
  // Sample data - in a real app, this would come from props or API
  const getNewsData = (category: string) => {
    const newsData: Record<string, any[]> = {
      രാഷ്ട്രീയം: [
        {
          id: 1,
          title: "സെനറ്റ് ചരിത്രപരമായ ഇൻഫ്രാസ്ട്രക്ചർ ബിൽ പാസ്സാക്കി",
          excerpt: "രാജ്യത്തുടനീളം റോഡുകൾ, പാലങ്ങൾ, ബ്രോഡ്ബാൻഡ് വിപുലീകരണം എന്നിവയ്ക്കായി $1.2 ട്രില്യൺ അനുവദിക്കുന്ന ഉഭകക്ഷി നിയമനിർമ്മാണം.",
          author: "എമ്മാ തോംസൺ",
          time: "3 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
          readTime: "4 മിനിറ്റ് വായന"
        },
        {
          id: 2,
          title: "അന്താരാഷ്ട്ര ഉച്ചകോടി വ്യാപാര ബന്ധങ്ങൾ അഭിസംബോധന ചെയ്യുന്നു",
          excerpt: "പുതിയ വ്യാപാര കരാറുകളും സാമ്പത്തിക സഹകരണ സംരംഭങ്ങളും ചർച്ച ചെയ്യാൻ ലോക നേതാക്കൾ ഒത്തുകൂടുന്നു.",
          author: "ജെയിംസ് വിൽസൺ",
          time: "5 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
          readTime: "3 മിനിറ്റ് വായന"
        },
        {
          id: 3,
          title: "പുതിയ പരിസ്ഥിതി നയം പ്രഖ്യാപിച്ചു",
          excerpt: "അടുത്ത ദശകത്തിനുള്ളിൽ കാർബൺ പുറന്തള്ളൽ 50% കുറയ്ക്കുന്നതിനുള്ള സമഗ്ര പദ്ധതി സർക്കാർ അനാവരണം ചെയ്തു.",
          author: "സാറാ ഗ്രീൻ",
          time: "8 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          readTime: "5 മിനിറ്റ് വായന"
        }
      ],
      സാങ്കേതികവിദ്യ: [
        {
          id: 1,
          title: "ആരോഗ്യരംഗത്തെ ഡയഗ്നോസ്റ്റിക്സിൽ AI വിപ്ലവം",
          excerpt: "മെഷീൻ ലേണിംഗ് അൽഗോരിതങ്ങൾ ഇപ്പോൾ 95% കൃത്യതയോടെ രോഗങ്ങൾ കണ്ടെത്തുന്നു, മെഡിക്കൽ പ്രാക്ടീസിനെ രൂപാന്തരപ്പെടുത്തുന്നു.",
          author: "ഡോ. അലക്സ് കുമാർ",
          time: "2 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
          readTime: "6 മിനിറ്റ് വായന"
        },
        {
          id: 2,
          title: "ക്വാണ്ടം കമ്പ്യൂട്ടിംഗ് മുന്നേറ്റം കൈവരിച്ചു",
          excerpt: "സങ്കീർണ്ണമായ പ്രശ്നപരിഹാര ആപ്ലിക്കേഷനുകളിൽ ക്വാണ്ടം സുപ്രീമസി ശാസ്ത്രജ്ഞർ വിജയകരമായി പ്രകടിപ്പിച്ചു.",
          author: "മരിയ റോഡ്രിഗസ്",
          time: "4 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
          readTime: "4 മിനിറ്റ് വായന"
        },
        {
          id: 3,
          title: "സുസ്ഥിര ടെക് സൊല്യൂഷനുകൾ ശക്തി പ്രാപിക്കുന്നു",
          excerpt: "പുനരുപയോഗ ഊർജ്ജ നവീകരണങ്ങൾക്കായി ഗ്രീൻ ടെക്നോളജി സ്റ്റാർട്ടപ്പുകൾക്ക് റെക്കോർഡ് ഫണ്ടിംഗ് ലഭിക്കുന്നു.",
          author: "ടോം ചെൻ",
          time: "7 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
          readTime: "3 മിനിറ്റ് വായന"
        }
      ],
      കായികം: [
        {
          id: 1,
          title: "ലോകകപ്പ് യോഗ്യതാ മത്സരങ്ങൾ ഞെട്ടിക്കുന്ന ഫലങ്ങൾ നൽകി",
          excerpt: "ഇന്നലത്തെ യോഗ്യതാ മത്സരങ്ങളിൽ അണ്ടർഡോഗ് ടീമുകൾ ആശ്ചര്യകരമായ വിജയങ്ങൾ നേടി.",
          author: "മൈക്ക് ജോൺസൺ",
          time: "1 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
          readTime: "2 മിനിറ്റ് വായന"
        },
        {
          id: 2,
          title: "ദേശീയ ചാമ്പ്യൻഷിപ്പിൽ ഒളിമ്പിക് റെക്കോർഡുകൾ തകർത്തു",
          excerpt: "വരാനിരിക്കുന്ന അന്താരാഷ്ട്ര മത്സരങ്ങൾക്ക് മുന്നോടിയായി അത്ലറ്റുകൾ പുതിയ ലോക റെക്കോർഡുകൾ സ്ഥാപിച്ചു.",
          author: "ലിസാ പാർക്ക്",
          time: "6 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
          readTime: "3 മിനിറ്റ് വായന"
        },
        {
          id: 3,
          title: "ഇസ്പോർട്സ് വ്യവസായം പുതിയ ഉയരങ്ങളിലെത്തി",
          excerpt: "പ്രൊഫഷണൽ ഗെയിമിംഗ് ടൂർണമെന്റുകൾ റെക്കോർഡ് വ്യൂവർഷിപ്പും പ്രൈസ് പൂളുകളും ആകർഷിക്കുന്നു.",
          author: "കെവിൻ ലീ",
          time: "9 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop",
          readTime: "4 മിനിറ്റ് വായന"
        }
      ],
      വിനോദം: [
        {
          id: 1,
          title: "ബ്ലോക്ക്ബസ്റ്റർ സിനിമ ഓപ്പണിംഗ് വീക്കെൻഡ് റെക്കോർഡുകൾ തകർത്തു",
          excerpt: "ഏറ്റവും പുതിയ സൂപ്പർഹീറോ സിനിമ $300M ഗ്ലോബൽ ഡെബ്യൂവിനൊപ്പം ബോക്സ് ഓഫീസ് പ്രതീക്ഷകൾ തകർത്തു.",
          author: "ജെന്നിഫർ ആഡംസ്",
          time: "3 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
          readTime: "3 മിനിറ്റ് വായന"
        },
        {
          id: 2,
          title: "സ്ട്രീമിംഗ് പ്ലാറ്റ്ഫോം ഒറിജിനൽ സീരീസ് പ്രഖ്യാപിച്ചു",
          excerpt: "പ്രധാന സ്ട്രീമിംഗ് സേവനം വരാനിരിക്കുന്ന സീസണിനായി എക്സ്ക്ലൂസീവ് ഉള്ളടക്കത്തിൽ $2B നിക്ഷേപിക്കുന്നു.",
          author: "റോബർട്ട് ഡേവിസ്",
          time: "5 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
          readTime: "2 മിനിറ്റ് വായന"
        },
        {
          id: 3,
          title: "സംഗീത ഫെസ്റ്റിവൽ താരങ്ങളുടെ ലൈനപ്പിനൊപ്പം തിരിച്ചെത്തി",
          excerpt: "വാർഷിക സംഗീത ആഘോഷം ഗ്രാമി വിജയികളും ഉയർന്നുവരുന്ന താരങ്ങളും ഉൾപ്പെടുന്ന ഹെഡ്‌ലൈനറുകൾ പ്രഖ്യാപിക്കുന്നു.",
          author: "അമാൻഡാ വൈറ്റ്",
          time: "7 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          readTime: "4 മിനിറ്റ് വായന"
        }
      ],
      ബിസിനസ്: [
        {
          id: 1,
          title: "ടെക് സ്റ്റോക്ക് റാലി മൂന്നാം ആഴ്ചയും തുടരുന്നു",
          excerpt: "നവീകരണ കമ്പനികളിലുള്ള നിക്ഷേപകരുടെ ആത്മവിശ്വാസം കാണിക്കുന്നതിനാൽ സാങ്കേതിക മേഖല വിപണി നേട്ടങ്ങൾക്ക് നേതൃത്വം നൽകുന്നു.",
          author: "ഡേവിഡ് കിം",
          time: "4 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
          readTime: "5 മിനിറ്റ് വായന"
        },
        {
          id: 2,
          title: "സ്റ്റാർട്ടപ്പ് ഫണ്ടിംഗ് റെക്കോർഡ് ഉയരത്തിലെത്തി",
          excerpt: "സംരംഭകർ നൂതന പരിഹാരങ്ങൾ ആരംഭിക്കുമ്പോൾ വെഞ്ച്വർ ക്യാപിറ്റൽ നിക്ഷേപങ്ങൾ കുതിച്ചുയരുന്നു.",
          author: "റേച്ചൽ ബ്രൗൺ",
          time: "6 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
          readTime: "3 മിനിറ്റ് വായന"
        },
        {
          id: 3,
          title: "സുസ്ഥിര ബിസിനസ് പ്രാക്ടീസുകൾ സ്വീകരണം നേടുന്നു",
          excerpt: "ഉപഭോക്താക്കൾ പരിസ്ഥിതി സൗഹൃദ ഓപ്ഷനുകൾ ആവശ്യപ്പെടുന്നതിനാൽ കോർപ്പറേഷനുകൾ പരിസ്ഥിതി ഉത്തരവാദിത്തം സ്വീകരിക്കുന്നു.",
          author: "സ്റ്റീവ് മില്ലർ",
          time: "8 മണിക്കൂർ മുമ്പ്",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
          readTime: "4 മിനിറ്റ് വായന"
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
          കൂടുതൽ കാണുക
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
