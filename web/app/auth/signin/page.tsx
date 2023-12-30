import { Button, Checkbox, Input, Link } from "@nextui-org/react";

export default function AuthSignIn() {
  return (
    <form className="mt-16 p-10 flex w-6/12 flex-wrap md:flex-nowrap gap-4 flex-col">
      <h1 className="font-light text-3xl mb-4 m-auto">Авторизация</h1>

      <Input isRequired type="email" label="Электронная почта" />
      <Input isRequired type="password" label="Пароль" />
      <Checkbox defaultSelected>Запомнить меня</Checkbox>
      <Button className="m-auto w-8/12 font-light" color="primary" size="lg">
        Войти
      </Button>
      <hr />
      <div className="flex flex-row justify-between">
        <Link href="/auth/recovery">Восстановить пароль</Link>
        <Link href="/auth/signup">Зарегистрироваться</Link>
      </div>
    </form>
  );
}
