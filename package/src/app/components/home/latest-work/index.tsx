"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
    const [workData, setWorkData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/work-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setWorkData(data?.workData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="bg-softGray">
                <div className="container">
                    <div className="py-16 md:py-32 ">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                            <h2>Latest Works</h2>
                            <p className="text-xl text-orange-500">( 04 )</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-12">
                            {workData?.map((value: any, index: any) => {
                                return (
                                    <div key={index} className="flex flex-col gap-4 sm:gap-6">
                                        <Link href={value?.slug}>
                                            <Image src={value?.image} alt="image" width={570} height={414} className="rounded-lg w-full h-full object-cover" />
                                        </Link>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center justify-between">
                                                <h5>{value?.title}</h5>
                                                <Image src={"/images/icon/right-arrow-icon.svg"} alt="right-arrow-icon" width={30} height={30}/>
                                            </div>
                                            <p>Client: {value?.client}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestWork