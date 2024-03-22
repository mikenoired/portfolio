import { linkStyle } from "@/app/ui/lib/linkStyle";
import Link from "next/link";
import { Components } from "react-markdown";

const mdComponents: Partial<Components> = {
  a: (props) => (
    <Link className={linkStyle} href={props.href as string}>
      {props.children}
    </Link>
  ),
};
export default mdComponents;
