
import { useState } from 'react';
import { Play, Volume2, Settings, Maximize, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LiveSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const liveChannels = [
    { id: 1, name: "NewsPortal Live", viewers: "12.5K", status: "LIVE" },
    { id: 2, name: "Breaking News", viewers: "8.2K", status: "LIVE" },
    { id: 3, name: "World Report", viewers: "5.7K", status: "SCHEDULED" }
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold font-serif text-foreground">Live Coverage</h2>
          <p className="text-muted-foreground mt-1">Watch breaking news as it happens</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-500 font-semibold">12,547 viewers</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Live Player */}
        <div className="lg:col-span-2">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video relative group">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop"
                alt="Live broadcast"
                className="w-full h-full object-cover"
              />
              
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-white/90 hover:bg-white shadow-lg"
                >
                  <Play className="h-6 w-6 text-black ml-1" fill="currentColor" />
                </Button>
              </div>

              {/* Live indicator */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-3">
                  <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-card">
              <h3 className="font-semibold text-lg">Global Climate Summit - Day 2</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Live coverage of the international climate summit with world leaders discussing unprecedented action plans.
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Started 2 hours ago</span>
                </div>
                <span className="text-sm font-medium">12,547 watching</span>
              </div>
            </div>
          </div>
        </div>

        {/* Channel List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Available Channels</h3>
          <div className="space-y-3">
            {liveChannels.map((channel) => (
              <div
                key={channel.id}
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {channel.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{channel.viewers} viewers</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {channel.status === "LIVE" ? (
                      <>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-red-500 text-sm font-semibold">LIVE</span>
                      </>
                    ) : (
                      <span className="text-muted-foreground text-sm">Scheduled</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
