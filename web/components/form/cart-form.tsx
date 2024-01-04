import { Input, Button } from "@nextui-org/react"

export const UserCartForm = () => {
  return (
    <form action="" className="flex flex-col">
      <h2 className="font-medium text-1xl mb-4">Данные получателя</h2>

      <div className="flex flex-col sm:flex-row md:flex-row w-full mb-4">
        <Input isRequired className="w-full sm:w-4/12 md:w-4/12 mr-6" label="Фамилия и Имя" />
        <Input isRequired className="w-full sm:w-4/12 md:w-4/12 sm:mt-0 md:mt-0 mt-4" label="Телефон" type="tel" />
      </div>

      <p className="font-light leading-8 mb-4">
        Пожалуйста, указывайте свои настоящие данные - у вас могут попросить
        удостоверение личности, прежде чем вручить заказ. <br /> На следующей
        странице вы можете выбрать способ доставки, узнаете окончательную
        стоимость доставки заказа и сроки получения.
      </p>

      <Button className="w-8/12 m-auto mb-16">Продолжить оформление</Button>
    </form>
  );
}
