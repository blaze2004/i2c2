import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Rewards() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-violet-950">
            <div className="w-[75vw]">
                <h1 className="uppercase scroll-m-20 text-center sm:text-left font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">Prizes</h1>
                <p className="scroll-m-20 text-center sm:text-left text-xl tracking-tight">Get ready to launch your projects and grab awesome prizes and recognition.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 w-full py-8">
                    <div className="flex flex-col items-center justify-center flex-1 bg-purple-600 p-4 py-8 max-w-screen-lg sm:min-w-96">
                        <h2 className="uppercase scroll-m-20 text-center font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-7xl">
                            Prize Pool
                        </h2>
                        <h2 className="mt-12 uppercase scroll-m-20 text-center font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-7xl text-lime-400">₹300K</h2>
                        <p className="leading-7 mt-6 max-w-lg text-center">Prepare for the project launch! Outstanding performers will be rewarded with prizes, goodies and acknowledgement.</p>
                    </div>
                    <div className="flex flex-col justify-between space-y-4 w-full md:max-w-96">
                        <div className="bg-purple-700 p-4">
                            <div className="flex gap-4">
                                <Avatar className="bg-emerald-600 h-20 w-20">
                                    <AvatarImage src={"https://api.dicebear.com/8.x/big-smile/svg?seed=Precious"} />
                                    <AvatarFallback>1st</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-start">
                                    <h3 className="uppercase scroll-m-20 text-center font-extrabold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-emerald-600">₹10K</h3>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight">First Prize</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-800 p-4">
                            <div className="flex gap-4">
                                <Avatar className="bg-yellow-400 h-20 w-20">
                                    <AvatarImage src={"https://api.dicebear.com/8.x/big-smile/svg?seed=Sasha"} />
                                    <AvatarFallback>1st</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-start">
                                    <h3 className="uppercase scroll-m-20 text-center font-extrabold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-yellow-400">₹5K</h3>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight">Second Prize</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-900 p-4">
                            <div className="flex gap-4">
                                <Avatar className="bg-fuchsia-400 h-20 w-20">
                                    <AvatarImage src={"https://api.dicebear.com/8.x/big-smile/svg?seed=Molly"} />
                                    <AvatarFallback>1st</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-start">
                                    <h3 className="uppercase scroll-m-20 text-center font-extrabold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-fuchsia-400">₹2K</h3>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight">Third Prize</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p>There are Goodies, Vouchers and a lot more.</p>
                    <p>You can see special prizes for each challenge in the challenges section.</p>
                </div>
            </div>
        </div>
    )
}