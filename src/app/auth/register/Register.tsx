import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/ui/Card";
import { Input } from "@/shared/components/ui/Input";

export default function Register() {

    return (
        <div className="flex h-screen items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader className="flex-row items-center justify-center gap-x-4 text-2xl font-bold">
            Регистрация в Nova Video
          </CardHeader>
  
          <CardContent className="flex flex-col gap-4">
            <Input 
              placeholder="Введите email..."
              type="email"
              className="pt-5 pb-5"
            />
            <Input 
              placeholder="Введите username..."
              type="text"
              className="pt-5 pb-5"
            />
            <Input 
              placeholder="Введите пароль..."
              type="password"
              className="pt-5 pb-5"
            />
          </CardContent>
  
          <CardFooter className="flex justify-center">
            <button className="cursor-pointer">Зарегистрироваться</button>
          </CardFooter>
        </Card>
      </div>
    )
}