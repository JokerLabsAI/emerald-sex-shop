import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const Svg = ({ children, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    {children}
  </svg>
);

export const MenuIcon = (p: IconProps) => <Svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>;
export const SearchIcon = (p: IconProps) => <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Svg>;
export const HeartIcon = (p: IconProps) => <Svg {...p}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></Svg>;
export const CartIcon = (p: IconProps) => (
  <Svg {...p}><path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H6.2" /><circle cx="9" cy="20" r="1.3" /><circle cx="17" cy="20" r="1.3" /></Svg>
);
export const CloseIcon = (p: IconProps) => <Svg {...p}><path d="M6 6l12 12M18 6 6 18" /></Svg>;
export const ArrowIcon = (p: IconProps) => <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
export const TruckIcon = (p: IconProps) => (
  <Svg {...p}><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.6" /><circle cx="17" cy="17.5" r="1.6" /></Svg>
);
export const ShieldIcon = (p: IconProps) => <Svg {...p}><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></Svg>;
export const LockIcon = (p: IconProps) => <Svg {...p}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></Svg>;
export const StarIcon = (p: IconProps) => <Svg {...p}><path d="M12 2l2.6 6.6L21 9.3l-5 4.5 1.5 6.7L12 17l-5.5 3.5L8 13.8 3 9.3l6.4-.7z" /></Svg>;
export const LingerieIcon = (p: IconProps) => (
  <Svg {...p}><path d="M4 7c2 0 3 1 4 3 1 2 2.5 3 4 3s3-1 4-3c1-2 2-3 4-3M4 7c0 5 2 9 5 9 1.5 0 2.3-1 3-3 .7 2 1.5 3 3 3 3 0 5-4 5-9" /></Svg>
);
export const LotusIcon = (p: IconProps) => (
  <Svg {...p}><path d="M12 20c-4 0-8-2.5-8-6 2 0 4 .5 5.5 1.5M12 20c4 0 8-2.5 8-6-2 0-4 .5-5.5 1.5M12 20c-2.5-2-3.5-4.5-3.5-7S10 7.5 12 5c2 2.5 3.5 5 3.5 8s-1 5-3.5 7z" /></Svg>
);
export const CuffsIcon = (p: IconProps) => (
  <Svg {...p}><circle cx="7.5" cy="14" r="4" /><circle cx="16.5" cy="14" r="4" /><path d="M11.5 14h1M7.5 10V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3" /></Svg>
);
export const GiftIcon = (p: IconProps) => (
  <Svg {...p}><rect x="4" y="9" width="16" height="11" rx="1" /><path d="M3 9h18M12 9v11M12 9c-1.5-3-5-4-5-1.5S10 9 12 9zm0 0c1.5-3 5-4 5-1.5S14 9 12 9z" /></Svg>
);
export const DiamondIcon = (p: IconProps) => <Svg {...p}><path d="M6 4h12l3 5-9 11L3 9z" /><path d="M3 9h18M9 4l3 16M15 4l-3 16" /></Svg>;
export const MaskIcon = (p: IconProps) => (
  <Svg {...p}><path d="M3 10c2-2 5-3 9-3s7 1 9 3c-.5 4-3 6-5.5 6-1.8 0-2.6-1.5-3.5-1.5S10.3 16 8.5 16C6 16 3.5 14 3 10z" /><circle cx="8.5" cy="11" r="1" /><circle cx="15.5" cy="11" r="1" /></Svg>
);
export const FlameIcon = (p: IconProps) => (
  <Svg {...p}><path d="M12 3c1 3 4 4.5 4 8.5a4 4 0 0 1-8 0c0-1.8.8-3 1.8-4 .2 1.2.9 2 1.7 2.2C11 7.5 11 5 12 3z" /><path d="M8 17a4 4 0 0 0 8 0" /></Svg>
);
export const WhatsAppIcon = (p: IconProps) => (
  <Svg {...p}><path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2.3-2.3l.8-1-1-2z" /></Svg>
);
