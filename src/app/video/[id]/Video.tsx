"use client"

import { usePathname } from 'next/navigation';
import { useVideoFindByIdQuery } from "@/graphql/generated/output"
import { PuffLoader } from "react-spinners";
import ListVideo from '@/shared/components/ListVideo/ListVideo';
import DescriptionHeader from '@/shared/components/Video/DescriptionHeader';

import { useState, useEffect } from 'react';

export default function Video() {
    const pathname = usePathname();
    const id = pathname?.split('/').pop();
    const [likes, setLikes] = useState(0);
    const [disLikes, setDislikes] = useState(0);
    
    const { data, loading, error } = useVideoFindByIdQuery({
        variables: {
            videoId: String(id)
        }
    });

    useEffect(() => {
        if (data) {
            setLikes(data.videoFindById.numberOfLikes || 0);
            setDislikes(data.videoFindById.numberOfDislikes || 0);
        }
    }, [data]);

    if (loading) {
        return (
            <PuffLoader
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                color="black"
            />
        );
    }

    if (error) {
        return <h2>Ошибка загрузки данных</h2>;
    }

    return (
        <div className="flex flex-col items-start min-w-screen min-h-screen pl-7">
            <div className='flex items-start justify-between gap-10 p-4'>
                <div className="w-[1280px]">
                    {data?.videoFindById.link &&
                        <video
                            src={data?.videoFindById.link}
                            controls={true}
                            className="w-full h-[720px] rounded-t-3xl overflow-hidden"
                        />
                    }
                    <DescriptionHeader 
                        name={data?.videoFindById.name}
                        description={data?.videoFindById.description}
                        avatarLink={data?.videoFindById.avatarLink}
                        user={data?.videoFindById.user}
                        numberOfLikes={likes}
                        numberOfDislikes={disLikes}
                    />
                </div>
                <div>
                    <ListVideo id={String(id)}/>
                </div>
            </div>
        </div>
    );
}
