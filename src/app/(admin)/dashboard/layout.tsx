export default function Layout({
    children,
    products,
    analytics,
    payments
}: {
    children: React.ReactNode;
    products: React.ReactNode;
    analytics: React.ReactNode;
    payments: React.ReactNode;
}) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {children}
            <div
            className="mt-5 flex justify-center items-center gap-5 "
            >
                {products}
                {analytics}
            </div>
            <div className="mt-5 flex justify-center items-center gap-5 ">
                {payments}
            </div>
        </div>
    );
}
