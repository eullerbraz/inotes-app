import { useEffect } from "react";
import Head from "next/head";
import Textarea from "../components/Textarea";

const IndexPage = () => {
  useEffect(() => {
    const onSayHiClick = () => {
      global.ipcRenderer.send("message", "hi from next");
    };

    onSayHiClick();
  }, []);

  return (
    <>
      <Head>
        <title>{"iNotes"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Textarea />
    </>
  );
};

export default IndexPage;
