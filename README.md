# QuizApp

name - Marsel
nickname - marsel-shakirov

Привет
Есть вопрос. В заданий есть такой таск...
Максимальное количество вопросов должно быть равным количеству вопросов в json-файле. При достижении максимального количества в каунтере кнопка «+» становится неактивной.
Но в фигме явно что на 20 кнопка уже не работает и тут противоречие (json на 30 вопросах)
https://disk.yandex.ru/i/l2_qo7hqHEtU1Q
p.s (я реализовал как по макету) можете заменит этот код

```javascript
<Button
	styled={{ classes: ['counter', 'increment'] }}
	onTriggerClick={() => dispatch({ type: 'increment' })}
	isDisabled={count >= 20}
	ariaLabel="Добавить вопросы"
/>
```

на этот, чтобы disable был по количеству вопросов

```javascript
import { quizQuestions } from '@/pages/card';

<Button
				styled={{ classes: ['counter', 'increment'] }}
				onTriggerClick={() => dispatch({ type: 'increment' })}
				isDisabled={count >= Object.keys(quizQuestions.countries).length)}
				ariaLabel="Добавить вопросы"
/>
```

p.s
В компоненте Content есть три страницы компонента Result
