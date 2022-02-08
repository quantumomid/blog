import Head from "next/head";

const CustomHead = ({ title, descriptionMetaContent, children }) => (
    <Head>
        <title>{ title }</title>
        <meta name="description" content={descriptionMetaContent} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        { children }
    </Head>
)

CustomHead.defaultProps = {
    title: "Omiblog",
    descriptionMetaContent: "Some of the thoughts of a young software engineer, Omid."
}

export default CustomHead;