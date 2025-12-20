import { InputLabel } from "@mantine/core";
import { ChangeEvent, CSSProperties, ReactNode, useRef } from "react";

interface FileInputCustomProps {
  onChange: (files: ChangeEvent<HTMLInputElement>) => void;
  multiple: boolean;
  accept?: string;
  icon: ReactNode;
  styles?: CSSProperties;
}

const FileInputCustom: React.FC<FileInputCustomProps> = (props) => {
  const { onChange, multiple, accept, icon, styles } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputLabel
      style={{
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        padding: "8px",
        aspectRatio: "1/1",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow:
          "0 4px 16px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.06)",
        color: "rgba(255, 255, 255, 0.95)",
        ...styles,
      }}
    >
      {icon}
      <input
        type="file"
        ref={inputRef}
        accept={accept}
        onChange={(e) => onChange(e)}
        multiple={multiple}
        style={{ display: "none" }}
      />
    </InputLabel>
  );
};

export default FileInputCustom;
