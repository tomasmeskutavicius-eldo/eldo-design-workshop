import { GameRegionSelector } from "./GameRegionSelector";
import "./Main.css";

export function Main() {
  return (
    <main>
      <GameRegionSelector
        defaultValue="EU"
        onChange={(region) => console.log(region)}
      />
    </main>
  );
}
