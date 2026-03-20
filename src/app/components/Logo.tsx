import logoSvg from '../../imports/logo.svg';

interface LogoProps {
  className?: string;
}

export function Logo({ className = 'h-6' }: LogoProps) {
  return (
    <div className={className}>
      <img src={logoSvg} alt="HXR Logo" className="w-full h-full object-contain" />
    </div>
  );
}

interface LogoHeaderProps {
  showTitle?: boolean;
}

export function LogoHeader({ showTitle = true }: LogoHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <Logo className="h-8 w-auto" />
      {showTitle && (
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg leading-tight">HXR Conference 2026</span>
          <span className="text-purple-300 text-xs font-medium">XR +: From Pixel to Voxel</span>
        </div>
      )}
    </div>
  );
}