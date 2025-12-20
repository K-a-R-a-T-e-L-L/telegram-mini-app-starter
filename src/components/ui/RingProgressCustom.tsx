import { RingProgress, Text } from "@mantine/core";

interface RingProgressCustomProps {
  value: number;
  color: string;
}

const RingProgressCustom: React.FC<RingProgressCustomProps> = (props) => {
  const { color, value } = props;
  return (
    <RingProgress
      size={50}
      thickness={4}
      roundCaps
      sections={[
        {
          value: value,
          color: color,
        },
      ]}
      label={
        <Text size="xs" ta="center" fw={700}>
          {value}%
        </Text>
      }
    />
  );
};

export default RingProgressCustom;
