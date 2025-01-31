import { AtenaSSR } from "infinity-forge";
import { PreCadastro } from "@/presentation";

export default function PreCadastroPage() {
  return <PreCadastro />;
}

export const getServerSideProps = AtenaSSR;
