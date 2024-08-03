import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GenericButtonLink from "./GenericButtonLink";

export default function ButtonParliamentLK({ parliamentNum }) {
  if (!parliamentNum || parliamentNum === "null") {
    return null;
  }
  const url = `https://www.parliament.lk/component/members/viewMember/${parliamentNum}/`;

  return (
    <GenericButtonLink
      url={url}
      Icon={AccountBalanceIcon}
      tooltipTitle={`member "${parliamentNum}" on Parliament.lk`}
    />
  );
}
