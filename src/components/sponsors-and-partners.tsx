import Image from "next/image";
import sponsorPreview from "@/assets/sponsor-preview.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function SponsorsAndPartners() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8 rounded-t-[5rem] bg-slate-700">
            <div className="w-[75vw]">
                <h1 className="uppercase scroll-m-20 text-center sm:text-left font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">Sponsors &amp; Community Partners</h1>
                <Tabs defaultValue="sponsor" className="my-6">
                    <TabsList>
                        <TabsTrigger value="sponsor">Sponsors</TabsTrigger>
                        <TabsTrigger value="partner">Partners</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sponsor" className="p-4">
                        <div className="flex items-center">
                            <p>Interested in sponsoring us?</p>
                            <Link href="" className={buttonVariants({variant: "link"})}>Sponsor us</Link>
                        </div>
                    </TabsContent>
                    <TabsContent value="partner" className="p-4">
                        <div className="flex items-center">
                            <p>Become a partner</p>
                            <Link href="" className={buttonVariants({variant: "link"})}>Contact us</Link>
                        </div>
                    </TabsContent>
                </Tabs>
                <Image src={sponsorPreview.src} width={1000} height={500} alt="Sponsors and Partners" className="my-8 w-full rounded-2xl" />
            </div>
        </div>
    );
}