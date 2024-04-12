import { Link, useNavigate } from "react-router-dom";
import "./RouterLink.scss";
import clsx from "clsx";

type LinkProps = {
  to: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
};

export const RouterLink = ({to, onClick, children, className}: LinkProps) => {
  const navigate = useNavigate();

  return (
    <Link className={clsx("link", className)} to={to} onClick={(ev) => {
        ev.preventDefault();
        document.startViewTransition(() => {
            onClick?.(ev);
            navigate(to);
          
        });
      }}>
      {children}
    </Link>
  );
};
