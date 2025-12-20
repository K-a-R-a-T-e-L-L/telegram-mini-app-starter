import { IconX } from "@tabler/icons-react";

interface ButtonCloseProps {
    onClick: () => void
}

const ButtonClose: React.FC<ButtonCloseProps> = (props) => {

    const {onClick} = props;

    return (
        <button
            type="button"
            style={{
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "1px",
              right: "1px",
              margin: 0,
              padding: 0,
              display: "grid",
              placeItems: "center",
              border: "none",
              background: "rgba(0, 0, 0, 0)",
              cursor: "pointer",
            }}
            onClick={onClick}
          >
            <IconX size={15} color="white" />
          </button>
    )
}

export default ButtonClose;