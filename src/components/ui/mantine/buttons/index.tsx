import { Button as AppButton, ButtonProps } from "@mantine/core";
import { ComponentProps } from "react";

interface AppButtonProps
  extends ButtonProps,
    Omit<ComponentProps<"button">, keyof ButtonProps> {}

export const Button = ({ children, ...props }: AppButtonProps) => {
  return <AppButton {...props}>{children}</AppButton>;
};
