import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

import civil from '../images/civil.jpeg'
import succession from '../images/succession.jpeg'
import employment from '../images/employment.jpeg'
import criminal from '../images/criminal.jpeg'
import family from '../images/family.jpeg'
import land from '../images/land.jpeg'


const services = [
  {
      'id':'1',
      'service_name':'Civil Litigation',
      'img_url':civil,
      'alt':'Civil Litigation',
  },
  {
      'id':'2',
      'service_name':'Succession Law',
      'img_url':succession,
      'alt':'Succession Law',
  },
  {
      'id':'3',
      'service_name':'Employment',
      'img_url':employment,
      'alt':'Employment',
  },
  {
      'id':'4',
      'service_name':'Criminal Law',
      'img_url':criminal,
      'alt':'Criminal Law',
  },
  {
      'id':'5',
      'service_name':'Family Law',
      'img_url':family,
      'alt':'Family Law',
  },
  {
      'id':'6',
      'service_name':'Land Matters',
      'img_url':land,
      'alt':'Land Matters',
  },
]


export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get legal representation in civil litigation, succession law, criminal law, family law and land matters</title>
        <meta name="Description" content="Odhiambo Odera & Associates Advocates specializes in Litigation, primarily in civil litigation, succession law, criminal law, family law and land matters. This involves providing clients with practical advice on all types of issues in Law be it in the notoriously touchy area of succession, probate and administration, family relations or land acquisition and transfer. Charles believes that the Law as a social science is meant to work for the citizenry and that’s why he specifically enjoys litigation in Court so as to better articulate his clients’ wishes and expectations." />
        <meta name="Keywords" content="civil litigation, succession law, criminal law, family law and land matters" />
      </Head>

      <main>
        <div className="row pt-0 bg-img">
          <div className="col-sm-10 col-md-6 col-lg-6 col-xl-6">
            <div className="row justify-content-center box-margin">
              <div className="col-9 home-pad text-center py-3">
                <h1><strong className="renogare">ODHIAMBO ODERA</strong></h1>
                <h2>& Associates Advocates</h2>
                <h3>Your Reliable Partner in Law</h3>
                <div className="d-flex justify-content-center">
                  <Link href="https://api.whatsapp.com/send?phone=254706722744&text=I%20would%20like%20to%20..." passHref={true}>
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
          
          <div className="col-sm-8 col-md-9 col-lg-9 col-xl-7">
            <div className="row">
              {services.map(service=>(
                <div key={service.id} className="card m-2 pt-2" style={{width: "18rem"}}>
                  <Image className="card-img-top`" height="200rem" width="300rem"
                    src={service.img_url} 
                    alt={service.alt} 
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{service.service_name}</h5>
                  </div>
                </div>
              ))}
              
              
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
