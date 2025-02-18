import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Recherche Avancée",
    description:
      "Trouvez rapidement les festivals qui correspondent à vos goûts musicaux, à votre localisation et à votre budget grâce à nos filtres et suggestions personnalisées.",
    icon: <ChartIcon />,
  },
  {
    title: "Agenda Intelligent",
    description:
      "Organisez vos sorties sur un calendrier interactif. Recevez des alertes en cas de chevauchement de dates et ne manquez plus aucun événement.",
    icon: <WalletIcon />,
  },
  {
    title: "Partage et Collaboration",
    description:
      "Partagez votre emploi du temps avec vos amis et sur les réseaux sociaux, ou invitez directement vos proches à se joindre à vous pour un festival.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Notifications de billetterie",
    description:
      "Recevez des alertes dès l’ouverture des ventes de billets ou lorsque les pass sont sur le point d’être épuisés.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Suivi de Budget",
    description:
      "Calculez en temps réel le coût total de vos festivals (billets, hébergement, etc.) pour mieux gérer vos dépenses.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Mode Communautaire",
    description:
      "Partagez vos retours d’expérience, lisez les avis d’autres festivaliers et découvrez de nouveaux événements grâce à la communauté.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Personnalisation Avancée",
    description:
      "Créez des listes de festivals « coups de cœur », recevez des recommandations basées sur vos préférences et configurez des alertes spécifiques.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Fonctionnalités{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              clés
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Découvrez comment Planifestival vous aide à organiser et vivre pleinement vos festivals tout au long de l’année.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
