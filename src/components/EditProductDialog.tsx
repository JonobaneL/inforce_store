import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ProductType } from "@/types/productTypes";
import EditProductForm from "./EditProductForm";

const EditProductDialog = ({
  product,
}: {
  product: ProductType | undefined;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button className="flex gap-2 bg-primary mt-4">
          <img src="/edit.svg" alt="edit" className="size-5" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <EditProductForm
          product={product}
          closeCallback={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
