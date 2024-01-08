import { Button, Input } from "@nextui-org/react";

export default function AuthRecovery() {
  return (
    <form className="mt-16 p-10 flex w-ful lg:w-6/12 flex-wrap md:flex-nowrap gap-4 flex-col">
      <h1 className="font-light text-3xl mb-4 m-auto text-center">Восстановление пароля</h1>
      <p className="font-light mb-4 m-auto text-center">
        Введите адрес электронной почты, привязанный к вашему
        аккаунту, на него придет письмо со ссылкой для восстановления
        пароля.
      </p>

      <Input isRequired type="email" label="Электронная почта" />
      <Button className="m-auto w-8/12 font-light" color="primary" size="lg">
        Отправить код
      </Button>
    </form>
  );
}
