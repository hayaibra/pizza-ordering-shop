import React from "react";
import { Blocks, ContentBox, InfoList, Phone, Text, TitleBox } from "./Style";

const FindRest = ({ findRest }) => {
  const { title, restsinfo } = findRest;

  return (
    <ContentBox
      sx={{
        paddingTop: "30px",
        marginBottom: { xs: "30px" },
      }}
    >
      <Blocks>
        <TitleBox>{title}</TitleBox>
      </Blocks>
      {restsinfo.map((info, i) => (
        <InfoList key={i}>
          <Text>{info.one} </Text>
          <Phone>{info.two}</Phone>
        </InfoList>
      ))}
    </ContentBox>
  );
};

export default FindRest;
