import { Button } from "@mui/material";
import { FC } from "react";
import { Link, useRecordContext } from "react-admin";

export const TypeLinkField = () => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <span onClick={handleClick}>
      <TypeLink />
    </span>
  );
};

export const TypeLink: FC = () => {
  const record = useRecordContext();

  return (
    <Button component={Link} to={`/product/${record.id}/types`} color="primary">
      Типы
    </Button>
  );
};
