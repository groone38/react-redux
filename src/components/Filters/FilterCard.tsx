import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { InitialStateProps } from "../../redux/slices/productsSlice";

const FilterCard = ({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
}: InitialStateProps) => {
  return (
    <Link to={`/filters/${category}/${id}`}>
      <Card className="mt-6 w-full h-full justify-between">
        <div>
          <CardHeader color="blue-gray" className="relative md:h-96">
            <img
              className="object-cover h-full w-full"
              src={image}
              alt={title}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography className="text-sm">{description}</Typography>
          </CardBody>
        </div>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography>{price}</Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FilterCard;
