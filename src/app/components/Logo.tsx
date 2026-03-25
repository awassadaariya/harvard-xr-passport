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

export function LogoHeader() {
  return (
    <div className="flex items-center">
      <Logo className="h-8 w-auto" />
    </div>
  );
}