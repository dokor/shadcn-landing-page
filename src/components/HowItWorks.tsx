import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Trouvez vos festivals",
    description:
      "Trouvez rapidement des festivals par thème, artiste ou localisation grâce à notre moteur de recherche avancé.",
  },
  {
    icon: <MapIcon />,
    title: "Ajustez les détails",
    description:
      "Consultez les dates, les artistes présents et les informations pratiques pour chaque événement et évitez les chevauchements de dates.",
  },
  {
    icon: <PlaneIcon />,
    title: "Visualisez votre emploi du temps",
    description:
      "Tous vos festivals préférés dans un seul agenda, pour avoir une vue d’ensemble sur votre année.",
  },
  {
    icon: <GiftIcon />,
    title: "Partagez avec vos amis",
    description:
      "Partagez votre sélection sur les réseaux sociaux ou envoyez-les à vos amis pour les inviter à se joindre à la fête.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Comment ça fonctionne ?{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
           Etape par étape {" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Organisez facilement votre année de festival en quelques étapes simples.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
