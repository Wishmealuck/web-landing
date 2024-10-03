import DocsComponent from "@/components/layout/Docs";
import { terms } from "../data/terms";

export default function page() {
  return (
    <div>
      <DocsComponent data={terms} />
    </div>
  );
}
