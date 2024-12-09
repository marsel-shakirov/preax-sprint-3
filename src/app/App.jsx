import { CounterProvider } from './provider/CounterProvider';
import { PageProvider } from './provider/PageProvider';

import { Container } from '@/shared/ui/';

import { Card } from '@/pages/card';
import { ResultPage } from '@/pages/result';
import { WelcomePage } from '@/pages/welcome';
import { Content } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

function App() {
	return (
		<PageProvider>
			<CounterProvider>
				<Container>
					<Header />
					<Content
						WelcomePage={WelcomePage}
						Card={Card}
						ResultPage={ResultPage}
					/>
					<Footer />
				</Container>
			</CounterProvider>
		</PageProvider>
	);
}

export default App;
