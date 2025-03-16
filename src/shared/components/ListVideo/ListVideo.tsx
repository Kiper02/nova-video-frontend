"use client"

import { useState } from "react";
import ItemVideo from "./ItemVideo";
import { useVideoFindAllQuery } from "@/graphql/generated/output";
import { PuffLoader } from "react-spinners";

interface IListVideoProps {
    id: string;
}

export default function ListVideo({ id }: IListVideoProps) {
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
        <ul className="flex flex-col gap-2">
            {
                data?.videoFindAll.filter(item => item.id !== id).map(item =>
                    item.link
                    ? <ItemVideo name={item.name} link={item.link} />
                    : <PuffLoader color="white" />
                )
            }
        </ul>
    );
}
