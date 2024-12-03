import { Container } from '@/entities/container';
import { QuizPage } from '@/pages/quiz';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { CounterProvider } from './provider/CounterProvider';

import './App.css';
import { PageProvider } from './provider/PageProvider';

function App() {
	console.log('render 1');

	return (
		<PageProvider>
			<CounterProvider>
				<Container>
					<Header />
					<QuizPage />
					<Footer />
				</Container>
			</CounterProvider>
		</PageProvider>
	);
}

export default App;
