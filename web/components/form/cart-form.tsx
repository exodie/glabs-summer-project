import { Input, Button } from "@nextui-org/react"

export default function UserCartForm() {
  return (
    <form action="" className="flex flex-col">
      <h2 className="font-medium text-1xl mb-4">Данные получателя</h2>

      <div className="flex flex-row w-full mb-4">
        <Input isRequired className="w-4/12 mr-6" label="Фамилия и Имя" />
        <Input isRequired className="w-4/12" label="Телефон" type="tel" />
      </div>

      <p className="font-light leading-8 mb-4">
        Пожалуйста, указывайте свои настоящие данные - у вас могут попросить
        удостоверение личности, прежде чем вручить заказ. <br /> На следующей
        странице вы можете выбрать способ доставки, узнаете окончательную
        стоимость доставки заказа и сроки получения.
      </p>

      <Button className="w-8/12 m-auto">Продолжить оформление</Button>
    </form>
  );
}
