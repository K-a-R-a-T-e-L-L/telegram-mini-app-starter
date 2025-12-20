import { Select } from "@mantine/core";

interface CustomSelectProps {
  data: { value: string; label: string }[];
  bind: any;
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const { data, bind } = props;

  return (
    <Select
      {...bind}
      data={data}
      size="sm"
      variant="default"
      styles={{
        wrapper: {
          width: "140px",
        },
        input: {
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 8,
        },
        dropdown: {
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 8,
        },
      }}
    />
  );
};

export default CustomSelect;
