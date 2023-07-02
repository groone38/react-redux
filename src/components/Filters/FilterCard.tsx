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
import { singleProduct } from "../../redux/slices/productsSlice";

interface FilterCardProps {
  id: string;
  name: string;
  img: string;
  text: string;
  price: number;
  colors: string[];
  type: string;
}

const FilterCard = ({
  id,
  name,
  img,
  text,
  price,
  colors,
  type,
}: FilterCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <Link to={`/filters/${type}/${id}`}>
      <Card className="mt-6 w-96" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="blue-gray" className="relative h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography>{price}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors.map((item, idx) => (
              <i
                className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                key={idx}
                style={{ background: item }}
              />
            ))}
          </Typography>
          {/* <Button>Read More</Button> */}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FilterCard;
