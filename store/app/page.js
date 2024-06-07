import Advertise from "@/components/advert";
import ProductHome from "@/components/productshome";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-4">
        <Advertise />
        <ProductHome />
      </div>
    </>
  );
}
