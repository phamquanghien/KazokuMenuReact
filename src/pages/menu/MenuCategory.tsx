import { Link, useParams } from 'react-router-dom';
import { menuCategories } from '../../data/menuCategories';
import MenuGroup from '../../components/menu/MenuGroup';

export default function MenuCategory() {
    const { category } = useParams<{ category: string }>();

    const activeCategory = menuCategories.find((item) => item.id === category);

    if (!activeCategory) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-6 text-zinc-900">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                        KAZOKU Restaurant
                    </p>

                    <h1 className="mt-4 text-2xl font-light uppercase tracking-wider">
                        Speisekarte nicht gefunden
                    </h1>

                    <Link
                        to="/menu"
                        className="mt-8 inline-block border border-zinc-900 px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-zinc-900 hover:text-white"
                    >
                        Zur Speisekarte
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            {/* Header */}
            <header className="px-6 pb-12 pt-32 sm:px-10 lg:pb-16">
                <div className="mx-auto max-w-5xl">
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-900"
                    >
                        <span>←</span>
                        <span>Speisekarte</span>
                    </Link>

                    <div className="mt-12 text-center">
                        <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-400">
                            KAZOKU Restaurant
                        </p>

                        <h1 className="mt-4 text-4xl font-light uppercase tracking-[0.18em] sm:text-5xl lg:text-6xl">
                            {activeCategory.label}
                        </h1>

                        <div className="mx-auto mt-6 h-px w-16 bg-zinc-900" />
                    </div>
                </div>
            </header>

            {/* Category navigation */}
            <nav className="border-y border-zinc-100">
                <div className="mx-auto flex max-w-5xl overflow-x-auto px-6 sm:px-10">
                    {menuCategories.map((item) => {
                        const isActive = item.id === activeCategory.id;

                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`
                                    shrink-0
                                    px-4
                                    py-4
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    transition-colors
                                    sm:px-6
                                    ${
                                        isActive
                                            ? 'border-b border-zinc-900 text-zinc-900'
                                            : 'text-zinc-400 hover:text-zinc-900'
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Menu */}
            <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
                <div className="space-y-16">
                    {activeCategory.data.map((group, groupIndex) => (
                        <MenuGroup
                            key={`${activeCategory.id}-${groupIndex}`}
                            group={group}
                            startIndex={groupIndex}
                        />
                    ))}
                </div>
            </section>

            {/* Back */}
            <div className="border-t border-zinc-100">
                <div className="mx-auto max-w-5xl px-6 py-10 text-center sm:px-10">
                    <Link
                        to="/menu"
                        className="inline-flex border border-zinc-900 px-8 py-3.5 text-xs uppercase tracking-[0.2em] transition hover:bg-zinc-900 hover:text-white"
                    >
                        ← Gesamte Speisekarte
                    </Link>
                </div>
            </div>
        </main>
    );
}
