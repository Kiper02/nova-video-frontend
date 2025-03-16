import { toast } from "sonner";

export default function errorUtil(error: any) {
    if (error instanceof Error) {
        toast.error(error.message);
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        toast.error((error as { message: string }).message);
      } else {
        toast.error("Неизвестная ошибка");
      }
}