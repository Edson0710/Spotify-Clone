import { Play } from "./Player";

export function CardPlayButton({id}) {
  return (
    <div className="card-play-button rounded-full bg-green-500 p-4">
      <Play />
    </div>
  )
}