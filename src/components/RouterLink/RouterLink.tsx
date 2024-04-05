import { Link, useNavigate } from "react-router-dom";
import "./RouterLink.scss";

type LinkProps = {
  label: string;
  to: string;
};

export const RouterLink = (props: LinkProps) => {
  const { label, to } = props;
  const navigate = useNavigate();

  return (
    <Link className="link" to={to} onClick={(ev) => {
        ev.preventDefault();
        document.startViewTransition(() => {
            navigate(to);
          
        });
      }}>
      {label}
    </Link>
  );
};
