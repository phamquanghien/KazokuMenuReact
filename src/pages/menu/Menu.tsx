import { Link } from 'react-router-dom';
import { menuCategories } from '../../data/menuCategories';

export default function Menu() {
    return (
        <main className="min-h-screen bg-white text-zinc-900">
            {/* Header */}
            <header className="px-6 pb-12 pt-32 sm:px-10 lg:pb-16">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-400">
                            KAZOKU Restaurant
                        </p>

                        <h1 className="mt-4 text-4xl font-light uppercase tracking-[0.18em] sm:text-5xl lg:text-6xl">
                            Speisekarte
                        </h1>

                        <div className="mx-auto mt-6 h-px w-16 bg-zinc-900" />

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
                            Entdecken Sie unsere Auswahl an japanischen
                            Spezialitäten, Sushi, Desserts und Getränken.
                        </p>
                    </div>
                </div>
            </header>

            {/* Categories */}
            <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 lg:pb-28">
                <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
                    {menuCategories.map((category) => {
                        const previewItems = category.data
                            .flatMap((group) => group.Items)
                            .slice(0, 3);

                        return (
                            <article
                                key={category.id}
                                className="border-t border-zinc-900 pt-6"
                            >
                                {/* Category heading */}
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <p className="text-xs text-zinc-400">
                                            {category.icon}
                                        </p>

                                        <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.12em] sm:text-3xl">
                                            {category.label}
                                        </h2>
                                    </div>

                                    <span className="text-xs text-zinc-300">
                                        {String(
                                            category.data.flatMap(
                                                (group) => group.Items,
                                            ).length,
                                        ).padStart(2, '0')}{' '}
                                        ARTIKEL
                                    </span>
                                </div>

                                {/* Preview items */}
                                <div className="mt-8">
                                    {previewItems.map((item, index) => (
                                        <div
                                            key={`${category.id}-${index}`}
                                            className="border-b border-zinc-100 py-4 last:border-b-0"
                                        >
                                            <div className="flex items-baseline justify-between gap-6">
                                                <div className="min-w-0">
                                                    <h3 className="text-sm font-medium sm:text-base">
                                                        {item.Title}
                                                    </h3>

                                                    {item.Description && (
                                                        <p className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                                                            {item.Description}
                                                        </p>
                                                    )}
                                                </div>

                                                {item.Price && (
                                                    <span className="shrink-0 text-sm text-zinc-600">
                                                        {item.Price}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* View category */}
                                <div className="mt-6">
                                    <Link
                                        to={category.path}
                                        className="
                                            inline-flex
                                            border
                                            border-zinc-900
                                            px-6
                                            py-3
                                            text-xs
                                            font-medium
                                            uppercase
                                            tracking-[0.18em]
                                            transition-all
                                            duration-300
                                            hover:bg-zinc-900
                                            hover:text-white
                                        "
                                    >
                                        Alle {category.label} anzeigen
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
