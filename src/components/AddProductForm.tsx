import { AddProductFormParams } from "@/types/formParams";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import DesctionInputs from "./DescriptionInputs";
import { useRevalidateContext } from "@/context/revalidateContext";

type FormProps = {
  closeCallback: () => void;
};

const AddProductForm = ({ closeCallback }: FormProps) => {
  const { revalidateRoute } = useRevalidateContext();
  const { register, handleSubmit } = useForm<AddProductFormParams>();
  const onSubmint = async (data: AddProductFormParams) => {
    console.log(data);
    const product = JSON.stringify({
      id: `chair${Date.now()}`,
      name: data.name,
      count: data.count,
      price: data.price,
      imageUrl: data.imageUrl,
      size: {
        width: data.width,
        height: data.width,
      },
      weight: `${data.weight}kg`,
      comments: [],
    });
    try {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        body: product,
      });
      revalidateRoute();
      closeCallback();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmint)} className="space-y-3">
      <Input
        type="text"
        {...register("name", { required: "This filed is required" })}
        placeholder="Name"
      />
      <Input
        type="text"
        {...register("imageUrl", { required: "This filed is required" })}
        placeholder="imageUrl"
      />
      <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
        <Input
          type="number"
          {...register("count", { required: "This filed is required" })}
          placeholder="Count"
          className="w-1/2"
          pattern="[0-9]*"
          inputMode="numeric"
        />
        <div className="flex items-center gap-1 w-1/2">
          <Input
            type="number"
            {...register("price", { required: "This filed is required" })}
            placeholder="Price"
            pattern="[0-9]*"
            inputMode="numeric"
          />
          <p className="font-medium text-sm">$</p>
        </div>
      </div>
      <DesctionInputs register={register} />

      <div className="flex justify-end pt-3 gap-2">
        <Button variant="ghost" onClick={closeCallback}>
          Cancel
        </Button>
        <Button className="bg-primary" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
