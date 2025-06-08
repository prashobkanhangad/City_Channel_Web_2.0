
import { cn } from '@/lib/utils';

interface AdBannerProps {
  type: 'banner' | 'sidebar' | 'mobile';
  className?: string;
}

const AdBanner = ({ type, className }: AdBannerProps) => {
  const getAdConfig = () => {
    switch (type) {
      case 'banner':
        return {
          width: 'w-full',
          height: 'h-24',
          size: '728x90',
          content: 'Premium Brand Advertisement'
        };
      case 'sidebar':
        return {
          width: 'w-full',
          height: 'h-64',
          size: '300x250',
          content: 'Sponsored Content'
        };
      case 'mobile':
        return {
          width: 'w-full',
          height: 'h-16',
          size: '320x50',
          content: 'Mobile Ad'
        };
      default:
        return {
          width: 'w-full',
          height: 'h-24',
          size: '728x90',
          content: 'Advertisement'
        };
    }
  };

  const config = getAdConfig();

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn(
        'bg-muted border-2 border-dashed border-muted-foreground/20 rounded-lg flex flex-col items-center justify-center space-y-2',
        config.width,
        config.height
      )}>
        <span className="text-muted-foreground text-sm font-medium">
          {config.content}
        </span>
        <span className="text-muted-foreground/60 text-xs">
          {config.size}
        </span>
      </div>
    </div>
  );
};

export default AdBanner;
