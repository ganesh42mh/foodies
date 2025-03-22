import Link from "next/link";

export default function Blog () {
    return(
        <main>  
            <div className="flex items-center justify-center gap-2 flex-col w-full h-screen">
            <p className="bg-blue-400 text-2xl text-white p-2 rounded-md hover:scale-150 transition-transform duration-300"><Link href="/blog/post-1">Post - 1</Link></p>
            <p className="bg-yellow-400 text-2xl text-black p-2 rounded-md hover:scale-150 transition-transform duration-300"><Link href="/blog/post-2">Post - 2</Link></p>
            </div>
        </main>
    )
}