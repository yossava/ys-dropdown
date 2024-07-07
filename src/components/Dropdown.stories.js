import React from "react";
import MyComponent from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: MyComponent,
  argTypes: {
    order: {
      options: ["asc", "desc"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2 with icon", value: "option2" },
    { label: "Long Option 3", value: "option3" },
    { label: "Long Long Option 4", value: "option4" },
    { label: "Long Long Long Option 5", value: "option5" },
    { label: "Long Long Long Long Option 6", value: "option6" },
    { label: "Long Long Long Long Long Option 7", value: "option7" },
    { label: "Long Long Long Long Long Long Option 8", value: "option8" },
  ],
  isMultiple: false,
  label: "Select an option",
  id: "dd-1",
  usePortal: false,
  enableSearch: true,
  outlined: true,
  order: "asc",
};
