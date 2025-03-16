import Cookies from 'js-cookie';

export class AuthService {
  public isAuth(): boolean {
    try {
      const cookie = Cookies.get("session");
      console.log(cookie);
      if (!cookie || cookie === "") {
        return false;
      }
      return true;
    } catch (error) {
      console.error("Ошибка при проверке куки:", error);
      return false;
    }
  }

}



export default new AuthService();