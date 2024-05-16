import Image from "next/image";

import Link from "next/link";

export const UserPurchases = () => {
  return (
    <div className="flex flex-col gap-y-2 ">
      <div className="flex flex-row justify-between container py-6 border border-black rounded-md">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-x-1">
            <span className="underline">№123456</span>
            <span>от {"14.06.2023"}</span>
            <span>на сумму 500 руб.</span>
          </div>

          <Image
            src={
              "https://skifmusic.ru/thumbs/d1/cf/270x270_1_normal_f63ca007ad49f3825ab0b89a2993.webp"
            }
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div>
          <span>Заказ выдан</span>
        </div>
      </div>

      <div className="flex flex-row justify-between container py-6 border border-black rounded-md">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-x-1">
            <span className="underline">№123456</span>
            <span>от {"14.06.2023"}</span>
            <span>на сумму 500 руб.</span>
          </div>

          <Image
            src={
              "https://skifmusic.ru/thumbs/d1/cf/270x270_1_normal_f63ca007ad49f3825ab0b89a2993.webp"
            }
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div>
          <span>Заказ выдан</span>
        </div>
      </div>

      <div className="flex flex-row justify-between container py-6 border border-black rounded-md">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-x-1">
            <span className="underline">№123456</span>
            <span>от {"14.06.2023"}</span>
            <span>на сумму 500 руб.</span>
          </div>

          <Link href={"/products/123/456/789"}>
            <Image
              src={
                "https://skifmusic.ru/thumbs/d1/cf/270x270_1_normal_f63ca007ad49f3825ab0b89a2993.webp"
              }
              alt=""
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div>
          <span>Заказ выдан</span>
        </div>
      </div>

      <div className="flex flex-row justify-between container py-6 border border-black rounded-md">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-x-1">
            <span className="underline">№123456</span>
            <span>от {"14.06.2023"}</span>
            <span>на сумму 500 руб.</span>
          </div>

          <Image
            src={
              "https://skifmusic.ru/thumbs/d1/cf/270x270_1_normal_f63ca007ad49f3825ab0b89a2993.webp"
            }
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div>
          <span>Заказ выдан</span>
        </div>
      </div>

      <div className="flex flex-row justify-between container py-6 border border-black rounded-md">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-x-1">
            <span className="underline">№123456</span>
            <span>от {"14.06.2023"}</span>
            <span>на сумму 500 руб.</span>
          </div>

          <Image
            src={
              "https://skifmusic.ru/thumbs/d1/cf/270x270_1_normal_f63ca007ad49f3825ab0b89a2993.webp"
            }
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div>
          <span>Заказ выдан</span>
        </div>
      </div>

      <div className="flex flex-row justify-between container py-6 border border-black rounded-md">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-x-1">
            <span className="underline">№123456</span>
            <span>от {"14.06.2023"}</span>
            <span>на сумму 500 руб.</span>
          </div>

          <Image
            src={
              "https://skifmusic.ru/thumbs/d1/cf/270x270_1_normal_f63ca007ad49f3825ab0b89a2993.webp"
            }
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div>
          <span>Заказ выдан</span>
        </div>
      </div>
    </div>
  );
};
