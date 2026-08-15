// import type { MenuCategoryGroup } from '../../data/menuCategories';
// import MenuItem from './MenuItem';

// interface Props {
//     group: MenuCategoryGroup;
//     startIndex: number;
// }

// export default function MenuGroup({ group, startIndex }: Props) {
//     return (
//         <section>
//             {/* Group header */}
//             <div className="mb-7 border-b border-zinc-900 pb-4">
//                 <div className="flex items-end justify-between gap-6">
//                     <div>
//                         {group.Category && (
//                             <h2 className="text-2xl font-light uppercase tracking-[0.12em] sm:text-3xl">
//                                 {group.Category}
//                             </h2>
//                         )}

//                         {group.Description && (
//                             <p className="mt-2 max-w-2xl text-sm italic leading-relaxed text-zinc-500">
//                                 {group.Description}
//                             </p>
//                         )}

//                         {group.Note && (
//                             <p className="mt-2 text-xs text-zinc-400">
//                                 {group.Note}
//                             </p>
//                         )}
//                     </div>

//                     {group.Price && (
//                         <span className="shrink-0 text-lg font-medium">
//                             {group.Price}
//                         </span>
//                     )}
//                 </div>
//             </div>

//             {/* Items */}
//             <div>
//                 {group.Items.map((item, itemIndex) => (
//                     <MenuItem
//                         key={`${startIndex}-${itemIndex}`}
//                         item={item}
//                         number={itemIndex + 1}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }

import type { MenuCategoryGroup } from '../../data/menuCategories';
import MenuItem from './MenuItem';

interface Props {
    group: MenuCategoryGroup;
    startIndex: number;
}

export default function MenuGroup({ group, startIndex }: Props) {
    return (
        /* Chỉ giữ lại 1 viền mỏng mờ duy nhất, nền tối đệm nhẹ */
        <section className="rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-6 sm:p-10 backdrop-blur-sm">
            {/* Group header */}
            <div className="mb-8 border-b border-zinc-800/60 pb-5">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        {group.Category && (
                            <h2 className="text-2xl font-light uppercase tracking-[0.18em] text-zinc-100 sm:text-3xl">
                                {group.Category}
                            </h2>
                        )}

                        {group.Description && (
                            <p className="mt-2 max-w-2xl text-xs italic leading-relaxed text-zinc-400 sm:text-sm">
                                {group.Description}
                            </p>
                        )}

                        {group.Note && (
                            <p className="mt-2 text-xs font-medium text-amber-400/90">
                                * {group.Note}
                            </p>
                        )}
                    </div>

                    {group.Price && (
                        <span className="shrink-0 font-mono text-xl font-bold tracking-wide text-amber-400">
                            {group.Price}
                        </span>
                    )}
                </div>
            </div>

            {/* Items */}
            <div className="space-y-2">
                {group.Items.map((item, itemIndex) => (
                    <MenuItem
                        key={`${startIndex}-${itemIndex}`}
                        item={item}
                        number={itemIndex + 1}
                    />
                ))}
            </div>
        </section>
    );
}
