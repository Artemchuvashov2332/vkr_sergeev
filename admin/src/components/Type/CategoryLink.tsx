import { Button } from "@mui/material";
import { FC } from "react";
import { Link, useRecordContext } from "react-admin";

export const CategoryLinkField = () => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <span onClick={handleClick}>
      <CategoryLink />
    </span>
  );
};

export const CategoryLink: FC = () => {
  const record = useRecordContext();

  return (
    <Button
      component={Link}
      to={`/type/${record.id}/categories`}
      color="primary"
    >
      Категории
    </Button>
  );
};
