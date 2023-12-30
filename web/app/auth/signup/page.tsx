import { Button, Checkbox, Input } from "@nextui-org/react";

export default function AuthSignUp() {
  return (
    <form className="mt-16 p-10 flex w-6/12 flex-wrap md:flex-nowrap gap-4 flex-col">
      <h1 className="font-light text-3xl mb-4 m-auto">Регистрация</h1>

      <div className="w-full grid grid-cols-2 gap-2">
        <Input isRequired type="text" label="Имя" />
        <Input type="text" label="Фамилия" />
        <Input isRequired type="email" label="Электронная почта" />
        <Input isRequired type="phonenumber" label="Номер телефона" />
        <Input isRequired type="password" label="Пароль" />
        <Input isRequired type="password" label="Подтверждение пароля" />
      </div>
      <Checkbox defaultSelected>Подписаться на рассылку</Checkbox>
      <Button className="m-auto w-8/12 font-light" color="primary" size="lg">
        Войти
      </Button>
    </form>
  );
}
