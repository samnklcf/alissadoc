import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/Footer";
import Link from "next/link";
import withAuth from "@/components/hoc/withAuth";
import dynamic from 'next/dynamic';

const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((module) => module.PDFDownloadLink), {
  ssr: false, // Empêche l'importation côté serveur
});

const Sam = dynamic(() => import('../../components/Sam'), {
  ssr: false, // Empêche l'importation côté serveur
});

export default withAuth(function Marketing() {

  

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
        
        <div>
      <h1>Export en PDF</h1>
      
      <PDFDownloadLink document={<Sam />} fileName="exported-content.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Chargement...' : 'Télécharger le PDF'
        }
      </PDFDownloadLink>
    </div>

      </main>
      <Footer />
    </>
  );
});
