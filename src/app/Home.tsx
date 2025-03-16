"use client"

import { useVideoFindAllQuery } from "@/graphql/generated/output"
import Link from "next/link";
import { useState } from "react";
import { PuffLoader } from "react-spinners";

export default function Home() {
    const [page, setPage] = useState(1);

    const { data, loading, error } = useVideoFindAllQuery({
        variables: {
            data: {
                limit: 10,
                page: page
            }
        }
    });
    

    if (loading) {
        return (
            <PuffLoader
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                color="black"
            />
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="p-10">
            <ul className="grid grid-cols-4 gap-4">
                {data && data.videoFindAll.map((item) => (
                    <li key={item.id} className="text-center">
                        <Link href={`/video/${item.id}`}>
                        <div className="h-64 rounded-2xl cursor-pointer overflow-hidden relative">
                            {item.link && (
                                <video
                                    src={item.link}
                                    onMouseEnter={(e) => {
                                        const video = e.target as HTMLVideoElement;
                                        video.play();
                                    }}
                                    onMouseOut={(e) => {
                                        const video = e.target as HTMLVideoElement;
                                        video.pause();
                                    }}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <h1>{item.name}</h1>
                        
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
    
}
