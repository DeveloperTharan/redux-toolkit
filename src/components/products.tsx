import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { add } from "../store/slices/cartSlice";
import { ProductsProps } from "../types/product";
import { useGetAllProductsQuery } from "../store/slices/apiSlice";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  cn,
} from "@nextui-org/react";

export const Products = () => {
  const products = useGetAllProductsQuery("");

  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="w-full h-auto px-5 pb-20">
      <div className="my-10 w-full text-center font-bold text-3xl">
        Products
      </div>
      {!products.data && (
        <p className="flex items-center justify-center">Loading..</p>
      )}
      {products.data && (
        <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-col-6">
          {products.data.map((data: ProductsProps) => (
            <Card className="max-w-[340px]" key={data.id}>
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar isBordered radius="full" size="md" src={data.image} />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {data.price}
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      {Number(data.rating.rate)}
                    </h5>
                  </div>
                </div>
                <Button
                  className={cn("")}
                  color="primary"
                  radius="full"
                  size="sm"
                  variant={"solid"}
                  onClick={() => dispatch(add(data))}
                >
                  {"Add"}
                </Button>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p className="truncate">{data.title}</p>
              </CardBody>
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">
                    {Number(data.rating.rate)}
                  </p>
                  <p className=" text-default-400 text-small">ratings</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">
                    {data.rating.count}
                  </p>
                  <p className="text-default-400 text-small">Available</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
