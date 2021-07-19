import Layout from "../components/Layout"
import Head from 'next/head'

function about() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content = "This is the thing that I want" />
                <meta name="keywords" content = "" />
                <meta name="author" content = "" />
                
            </Head>
            <div className="container">
                <h1 className="text-center">About Us</h1>
                <p>Charles specializes in Litigation, primarily in civil litigation, succession law, criminal law, family law and land matters. This involves providing clients with practical advice on all types of issues in Law be it in the notoriously touchy area of succession, probate and administration, family relations or land acquisition and transfer. Charles believes that the Law as a social science is meant to work for the citizenry and that’s why he specifically enjoys litigation in Court so as to better articulate his clients’ wishes and expectations.</p>
                <p>Dedication to excellent client service is clearly visible in Charles’ daily routine. He encourages an open door policy where clients are free to consult, seek advice and share information with him at any time keeping his lines open to clients and colleagues alike. Charles makes a concerted effort to keep clients abreast with developments in Law and how these could affect their day to day lives and businesses.</p>
                <p>He plays a pivotal role in the Litigation department of the Firm besides focusing on Alternative Dispute Resolution Mechanisms Practice at The Firm. He is a Certified Court Annexed Professional Mediator, an Associate of The Chartered Institute of Arbitrators (UK), An Advocate of The High Court of Kenya and a member of The Law Society of Kenya. Charles holds a Bachelors of Laws Degree from The University of Nairobi and a Diploma in Legal Studies from The Kenya School of Law.</p>
            </div>
        </Layout>
    )
}

export default about
