import { AddProductFormParams } from "@/types/formParams";
import { UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";

const DesctionInputs = ({
  register,
}: {
  register: UseFormRegister<AddProductFormParams>;
}) => {
  return (
    <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
      <Input
        type="number"
        {...register("height", { required: "This filed is required" })}
        placeholder="Height"
        className=" w-1/3"
        pattern="[0-9]*"
        inputMode="numeric"
      />
      <Input
        type="number"
        {...register("width", { required: "This filed is required" })}
        placeholder="Width"
        className=" w-1/3"
        pattern="[0-9]*"
        inputMode="numeric"
      />
      <div className="flex items-center gap-1 w-1/3">
        <Input
          type="number"
          {...register("weight", { required: "This filed is required" })}
          placeholder="Weight"
          pattern="[0-9]*"
          inputMode="numeric"
        />
        <p className="font-medium text-sm">kg</p>
      </div>
    </div>
  );
};

export default DesctionInputs;
