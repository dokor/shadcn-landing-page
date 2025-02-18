import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
    // TODO : Faire le fonctionnel pour enregistré les emails.
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Rejoignez{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            PlaniFestival
          </span>
          {" "}en avant-première
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Inscrivez-vous dès maintenant pour accéder en exclusivité à notre plateforme et ne rien manquer des futurs lancements.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
          // TODO : faire de la validation d'email
          // TODO : ajouter captcha
        >
          <Input
            placeholder="Votre adresse e-mail"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Je m’inscris</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
