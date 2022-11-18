import React from "react";
import Link from "next/link";

const styles = { textDecoration: "none", color: "white" };

const Links = ({ props}) => {
  const { href, Text } = props;
  if (typeof href === "string" && href.includes("#") && Text) {
    return (
      <a href={href} style={styles}>
        {Text}
      </a>
    );
  } else if (Text) {
    return (
      <Link href={href} style={styles}>
        <a>{Text}</a>
      </Link>
    );
  } 
};

export default Links;
