import Hero from '../components/layout/Hero';

export default function Home() {
    return (
        <>
            <Hero />

            <section className="bg-white px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-light tracking-wide">
                        Willkommen im Kazoku
                    </h2>

                    <p className="mt-6 max-w-2xl text-neutral-600">
                        Entdecken Sie unsere Küche und genießen Sie besondere
                        Momente bei Kazoku.
                    </p>
                </div>
            </section>
        </>
    );
}
