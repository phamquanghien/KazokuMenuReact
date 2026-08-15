import type { MenuItem as MenuItemType } from '../../data/menuCategories';

interface Props {
    item: MenuItemType;
    number: number;
}

export default function MenuItem({ item, number }: Props) {
    return (
        <article className="border-b border-zinc-100 py-5 last:border-b-0">
            <div className="flex gap-4">
                {/* Number */}
                <span className="w-7 shrink-0 pt-0.5 text-xs text-zinc-300">
                    {String(number).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-6">
                        <div className="flex min-w-0 items-baseline gap-2">
                            <h3 className="text-base font-medium sm:text-lg">
                                {item.Title}
                            </h3>

                            {item.Note && (
                                <span className="shrink-0 text-xs text-zinc-400">
                                    {item.Note}
                                </span>
                            )}

                            {item.Icon && (
                                <span className="shrink-0 text-xs">
                                    {item.Icon}
                                </span>
                            )}
                        </div>

                        {item.Price && (
                            <span className="shrink-0 text-sm font-medium sm:text-base">
                                {item.Price}
                            </span>
                        )}
                    </div>

                    {item.Description && (
                        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-500">
                            {item.Description}
                        </p>
                    )}

                    {/* Options */}
                    {item.Options && item.Options.length > 0 && (
                        <div className="mt-3 space-y-1">
                            {item.Options.map((option, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between gap-6 pl-4 text-sm text-zinc-500"
                                >
                                    <span>
                                        {option.Label}

                                        {option.Note && (
                                            <span className="ml-2 text-xs text-zinc-400">
                                                {option.Note}
                                            </span>
                                        )}
                                    </span>

                                    {option.Price && (
                                        <span className="shrink-0 font-medium text-zinc-700">
                                            {option.Price}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
