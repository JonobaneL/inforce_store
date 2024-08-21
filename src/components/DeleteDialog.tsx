import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useRevalidateContext } from "@/context/revalidateContext";

type DeleteDialogProps = {
  product_id: string;
};

const DeleteDialog = ({ product_id }: DeleteDialogProps) => {
  const [open, setOpen] = useState(false);
  const { revalidateRoute } = useRevalidateContext();
  const deleteHandler = async () => {
    try {
      await fetch(`http://localhost:3000/products/${product_id}`, {
        method: "DELETE",
      });
      revalidateRoute();
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogTrigger asChild>
        <Button variant="outline" className="p-1.5">
          <img src="/delete.svg" alt="delete" className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[24rem]">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this product?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between mt-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            No
          </Button>
          <Button className="bg-primary" onClick={deleteHandler}>
            Yes, I'm sure
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
