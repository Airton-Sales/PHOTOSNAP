import Image from "next/image";

export default function Home() {


    return (
    <main>
        <Image src="/Bitmap.svg" alt="Home" width={500} height={500} />
        <div className="w-[500px] h-[419px] flex justify-center items-center bg-black">
            <div className="bg-black w-[318px] h-[275px]">
                <h1 className="text-white font-bold text-[32px] text-left">Create and share your photo stories.</h1>
                <p className="text-white text-[15px] text-left mt-5">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                <p className="text-white text-[12px] text-left mt-12 flex gap-5">GET AN INVITE <Image src="/arrow.svg" alt="Arrow" width={41} height={1} /></p>
            </div>
        </div>
    </main>
    );
}