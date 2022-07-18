import Landing from "../Components/Home/landing"
import Shorten from "../Components/Home/linkShortner"
import CallToAction from "../Components/Home/callToAction"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Short Everything</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing/>
      <Shorten/>
      <CallToAction/>
    </div>
  )
}
