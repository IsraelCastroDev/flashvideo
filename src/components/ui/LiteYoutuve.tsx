import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Video } from "@/types";

interface Props {
  id: Video["key"];
  title: Video["name"];
}

function LiteYoutuve({ id, title }: Props) {
  return (
    <div>
      <LiteYouTubeEmbed id={id} title={title} />
    </div>
  );
}
export default LiteYoutuve;
