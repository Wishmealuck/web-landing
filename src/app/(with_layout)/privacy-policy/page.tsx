import DocsComponent from "@/components/layout/Docs";
import { policy } from "@/constants/data/policy";

export default function page() {
  return (
    <div>
      <DocsComponent data={policy} />
    </div>
  );
}
