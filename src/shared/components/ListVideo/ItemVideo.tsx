interface IItemVideoProps {
    link: string;
    name: string;
}

export default function ItemVideo({ link, name }: IItemVideoProps) {
    return (
        <div className="flex gap-1 items-center rounded-2xl overflow-hidden w-full">
            <div className="w-[168px] h-[94px] rounded-2xl overflow-hidden">
                <video 
                    className="w-full h-full object-cover"
                    src={link}
                />
            </div>
            <h3 className="font-bold text-white overflow-hidden whitespace-nowrap overflow-ellipsis">
                {name}
            </h3>
        </div>
    )
}
