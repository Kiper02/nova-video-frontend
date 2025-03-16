"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./../../../../public/logo.svg";
import Burger from "./../../../../public/burger.svg";
import Avatar from "./../../../../public/avatar.jpg";
import Notify from "./../../../../public/notify.svg";
import Account from "./../../../../public/account.svg";

import authService from "@/shared/services/auth.service";
import { useEffect, useState } from "react";
import { ModalUploadVideo } from "../ModalUploadVideo/ModalUploadVideo";


export default function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
      setIsAuth(authService.isAuth());
    }, []);

  return (
    <header className="w-full p-4 flex justify-between items-center">
      <div className="flex items-center gap-2.5">
        <Image
          src={Burger}
          width={25}
          height={25}
          alt="burger"
          className="cursor-pointer"
        />
        <Link href="/">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </Link>
      </div>

      <div>
        <input
          placeholder="Введите запрос"
          className="border-2 w-[640px] h-[40px] rounded-2xl pl-4 border-[#2f2e2e] focus:outline-none focus:border-blue-400"
        />
      </div>

      {isAuth ? (
        <div className="flex gap-4">
          <button
            className="text-white bg-[#2f2e2e] rounded-2xl pl-3.5 pr-3.5 pt-1.5 pb-1.5"
            onClick={() => setIsVisible(true)}
          >
            <span className="text-gray-200">+ </span>
            Создать
          </button>
          <Image src={Notify} alt="nofify" width={25} height={25} />
          <div className="rounded-full overflow-hidden">
            <Image
              src={Avatar}
              alt="avatar"
              width={25}
              height={25}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ) : (
        <div>
          <Link
            href="/auth/login"
            className="flex gap-1 items-center border-1 border-gray-400 rounded-2xl pl-3.5 pr-3.5 pt-1.5 pb-1.5"
          >
            <Image src={Account} alt="account" width={25} height={25} />
            Войти
          </Link>
        </div>
      )}
      {isVisible && <ModalUploadVideo setIsVisible={setIsVisible} />}
    </header>
  );
}
