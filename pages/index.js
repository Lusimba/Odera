import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
// import { Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout className="">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get legal representation in civil litigation, succession law, criminal law, family law and land matters</title>
        <meta name="Description" content="Odhiambo Odera & Associates Advocates specializes in Litigation, primarily in civil litigation, succession law, criminal law, family law and land matters. This involves providing clients with practical advice on all types of issues in Law be it in the notoriously touchy area of succession, probate and administration, family relations or land acquisition and transfer. Charles believes that the Law as a social science is meant to work for the citizenry and that’s why he specifically enjoys litigation in Court so as to better articulate his clients’ wishes and expectations." />
        <meta name="Keywords" content="civil litigation, succession law, criminal law, family law and land matters" />
      </Head>

      <main className="">
        <div className="row bg-img">
          <div className="col-sm-10 col-md-6 col-lg-6 col-xl-6">
            <div className="row justify-content-center box-margin">
              <div className="col-9 home-pad text-center py-3">
                <h1><strong className="renogare">ODHIAMBO ODERA</strong></h1>
                <h2>& Associates Advocates</h2>
                <h3>Your Reliable Partner in Law</h3>
                <div className="d-flex justify-content-center">
                  <Link href="https://api.whatsapp.com/send?phone=254706722744&text=I%20would%20like%20to%20..." passHref="true">
                    <p className="button-cta"><i className="green fab fa-whatsapp"></i> Contact Us</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="empty col-sm-10 col-md-6 col-lg-6 col-xl-6" style={{visibility:'hidden'}}>
            Side two
          </div>
        </div>
        
        
        <div className="row py-3 justify-content-center">
          <h1 className="text-center"><strong>Our Services</strong></h1>
          
          <div className="col-8">
            <div className="row">
              <div className="card m-2" style={{width: "18rem"}}>
                <Image className="card-img-top" className="mt-2" src="/static/images/civil.jpeg" alt="civil litigation" />
                <div className="card-body">
                  <h5 className="card-title text-center">Civil Litigation</h5>
                </div>
              </div>
              <div className="card m-2" style={{width: "18rem"}}>
                <Image className="card-img-top" className="mt-2" src="/static/images/succession.jpeg" alt="succession law" />
                <div className="card-body">
                  <h5 className="card-title text-center">Succession Law</h5>
                </div>
              </div>
              <div className="card m-2" style={{width: "18rem"}}>
                <Image className="card-img-top" className="mt-2" src="/static/images/employment.jpeg" alt="employment" />
                <div className="card-body">
                  <h5 className="card-title text-center">Employment</h5>
                </div>
              </div>
              <div className="card m-2" style={{width: "18rem"}}>
                <Image className="card-img-top" className="mt-2" src="/static/images/criminal.jpeg" alt="criminal law" />
                <div className="card-body">
                  <h5 className="card-title text-center">Criminal Law</h5>
                </div>
              </div>
              <div className="card m-2" style={{width: "18rem"}}>
                <Image className="card-img-top" className="mt-2" src="/static/images/family.jpeg" alt="family law" />
                <div className="card-body">
                  <h5 className="card-title text-center">Family Law</h5>
                </div>
              </div>
              <div className="card m-2" style={{width: "18rem"}}>
                <Image className="card-img-top" className="mt-2" src="/static/images/land.jpeg" alt="land matters" />
                <div className="card-body">
                  <h5 className="card-title text-center">Land Matters</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
