export default function Loading() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* {Array.from({ length: 4 }).map((_, i) => ( */}
                    <div
                        // key={i}
                        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse"
                    >
                        {/* Gambar skeleton */}
                        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>

                        {/* Konten skeleton */}
                        <div className="px-5 pb-5 mt-4 space-y-3">
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>

                            <div className="flex items-center justify-between mt-3">
                                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                {/* ))} */}
            </div>
        </div>
    );
}