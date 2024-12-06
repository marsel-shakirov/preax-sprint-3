import { Container } from '@/shared/ui/';

import { CounterProvider } from './provider/CounterProvider';

import { Card } from '@/pages/card';
import { WelcomeContent } from '@/pages/welcome';
import { Content } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { PageProvider } from './provider/PageProvider';

import './App.css';

function App() {
	console.log('render 1');

	return (
		<PageProvider>
			<CounterProvider>
				<Container>
					<Header />
					<Content Card={Card} WelcomeContent={WelcomeContent} />
					<Footer />
				</Container>
			</CounterProvider>
		</PageProvider>
	);
}

export default App;
