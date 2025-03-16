
interface IDescriptionProps {
    description?: string;
}

export default function Description({description}: IDescriptionProps) {
  return (
    <div className="w-full bg-[#272727] min-h-44 p-4 rounded-2xl">
      <p>{description}</p>
    </div>
  )
}
