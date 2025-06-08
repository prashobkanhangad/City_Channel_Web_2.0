
const LoadingSkeletons = () => {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Header skeleton */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex space-x-4">
              <div className="h-4 w-32 bg-muted rounded"></div>
              <div className="h-4 w-16 bg-muted rounded"></div>
            </div>
            <div className="h-4 w-20 bg-muted rounded"></div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="h-8 w-40 bg-muted rounded"></div>
            <div className="hidden lg:flex space-x-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-4 w-16 bg-muted rounded"></div>
              ))}
            </div>
            <div className="flex space-x-4">
              <div className="h-10 w-64 bg-muted rounded-lg hidden md:block"></div>
              <div className="h-10 w-10 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="h-6 w-24 bg-muted rounded-full"></div>
            <div className="space-y-3">
              <div className="h-12 w-full bg-muted rounded"></div>
              <div className="h-12 w-4/5 bg-muted rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded"></div>
              <div className="h-4 w-3/4 bg-muted rounded"></div>
            </div>
            <div className="flex space-x-6">
              <div className="h-4 w-24 bg-muted rounded"></div>
              <div className="h-4 w-20 bg-muted rounded"></div>
            </div>
            <div className="h-12 w-32 bg-muted rounded"></div>
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg"></div>
        </div>
      </div>

      {/* Content skeletons */}
      <div className="container mx-auto px-4 space-y-12">
        {/* Live section skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-48 bg-muted rounded"></div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="aspect-video bg-muted rounded-lg"></div>
            </div>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-20 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Trending skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-40 bg-muted rounded"></div>
          <div className="flex space-x-6 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex-none w-80">
                <div className="aspect-[16/10] bg-muted rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-6 w-full bg-muted rounded"></div>
                  <div className="h-4 w-3/4 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category sections skeleton */}
        {Array.from({ length: 3 }).map((_, sectionIndex) => (
          <div key={sectionIndex} className="space-y-6">
            <div className="h-8 w-32 bg-muted rounded"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[16/10] bg-muted rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-6 w-full bg-muted rounded"></div>
                    <div className="h-4 w-4/5 bg-muted rounded"></div>
                    <div className="h-4 w-3/5 bg-muted rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeletons;
