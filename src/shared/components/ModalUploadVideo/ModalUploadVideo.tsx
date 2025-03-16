import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Upload from "./../../../../public/upload.svg";
import Cross from "./../../../../public/cross.svg";
import { toast } from "sonner";
import { gql, useMutation, useSubscription } from "@apollo/client";
import errorUtil from "@/shared/utils/error.util";
import { PuffLoader } from 'react-spinners';

interface IModalUploadVideoProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const UPLOAD_VIDEO = gql`
    mutation AddVideo($data: VideoInput!) {
        addVideo(data: $data)
    }
`;

const VIDEO_UPLOADED = gql`
    subscription VideoAdded($userId: String!) {
      videoAdded(userId: $userId) {
        userId,
        status,
        message
      }
    }
`;


export function ModalUploadVideo({ setIsVisible }: IModalUploadVideoProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');

  const [uploadVideo] = useMutation(UPLOAD_VIDEO);
  const { data: subscriptionData } = useSubscription(VIDEO_UPLOADED, {
    variables: { userId: localStorage.getItem("userId") },
    onSubscriptionData: ({ subscriptionData }) => {
      if (subscriptionData.data?.videoAdded) {
        const { status, message } = subscriptionData.data.videoAdded;
        if (status === "Success") {
          setMessage(`Видео успешно загружено: ${message}`);
        } else {
          setMessage(`Ошибка при загрузке видео: ${message}`);
        }
      }
    },
  });

  const submit = async (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    try {
      await uploadVideo({
        variables: {
          data: {
            name: "name",
            description: "name",
            playlistId: "35849004-dc75-4f9b-87ab-7a2b4362bc3d",
            video: file,
          },
        },
        context: {
          headers: {
            "x-apollo-operation-name": "AddVideo",
            "apollo-require-preflight": "true",
          },
        },
        ignoreResults: true,
        onError: (error) => {
          if (error.networkError) {
            console.log("NetworkError ignored, waiting for subscription...");
            return;
          }
          errorUtil(error);
        },
      });
      toast.info("Видео отправлено на сервер. Ожидайте обновления статуса...");
    } catch (error) {
      console.log(error);
      errorUtil(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsVisible(false);
        }
      }}
    >
      <div
        className="w-[960px] h-[850px] bg-[#282828] rounded-4xl flex flex-col p-9 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-semibold text-[20px] text-white">
          Загрузка видео
        </h1>
        <Image
          src={Cross}
          alt="cross"
          width={25}
          height={25}
          className="absolute right-10 top-10 cursor-pointer"
          onClick={() => setIsVisible(false)}
        />

        <div className="flex-1 flex justify-center items-center flex-col">
          <div className="w-[136px] h-[136px] rounded-full bg-[#1F1F1F] flex justify-center items-center">
            <div className="w-12 h-12">
              <Image src={Upload} alt="upload" className="w-full h-full" />
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="text-[15px] text-white">
              Перетащите файлы сюда или нажмите кнопку ниже, чтобы выбрать их на
              компьютере.
            </p>
            <p className="text-[13px] text-gray-400">
              Пока вы не опубликуете видео, доступ к ним будет ограничен.
            </p>
            <input
              type="file"
              multiple
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => submit(e)}
            />
            <button
              className={`rounded-3xl pl-3.5 pr-3.5 pt-2 pb-2 text-black bg-white mt-3 text-[14px] font-semibold ${
                isUploading ? "cursor-not-allowed opacity-50 relative" : ""
              }`}
              disabled={isUploading}
            >
              Выбрать файл
            </button>
            {message && <p className="mt-3 text-white">{message}</p>}
            {isUploading && (
              <PuffLoader
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                color="black"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}