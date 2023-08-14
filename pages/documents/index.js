import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/Footer";
import Link from "next/link";
import withAuth from "@/components/hoc/withAuth";


export default withAuth(function Marketing() {
  let Document = [
      {
        titre: "Email marketing",
        description: "Je vous génère un email sur mésure par rapport aux informations données.",
        lien: "email",
        source: "/assets/img/mail.webp",
        id: "E3YU8II9",
  
      },
      {
        titre: "Plainte",
        description: "Je vous aide à rédiger une plainte",
        lien: "plainte",
        source: "/assets/img/plainte.jpg",
        id: "E3YU8uytytuII9",
  
      },
      {
        titre: "Demande d'ambauche",
        description: "Ne stressez pas si vous ne savez pas quoi inclure dans Demande d'ambauche , je peux vous guider.",
        lien: "embauche",
        source: "/assets/img/demande.jpg",
        id: "E3YtytuytuU8II9",
  
      },
      {
        titre: "Lettre de motivation",
        description: "Donnez-moi vos informations et je vous aiderai à rédiger une lettre de motivation professionnelle. Je suis experte en ce domaine.",
        lien: "motivation",
        source: "/assets/img/motivation.png",
        id: "E3YuiuyiuypU8II9",

  
      }
     ]

return (
  <>
    <Head>
      <title>Documents page</title>
    </Head>
    
    <main id="main" className="main">
        <div className="pagetitle">
          <h1>Documents</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">accueil</Link>
              </li>
              <li className="breadcrumb-item">Documents</li>
              
            </ol>
          </nav>
        </div>
        <Link type="button" className="btn btn-outline-primary archive" href={"/data/documents"}>
          Archive 
          <i className="bx bxs-file-archive m-1"></i>
        </Link>
        <br />
        <br />
        {/* End Page Title */}
        <section className="section">
          <div className="row align-items-top">
            
            
            
            {Document.map((elements)=>{
              return(
                <div className="col-lg-4" key={elements.id}>
             
              <div className="card">
                <Image
                   src={`${elements.source}`}
                   className="card-img-top"
                   alt={`${elements.source}`}
                   width={200}
                   height={200}
                   layout='responsive'
                   priority
                />
                <div className="card-body">
                  <h5 className="card-title">{elements.titre}</h5>
                  <p className="card-text">
                    {elements.description}
                  </p>
                  <p className="card-text">
                    
                      <Link href={`documents/${elements.lien}`} className="btn btn-primary">
                      Commencer <b>+</b>
                      </Link>
                      
                 
                  </p>
                </div>
              </div>
              
            </div>
              )
            })}
            
            
          </div>
        </section>
      </main>
    <Footer />
  </>
);
}) 
