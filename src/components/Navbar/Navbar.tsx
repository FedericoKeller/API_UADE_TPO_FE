import { ScrollArea } from "@mantine/core";
import { UserButton } from "@/components/UserButton";
import { NavItem } from "@/types/nav-item";
import "./Navbar.scss";
import { NavLinksGroup } from "./NavLinksGroup";

interface Props {
  data: NavItem[];
  hidden?: boolean;
}

export function Navbar({ data }: Props) {
  const links = data.map((item) => (
    <NavLinksGroup key={item.label} {...item} />
  ));

  return (
    <>
      <ScrollArea className="links">
        <div className="linksInner">{links}</div>
      </ScrollArea>

      <div className="navFooter">
        <UserButton />
      </div>
    </>
  );
}
