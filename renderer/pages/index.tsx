import { useEffect } from "react";
import Head from "next/head";

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
      <textarea></textarea>
    </>
  );
};

export default IndexPage;
