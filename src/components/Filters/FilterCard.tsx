import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { InitialStateProps } from "../../redux/slices/productsSlice";
// import { singleProduct } from "../../redux/slices/productsSlice";

interface FilterCardProps {
  id: number;
  name: string;
  img: string;
  text: string;
  price: number;
  colors: string[];
  type: string;
}

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
    <Link to={`/filters/${category}/${id}`} className="w-[20rem]">
      {/* <Card className="mt-6 w-96" onClick={() => dispatch(singleProduct(id))}> */}
      <Card className="mt-6 w-full h-full justify-between">
        <CardHeader color="blue-gray" className="relative h-96">
          <img className="object-cover h-full w-full" src={image} alt={title} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography>{price}</Typography>
          {/* <Typography variant="small" color="gray" className="flex gap-1">
            {colors.map((item, idx) => (
              <i
                className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                key={idx}
                style={{ background: item }}
              />
            ))}
          </Typography> */}
          {/* <Button>Read More</Button> */}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FilterCard;
