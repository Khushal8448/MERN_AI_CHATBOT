import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick: () => Promise<void>;
};

function NavigationLink({ to, bg, text, textColor, onClick }: Props) {
  return (
    <Link
      to={to}
      style={{ backgroundColor: bg, color: textColor }}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

export default NavigationLink;
