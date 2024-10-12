import Exam from "../components/Exam";

const beginnerQuestions = [
	{
		id: 1,
		text: {
			en: "What is blockchain?",
			sw: "Blockchain ni nini?",
			es: "¿Qué es blockchain?",
			hi: "ब्लॉकचेन क्या है?"
		},
		options: {
			en: [
				"A type of cryptocurrency",
				"A decentralized digital ledger",
				"A centralized database",
				"A type of computer hardware"
			],
			sw: [
				"Aina ya sarafu ya kidijitali",
				"Kitabu cha dijitali kisicholazimika kuwa na kituo kimoja",
				"Hifadhidata iliyosambazwa",
				"Aina ya vifaa vya kompyuta"
			],
			es: [
				"Un tipo de criptomoneda",
				"Un libro de contabilidad digital descentralizado",
				"Una base de datos centralizada",
				"Un tipo de hardware de computadora"
			],
			hi: [
				"एक प्रकार की क्रिप्टोकरेंसी",
				"एक विकेन्द्रीकृत डिजिटल लेजर",
				"एक केंद्रीकृत डेटाबेस",
				"एक प्रकार का कंप्यूटर हार्डवेयर"
			]
		},
		correctAnswer: 1
	},
	{
		id: 2,
		text: {
			en: "Which of the following is NOT a key feature of blockchain?",
			sw: "Miongoni mwa yaliyo hapo juu, ni ipi si sifa kuu ya blockchain?",
			es: "¿Cuál de las siguientes no es una característica clave de blockchain?",
			hi: "मध्ये से कौन सा ब्लॉकचेन की मुख्य विशेषता नहीं है?"
		},
		options: {
			en: [
				"Decentralization",
				"Transparency",
				"Immutability",
				"Centralization"
			],
			sw: [
				"Uwiano wa kijamii",
				"Uwazi",
				"Uwiano wa kijamii",
				"Uwiano wa kijamii"
			],
			es: [
				"Descentralización",
				"Transparencia",
				"Inmutabilidad",
				"Centralización"
			],
			hi: ["विकेन्द्रीकरण", "पारदर्शिता", "अप्रवर्तनीयता", "केंद्रीकरण"]
		},
		correctAnswer: 3
	},
	{
		id: 3,
		text: {
			en: "What was the first cryptocurrency?",
			sw: "Kwanza cryptocurrency gani ilikuwa?",
			es: "¿Cuál fue la primera criptomoneda?",
			hi: "पहली क्रिप्टोकरेंसी क्या थी?"
		},
		options: {
			en: ["Ethereum", "Litecoin", "Bitcoin", "Dogecoin"],
			sw: ["Ethereum", "Litecoin", "Bitcoin", "Dogecoin"],
			es: ["Ethereum", "Litecoin", "Bitcoin", "Dogecoin"],
			hi: ["Ethereum", "Litecoin", "Bitcoin", "Dogecoin"]
		},
		correctAnswer: 2
	}
	// Add 17 more questions here following the same structure
	// ...
];

export default function BeginnerExam() {
	return (
		<Exam
			title={{
				en: "Beginner's Blockchain Quiz",
				sw: "Mtihani wa Blockchain kwa Wanaoanza",
				es: "Cuestionario de Blockchain para Principiantes",
				hi: "शुरुआती ब्लॉकचेन प्रश्नोत्तरी"
			}}
			questions={beginnerQuestions}
			examType="beginner"
		/>
	);
}
