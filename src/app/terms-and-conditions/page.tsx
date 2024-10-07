import DocsComponent from "@/components/layout/Docs";
import { terms } from "../../constants/data/terms";

export default function page() {
  return (
    <div >
      <DocsComponent data={terms} />
    </div>
  );
}
