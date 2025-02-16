import { CounterProvider } from './provider/CounterProvider';
import { PageProvider } from './provider/PageProvider';
import { ResultProvider } from './provider/ResultProvider';

import { Content } from '@/shared/ui';
import { Container } from '@/shared/ui/';

import { CardPage } from '@/pages/card';
import { ResultPage } from '@/pages/result';
import { WelcomePage } from '@/pages/welcome';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

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
