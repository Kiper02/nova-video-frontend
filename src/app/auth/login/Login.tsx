"use client"

import { useLoginMutation } from "@/graphql/generated/output";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/ui/Card";
import { Input } from "@/shared/components/ui/Input";
import { authActions } from "@/shared/store/auth/auth.slice";
import errorUtil from "@/shared/utils/error.util";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";


export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispath = useDispatch();
    const [login] = useLoginMutation();

    const { push } = useRouter()
    
    const sumbit = async () => {
      try {
        const response: any = await login({
          variables: {
            data: {
              email,
              password
            }
          }
        });
    
        if (response?.data) {
          localStorage.setItem("userId", response.data.login.id)
          dispath(authActions.login())
          toast("Вы успешно авторизовались")
          push("/");
        }
      } catch (error) {
        console.error('Ошибка входа:', error);
        errorUtil(error)
      }
    }
    return (
      <div className="flex h-screen items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader className="flex-row items-center justify-center gap-x-4 text-2xl font-bold">
            Авторизация в Nova Video
          </CardHeader>
  
          <CardContent className="flex flex-col gap-4">
            <Input
              placeholder="Введите email..."
              type="email"
              className="pt-5 pb-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              placeholder="Введите пароль..."
              type="password"
              className="pt-5 pb-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
  
          <CardFooter className="flex justify-center">
            <button className="cursor-pointer" onClick={() => sumbit()}>Войти</button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  