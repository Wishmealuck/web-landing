import DocsComponent from "@/components/layout/Docs";
import { policy } from "../data/policy";

export default function page() {
  return (
    <div>
      <DocsComponent data={policy} />
    </div>
  );
}
