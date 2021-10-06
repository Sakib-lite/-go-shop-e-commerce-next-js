import Image from "next/image";

export default function Spinner() {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen w-full">
      <div className="relative  my-6 mx-auto ">
        {/*content*/}

        <Image
          src="/../public/loading.png"
          width="250"
          height="250"
          alt="Icon Pictures Load "
          className="animate-spin"
        />
      </div>
    </div>
  );
}
