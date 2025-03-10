import { CounterProvider, PageProvider, ResultProvider } from './provider';

import { Container, Content } from '@/shared/ui';

import { CardPage, ResultPage, WelcomePage } from '@/pages';

import { Footer, Header } from '@/widgets';

function App() {
	return (
		<PageProvider>
			<CounterProvider>
				<ResultProvider>
					<Container>
						<Header />
						<Content
							WelcomePage={WelcomePage}
							CardPage={CardPage}
							ResultPage={ResultPage}
						/>
						<Footer />
					</Container>
				</ResultProvider>
			</CounterProvider>
		</PageProvider>
	);
}

export default App;
