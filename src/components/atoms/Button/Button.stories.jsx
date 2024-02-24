import Button from "./Button";
import { FaReact } from "react-icons/fa";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  // responsible to generate the Docs file you see in the storybook
  tags: ["autodocs"],
  // centralize th compnent in the canvas
  parameters: {
    layout: "centered",
  },
  // add information to the Docs
  argTypes: {
    variant: {
      description: "The button currently supports three variants",
      control: {
        // you can change for radio, select, etc.
        type: "radio",
        options: ["text", "outlined", "contained"],
      },
    },
    color: {
      description:
        "The button currently supports a primary and a secondary color",
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
    },
    children: {
      description:
        "The content of the button. It can be text, an icon, or both",
    },
    isDisabled: {
      description: "The button disabled state",
    },
    onClick: {
      description: "The action to be performed when the button is clicked",
    },
  },
};

export const Primary = {
  args: {
    variant: "contained",
    color: "primary",
    children: "Primary",
  },
};

export const Secondary = {
  args: {
    variant: "contained",
    color: "secondary",
    children: "Secondary",
  },
};

export const Text = {
  args: {
    variant: "text",
    color: "primary",
    children: "Text",
  },
};

export const Outlined = {
  args: {
    variant: "outlined",
    color: "primary",
    children: "Outlined",
  },
};

export const Disabled = {
  args: {
    variant: "contained",
    color: "primary",
    children: "Disabled",
    isDisabled: true,
  },
};

export const WithIcon = {
  args: {
    variant: "contained",
    color: "primary",
    children: <FaReact />,
    startIcon: "add",
  },
};
