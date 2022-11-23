import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";

import Dial from "../components/Dial.tsx";
import Message from "../components/Message.tsx";

interface Data {
    correct: boolean;
    dirty: boolean;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    let correct = false;
    let dirty = false;
    const url = new URL(req.url);

    // TODO: get the correct answer from a CMS?
    const answer = {
        knob_1: "H",
        knob_2: "B",
        knob_3: "G",
        knob_4: "D"
    };

    const knobs = {
        knob_1: url.searchParams.get("knob_1"),
        knob_2: url.searchParams.get("knob_2"),
        knob_3: url.searchParams.get("knob_3"),
        knob_4: url.searchParams.get("knob_4"),
    };

    if (knobs.knob_1 === answer.knob_1 && 
        knobs.knob_2 === answer.knob_2 &&
        knobs.knob_3 === answer.knob_3 &&
        knobs.knob_4 === answer.knob_4) {
            correct = true;
        }

    if (knobs.knob_1 ||
        knobs.knob_2 ||
        knobs.knob_3 ||
        knobs.knob_4) {
            dirty = true;
        }

    return ctx.render({correct, dirty});
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { correct, dirty } = data;
  return (
    <main>
        <Head>
            <link type="text/css" rel="stylesheet" href="style.css" />
        </Head>
      <form>
        <div className="lock">
            <Dial name="knob_1" />
            <Dial name="knob_2" />
            <Dial name="knob_3" />
            <Dial name="knob_4" />
        </div>
        {!correct &&  
            (<button type="submit" class="submit-button">Vri om nøkkelen</button>)
        }

        <Message correct={correct} dirty={dirty} />

      </form>
      <script>
        /* Lykke til med inspiseringen! */
      </script>
    </main>
  );
}