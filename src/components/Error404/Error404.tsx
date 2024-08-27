import Image from "next/image";
import Link from "next/link";

export function Error404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-5">
            <h1 className="text-5xl font-semibold mb-6">Error 404</h1>
            <h2 className="text-3xl mb-5">¡La página que buscas no existe!</h2>
            <Image src="/assets/404-not-found.avif" alt="No existe" width={400} height={400} className="rounded-lg shadow-light"/>
            <Link href="/" className="m-5 px-3 py-2 bg-orange-400 text-white rounded-lg">Volver a la página principal</Link>
        </div>
    )
}
