import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Social Dashboard</title>
				<meta name='description' content='Mimic a social app' />
				<meta name="keywords" content="chat, social app, mui design" />
				<meta name="author" content="R.G" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        		<link rel='icon' href='/king.png' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
