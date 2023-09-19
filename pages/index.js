import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DataMain } from "@/components/DataMain";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";
import LocalStorage from "localstorage";
import withAuth from "@/components/hoc/withAuth";
import Cookies from "js-cookie";

function Marketing() {
  const [data, SetData] = useState();
  const { user_name, user_token, user_refresh_token, cook } =
    useContext(DataMain);

  // let Document = [

  //   {
  //     titre: "Documents",
  //     description:
  //       "Vous ne savez quoi écrire dans votre demande d'ambauche? Ne vous en faites pas, je vais vous aider",
  //     lien: "documents",
  //     source: "bi bi-envelope",
  //     id: "E3YtytuytuU8II9",
  //     class: "bleuSombre"
  //   },
  //   {
  //     titre: "Corrections",
  //     description:
  //       "Moi Alissa IA, je suis une experte en redaction de lettre de motivation, donnez moi juste vos informations.",
  //     lien: "corrections",
  //     source: "bi bi-dash-circle",
  //     id: "E3YuiuyiuypU8II9",
  //     class: "rouge"
  //   },

  // ];
  let Document = [
    
    {
      titre: "Plainte",
      description: "Je vous aide à rédiger une plainte",
      lien: "plainte",
      source: "/assets/img/plainte.jpg",
      id: "E3YU8uytytuII9",
    },
    {
      titre: "Demande d'ambauche",
      description:
        "Ne stressez pas si vous ne savez pas quoi inclure dans Demande d'ambauche , je peux vous guider.",
      lien: "embauche",
      source: "/assets/img/demande.jpg",
      id: "E3YtytuytuU8II9",
    },
    {
      titre: "Lettre de motivation",
      description:
        "Donnez-moi vos informations et je vous aiderai à rédiger une lettre de motivation professionnelle. Je suis experte en ce domaine.",
      lien: "motivation",
      source: "/assets/img/motivation.png",
      id: "E3YuiuyiuypU8II9",
    },
   
  ];

  return (
    <>
      <Head>
        <title>Page d&apos;accueil</title>
        <meta
          name="google-site-verification"
          content="P88rIg5w7MT5BYG2eNSqwXhUKm6jnflLmqIqJLhL3xA"
        />
      </Head>

      <main id="main" className="main">
        
        
        {/* End Page Title */}
        <section className="section">
          <div className="row align-items-top">
            <div className="col-lg-12">
              <div className="">
                <div className="card-body">
                  <h5 className="card-title">
                    Bienvenue{" "}
                    <b className="bleu">
                      {user_name} {cook && cook} 😊
                    </b>{" "}
                    !
                  </h5>
                  
                  <br />

                  <div>
                    <div className="pagetitle">
                      <h1>Tous les services</h1>                     
                    </div>
                    <Link
                      type="button"
                      className="btn btn-outline-primary archive"
                      href={"/data/documents"}
                    >
                      Archive
                      <i className="bx bxs-file-archive m-1"></i>
                    </Link>
                    <br />
                    <br />
                    
                    {/* End Page Title */}
                    <section className="section">
                      <div className="row align-items-top">
                        {Document.map((elements) => {
                          return (
                            <div className="col-lg-4" key={elements.id}>
                              <div className="card">
                                <Image
                                  src={`${elements.source}`}
                                  className="card-img-top"
                                  alt={`${elements.source}`}
                                  width={200}
                                  height={200}
                                  layout="responsive"
                                  priority
                                />
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {elements.titre}
                                  </h5>
                                  <p className="card-text">
                                    {elements.description}
                                  </p>
                                  <p className="card-text">
                                    <Link
                                      href={`documents/${elements.lien}`}
                                      className="btn btn-primary"
                                    >
                                      Commencer <b>+</b>
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withAuth(Marketing);
