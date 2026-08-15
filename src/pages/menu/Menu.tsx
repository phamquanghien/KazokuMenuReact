import { Link } from 'react-router-dom';
import { menuCategories } from '../../data/menuCategories';
import { ArrowUpRight, UtensilsCrossed } from 'lucide-react';

export default function Menu() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[160px] rounded-full" />
                <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[180px] rounded-full" />
            </div>

            {/* Hero Header Section */}
            <header className="relative px-6 pb-16 pt-32 sm:px-10 lg:pb-24 lg:pt-40">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Top Tag */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                        <UtensilsCrossed size={14} className="text-amber-400" />
                        KAZOKU Restaurant
                    </div>

                    {/* Main Title */}
                    <h1 className="mt-6 text-4xl font-light uppercase tracking-[0.2em] sm:text-6xl lg:text-7xl text-zinc-100">
                        Speisekarte
                    </h1>

                    {/* Decorative Line */}
                    <div className="mx-auto mt-6 h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                    {/* Subtitle */}
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base font-light">
                        Entdecken Sie unsere Auswahl an authentischen
                        japanischen Spezialitäten, frischem Sushi, köstlichen
                        Desserts und erfrischenden Getränken.
                    </p>
                </div>
            </header>

            {/* Categories Section */}
            <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:pb-36">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                    {menuCategories.map((category) => {
                        const totalItems = category.data.flatMap(
                            (group) => group.Items,
                        ).length;
                        const previewItems = category.data
                            .flatMap((group) => group.Items)
                            .slice(0, 3);

                        return (
                            <article
                                key={category.id}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-amber-500/5"
                            >
                                {/* Top Glow Accent on Hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/0 to-transparent transition-all duration-500 group-hover:via-amber-500/80" />

                                <div>
                                    {/* Category Heading & Badge */}
                                    <div className="flex items-start justify-between gap-4 border-b border-zinc-800/80 pb-6">
                                        <div className="flex items-center gap-3">
                                            {category.icon && (
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-800/80 text-xl text-amber-400 border border-zinc-700/50">
                                                    {category.icon}
                                                </span>
                                            )}
                                            <div>
                                                <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-zinc-100 sm:text-3xl">
                                                    {category.label}
                                                </h2>
                                                <p className="mt-0.5 text-xs text-amber-500/80 font-mono">
                                                    AUTHENTIC JAPANESE
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-full bg-zinc-800/60 px-3 py-1 font-mono text-xs font-medium text-zinc-400 border border-zinc-800">
                                            {String(totalItems).padStart(
                                                2,
                                                '0',
                                            )}{' '}
                                            ARTIKEL
                                        </span>
                                    </div>

                                    {/* Preview items */}
                                    <div className="mt-6 space-y-4">
                                        {previewItems.map((item, index) => (
                                            <div
                                                key={`${category.id}-${index}`}
                                                className="group/item rounded-lg p-2.5 transition-colors hover:bg-zinc-800/40"
                                            >
                                                <div className="flex items-baseline justify-between gap-4">
                                                    <div className="min-w-0 flex-1">
                                                        <h3 className="text-sm font-medium text-zinc-200 transition-colors group-hover/item:text-amber-400 sm:text-base">
                                                            {item.Title}
                                                        </h3>

                                                        {item.Description && (
                                                            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-400">
                                                                {
                                                                    item.Description
                                                                }
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Dotted Leader & Price */}
                                                    <div className="flex items-baseline gap-2 shrink-0">
                                                        {item.Price && (
                                                            <span className="font-mono text-sm font-medium text-amber-400/90">
                                                                {item.Price}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* View Category CTA Button */}
                                <div className="mt-8 pt-4 border-t border-zinc-800/60">
                                    <Link
                                        to={category.path}
                                        className="group/btn inline-flex w-full items-center justify-between rounded-xl border border-zinc-700/60 bg-zinc-800/30 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black shadow-md"
                                    >
                                        <span>
                                            Alle {category.label} anzeigen
                                        </span>
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                                        />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
