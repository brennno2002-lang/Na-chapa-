import React from 'react';

const iconProps = {
  className: "w-6 h-6",
};

export const InstagramIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || iconProps.className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export const WhatsAppIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className || iconProps.className}>
    <path d="M19.78 12.39C19.78 12.39 19.88 12.28 19.97 12.18C20.48 11.45 20.73 10.61 20.73 9.71C20.73 5.43 16.98 2 12.44 2C7.9 2 4.15 5.43 4.15 9.71C4.15 11.63 4.88 13.38 6.06 14.78C6.06 14.78 6.06 14.78 6.06 14.78L4.05 22L11.83 19.91C11.83 19.91 11.83 19.91 11.83 19.91C12.04 19.94 12.24 19.96 12.44 19.96C16.98 19.96 20.73 16.53 20.73 12.25C20.73 11.46 20.5 10.72 20.02 10.02L19.78 12.39ZM12.44 3.65C16.1 3.65 19.08 6.38 19.08 9.71C19.08 10.45 18.88 11.14 18.51 11.75L18.3 12.08L18.49 12.27C18.49 12.27 19.53 13.21 19.53 13.21C19.53 13.21 19.53 13.21 19.53 13.21C18.84 14.09 17.57 15.34 16.29 16.03L16.29 16.03L15.17 14.54L13.11 15.52L13.11 15.52L14.49 17.65C13.85 17.87 13.17 18 12.44 18C8.79 18 5.8 15.27 5.8 11.94C5.8 8.62 8.79 5.88 12.44 5.88C13.84 5.88 15.11 6.37 16.1 7.2L16.1 7.2L17.53 5.75C16.29 4.48 14.48 3.65 12.44 3.65Z" />
  </svg>
);

export const MenuIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || iconProps.className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const XIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || iconProps.className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const MapPinIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || iconProps.className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const ClockIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || iconProps.className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const PhoneIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || iconProps.className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);