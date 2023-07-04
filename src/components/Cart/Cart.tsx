import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAppSelector } from "../../redux/store";
import Product from "./Product";

interface CartProps {
  openModal: any;
  setOpen: any;
}

const Cart = ({ openModal, setOpen }: CartProps) => {
  const { cart, totalPrice, totalAmount } = useAppSelector(
    (state) => state.cart
  );
  return (
    <>
      <Fragment>
        <Dialog
          open={openModal}
          handler={() => setOpen(false)}
          className="h-2/3 overflow-hidden"
        >
          <DialogHeader>Shopping bag</DialogHeader>
          <DialogBody
            divider
            className="flex flex-col px-3 overflow-auto h-3/4"
          >
            {cart.length > 0 ? (
              cart.map((item) => <Product {...item} key={item.id} />)
            ) : (
              <>
                <h1 className="text-black text-3xl font-inter font-bold">
                  Your bag is empty
                </h1>
                <p className="text-black text-base font-inter">
                  Add some products
                </p>
              </>
            )}
          </DialogBody>
          <DialogFooter className="flex flex-col justify-end items-end">
            <span>
              <strong className="font-bold">Total amount: </strong>{" "}
              {totalAmount}
            </span>
            <span>
              <strong className="font-bold">Total price: </strong> {totalPrice}
            </span>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
};

export default Cart;
