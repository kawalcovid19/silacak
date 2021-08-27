import * as React from "react";

import { ButtonProps } from "./utils";
import { PrimaryButton } from "./primary-button";
import { OutlineButton } from "./outline-button";

interface OptionBaseProps {
  selected?: boolean;
}
export type OptionButtonProps = OptionBaseProps & ButtonProps;

/**
 * Button component used for optional select (switch between PrimaryButton and OutlineButton).
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-80fd0d5ac7982f1a83b171bb0fb9e116
 */
export const OptionButton = React.forwardRef<HTMLOptionElement, OptionButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = "md",
      color = "silacak",
      rounded,
      icon,
      iconPosition = "left",
      isLoading,
      loadingText = "Memuat...",
      disabled,
      children,
      selected,
      ...rest
    },
    _ref
  ) => {
    if (selected) {
      return (
        <PrimaryButton
          block={block}
          className={className}
          color={color}
          disabled={disabled}
          icon={icon}
          iconPosition={iconPosition}
          isLoading={isLoading}
          loadingText={loadingText}
          rounded={rounded}
          size={size}
          style={style}
          type={type}
          {...rest}
        >
          {children}
        </PrimaryButton>
      );
    }
    return (
      <OutlineButton
        block={block}
        className={className}
        color={color}
        disabled={disabled}
        icon={icon}
        iconPosition={iconPosition}
        isLoading={isLoading}
        loadingText={loadingText}
        rounded={rounded}
        size={size}
        style={style}
        type={type}
        {...rest}
      >
        {children}
      </OutlineButton>
    );
  }
);

OptionButton.displayName = "OptionButton";
