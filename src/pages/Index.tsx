
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LiveSection from '../components/LiveSection';
import TrendingNews from '../components/TrendingNews';
import CategoryNews from '../components/CategoryNews';
import AdBanner from '../components/AdBanner';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import LoadingSkeletons from '../components/LoadingSkeletons';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeletons />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="space-y-8">
        <HeroSection />
        
        <div className="container mx-auto px-4 space-y-12">
          <LiveSection />
          
          <AdBanner type="banner" />
          
          <TrendingNews />
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-12">
              <CategoryNews category="രാഷ്ട്രീയം" />
              <CategoryNews category="സാങ്കേതികവിദ്യ" />
              <CategoryNews category="കായികം" />
              <CategoryNews category="വിനോദം" />
              <CategoryNews category="ബിസിനസ്" />
            </div>
            
            <div className="space-y-8">
              <AdBanner type="sidebar" />
              <Newsletter />
              <AdBanner type="mobile" className="lg:hidden" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
