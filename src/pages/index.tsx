import { NextPage } from "next";
import SafeEnvironment from "@/ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "@/ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "@/ui/components/data-display/UserInformation.tsx/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Akira"}
        picture={"https://github.com/CrismotinDev.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
};

export default Home;
