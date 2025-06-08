
import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-6 text-primary-foreground">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-primary-foreground/20 p-3 rounded-full">
            <Mail className="h-6 w-6" />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold font-serif mb-2">Stay Informed</h3>
          <p className="text-primary-foreground/90 text-sm">
            Get the latest news delivered straight to your inbox. No spam, just quality journalism.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Subscribe to Newsletter
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 py-4 animate-fade-in">
            <CheckCircle className="h-5 w-5 text-green-300" />
            <span className="font-medium">Successfully subscribed!</span>
          </div>
        )}

        <p className="text-xs text-primary-foreground/70">
          Join 50,000+ readers who trust our daily briefings
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
