import { Link, useParams } from 'react-router-dom';
import { menuCategories } from '../../data/menuCategories';
import MenuGroup from '../../components/menu/MenuGroup';
import { ArrowLeft, UtensilsCrossed } from 'lucide-react';

export default function MenuCategory() {
    const { category } = useParams<{ category: string }>();

    const activeCategory = menuCategories.find((item) => item.id === category);

    // Trang 404 khi không tìm thấy danh mục
    if (!activeCategory) {
        return (
            <main className="relative flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100 selection:bg-amber-500 selection:text-black">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] pointer-events-none" />

                <div className="relative text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
                        KAZOKU Restaurant
                    </span>

                    <h1 className="mt-4 text-3xl font-light uppercase tracking-wider text-zinc-100 sm:text-4xl">
                        Speisekarte nicht gefunden
                    </h1>

                    <p className="mt-2 text-sm text-zinc-400">
                        Die von Ihnen gesuchte Kategorie existiert leider nicht.
                    </p>

                    <Link
                        to="/menu"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-lg shadow-amber-500/10 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/20 active:scale-[0.98]"
                    >
                        <ArrowLeft size={16} />
                        Zur Speisekarte
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/5 blur-[160px] rounded-full" />
            </div>

            {/* Header Section */}
            <header className="relative px-6 pb-12 pt-32 sm:px-10 lg:pb-16 lg:pt-40">
                <div className="mx-auto max-w-5xl">
                    {/* Back Button */}
                    <Link
                        to="/menu"
                        className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-amber-400"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        <span>Zurück zur Übersicht</span>
                    </Link>

                    <div className="mt-10 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                            <UtensilsCrossed size={14} />
                            KAZOKU Restaurant
                        </div>

                        <h1 className="mt-6 text-4xl font-light uppercase tracking-[0.2em] sm:text-5xl lg:text-6xl text-zinc-100">
                            {activeCategory.label}
                        </h1>

                        <div className="mx-auto mt-6 h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                    </div>
                </div>
            </header>

            {/* Category Sticky Navigation */}
            <nav className="sticky top-0 z-30 border-y border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-5xl overflow-x-auto px-6 no-scrollbar sm:px-10">
                    {menuCategories.map((item) => {
                        const isActive = item.id === activeCategory.id;

                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`
                                    relative shrink-0 px-5 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 sm:px-6
                                    ${
                                        isActive
                                            ? 'text-amber-400'
                                            : 'text-zinc-400 hover:text-zinc-200'
                                    }
                                `}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Menu Groups Section */}
            <section className="relative mx-auto max-w-5xl px-6 py-10 sm:px-10 sm:py-16">
                <div className="space-y-16">
                    {activeCategory.data.map((group, groupIndex) => (
                        /* ĐÃ BỎ THẺ DIV KHUNG TẠI ĐÂY - CHỈ RENDER MENUGROUP DIRECTLY */
                        <MenuGroup
                            key={`${activeCategory.id}-${groupIndex}`}
                            group={group}
                            startIndex={groupIndex}
                        />
                    ))}
                </div>
            </section>

            {/* Back to Menu Footer CTA */}
            <div className="border-t border-zinc-800/80 bg-zinc-900/20">
                <div className="mx-auto max-w-5xl px-6 py-12 text-center sm:px-10">
                    <Link
                        to="/menu"
                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-800/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black shadow-lg"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        <span>Gesamte Speisekarte</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
