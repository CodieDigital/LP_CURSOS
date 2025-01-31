import { Lp } from "@/presentation";
import { AtenaSSR } from "infinity-forge";

export default function LpPage() {
  return <Lp />;
}

export const getServerSideProps = (ctx) => AtenaSSR(ctx, {});
