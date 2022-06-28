import { Button } from "@mantine/core";
import React from "react";

interface IPrimaryButton {
  title: string;
  icon?: React.ReactNode;
  sx?: any;
  onClick: () => void;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  title,
  icon,
  sx,
  onClick,
}) => {
  return (
    <Button
      size="md"
      sx={(theme) => ({
        backgroundColor: theme.colors.tertiary[0],
        "&:hover": {
          backgroundColor: theme.fn.darken(theme.colors.tertiary[0], 0.1),
        },
        ...sx,
      })}
      leftIcon={icon}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
