import { usePageContext } from '@/shared/hooks';
import { Card } from '@/widgets/card';
import { WelcomeContent } from '@/widgets/welcome';
export const QuizPage = () => {
	const { isStart } = usePageContext();

	console.log('render 2');
	return <main>{isStart ? <Card /> : <WelcomeContent />}</main>;
};

{
	/* Компоненты результатов нужно раскомментировать */
}

{
	/* <ResultContent result="result" /> */
}
{
	/* <ResultContent result="result-well" /> */
}
{
	/* <ResultContent result="result-fail" /> */
}
