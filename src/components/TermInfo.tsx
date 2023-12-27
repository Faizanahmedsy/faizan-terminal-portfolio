import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    //THIS IS THE TERMINAL PATH NAME
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.faizan.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
