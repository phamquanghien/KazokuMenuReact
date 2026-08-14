import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../../assets/images/small-logo.webp';

interface MenuCategory {
    label: string;
    path: string;
}

const menuCategories: MenuCategory[] = [
    {
        label: 'Vorspeise',
        path: '/menu/vorspeise',
    },
    {
        label: 'Mittagsmenü',
        path: '/menu/mittagsmenue',
    },
    {
        label: 'Hauptspeise',
        path: '/menu/hauptspeise',
    },
    {
        label: 'Sushi',
        path: '/menu/sushi',
    },
    {
        label: 'Dessert',
        path: '/menu/dessert',
    },
    {
        label: 'Drinks',
        path: '/menu/drinks',
    },
];

const navigationItems = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Über uns',
        path: '/about',
    },
    {
        label: 'Speisekarte',
        path: '/menu',
        hasDropdown: true,
    },
    {
        label: 'Adresse',
        path: '/address',
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${
            isScrolled
                ? 'bg-black/90 shadow-lg backdrop-blur-md'
                : 'bg-gradient-to-b from-black/60 to-transparent'
        }
      `}
        >
            <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="flex shrink-0 items-center"
                    aria-label="Kazoku Restaurant"
                >
                    <img
                        src={smallLogo}
                        alt="Kazoku Restaurant"
                        className="
              h-16
              w-16
              object-contain
              transition-transform
              duration-300
              hover:scale-105
            "
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center md:flex">
                    <div className="flex items-center gap-8">
                        {navigationItems.map((item) => (
                            <div
                                key={item.path}
                                className="relative"
                                onMouseEnter={() => {
                                    if (item.hasDropdown) {
                                        setIsMenuOpen(true);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (item.hasDropdown) {
                                        setIsMenuOpen(false);
                                    }
                                }}
                            >
                                <Link
                                    to={item.path}
                                    className="
                    flex
                    items-center
                    gap-1.5
                    py-9
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-white
                    transition
                    duration-300
                    hover:text-red-400
                  "
                                >
                                    {item.label}

                                    {item.hasDropdown && (
                                        <svg
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </Link>

                                {/* Desktop Dropdown */}
                                {item.hasDropdown && isMenuOpen && (
                                    <div
                                        className="
                      absolute
                      left-1/2
                      top-full
                      w-56
                      -translate-x-1/2
                      border-t-2
                      border-red-600
                      bg-black/95
                      py-3
                      shadow-xl
                      backdrop-blur-md
                    "
                                    >
                                        {menuCategories.map((category) => (
                                            <Link
                                                key={category.path}
                                                to={category.path}
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                                className="
                          block
                          px-6
                          py-3
                          text-xs
                          font-medium
                          uppercase
                          tracking-[0.1em]
                          text-white/80
                          transition
                          duration-200
                          hover:bg-white/10
                          hover:text-red-400
                        "
                                            >
                                                {category.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Phone */}
                        <a
                            href="tel:+4961192777979"
                            className="
                ml-2
                flex
                items-center
                gap-2
                border
                border-white/70
                px-5
                py-2.5
                text-xs
                font-medium
                uppercase
                tracking-[0.1em]
                text-white
                transition
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
              "
                        >
                            <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                            >
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  19.79 19.79 0 0 1-3.07-8.67
                  A2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 0 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0 2.81.7
                  A2 2 0 0 1 22 16.92z"
                                />
                            </svg>
                            0611 92777979
                        </a>
                    </div>
                </div>

                {/* Mobile Button */}
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen((current) => !current)}
                    aria-label={
                        isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'
                    }
                    aria-expanded={isMobileMenuOpen}
                    className="
            flex
            h-10
            w-10
            items-center
            justify-center
            text-white
            md:hidden
          "
                >
                    {isMobileMenuOpen ? (
                        <svg
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                d="M6 6L18 18M6 18L18 6"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                d="M4 7H20M4 12H20M4 17H20"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`
          overflow-hidden
          bg-black/95
          backdrop-blur-md
          transition-all
          duration-300
          md:hidden
          ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
            >
                <div className="px-6 pb-8 pt-2">
                    {navigationItems.map((item) => (
                        <div key={item.path}>
                            <div className="flex items-center border-b border-white/10">
                                <Link
                                    to={item.path}
                                    onClick={
                                        item.hasDropdown
                                            ? undefined
                                            : closeMobileMenu
                                    }
                                    className="
                    flex-1
                    py-4
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white
                  "
                                >
                                    {item.label}
                                </Link>

                                {item.hasDropdown && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsMenuOpen((current) => !current)
                                        }
                                        aria-label="Speisekarte öffnen"
                                        className="p-4 text-white"
                                    >
                                        <svg
                                            className={`
                        h-4
                        w-4
                        transition-transform
                        duration-200
                        ${isMenuOpen ? 'rotate-180' : ''}
                      `}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {item.hasDropdown && isMenuOpen && (
                                <div className="bg-white/5">
                                    {menuCategories.map((category) => (
                                        <Link
                                            key={category.path}
                                            to={category.path}
                                            onClick={closeMobileMenu}
                                            className="
                        block
                        border-b
                        border-white/5
                        px-6
                        py-3
                        text-xs
                        uppercase
                        tracking-[0.08em]
                        text-white/70
                        transition
                        hover:text-red-400
                      "
                                        >
                                            {category.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Mobile Phone */}
                    <a
                        href="tel:+4961192777979"
                        onClick={closeMobileMenu}
                        className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              border
              border-white
              px-5
              py-3.5
              text-xs
              font-medium
              uppercase
              tracking-[0.1em]
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
                    >
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                        >
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2
                19.79 19.79 0 0 1-8.63-3.07
                19.5 19.5 0 0 1-6-6
                19.79 19.79 0 0 1-3.07-8.67
                A2 2 0 0 1 4.11 2h3
                a2 2 0 0 1 2 1.72
                12.84 12.84 0 0 1 .7 2.81
                2 2 0 0 1-.45 2.11L8.09 9.91
                a16 16 0 0 0 6 6l1.27-1.27
                a2 2 0 0 1 2.11-.45
                12.84 12.84 0 0 0 2.81.7
                A2 2 0 0 1 22 16.92z"
                            />
                        </svg>
                        0611 92777979
                    </a>
                </div>
            </div>
        </header>
    );
}
