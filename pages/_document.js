import Document, {Html, Head, Main, NextScript} from 'next/document'
import logo_text from '../logo/odera_words.png'
import favicon from '/static/favicon.ico'

class MyDocument extends Document {
    render(){
        return (
            <Html lang="en">
            <Head>
                <meta charet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Unbound Coders" />

                
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                {/* <link rel="stylesheet" href="../static/css/bootstrap.css" /> */}
                {/* <link rel="stylesheet" href="../static/css/index.css" /> */}
            </Head>
            <body>
                <Main />
            </body>
            <NextScript/>
            </Html>
        )
    }
}

export default MyDocument