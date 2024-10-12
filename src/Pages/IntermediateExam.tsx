import Exam from "../components/Exam";

const intermediateQuestions = [
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
			sw: "Kati gani ngapi ni kichwa cha blockchain?",
			es: "¿Cuál de las siguientes NO es una característica clave de blockchain?",
			hi: "कौन सा निम्नलिखित ब्लॉकचेन का एक मुख्य लक्षण नहीं है?"
		},
		options: {
			en: [
				"Decentralization",
				"Transparency",
				"Immutability",
				"Centralization"
			],
			sw: ["Kutengeneza", "Kuonekana", "Kuwekwa", "Kuwasambazwa"],
			es: [
				"Descentralización",
				"Transparencia",
				"Immutabilidad",
				"Centralización"
			],
			hi: ["विकेन्द्रीकरण", "संवेदनशीलता", "अपरिवर्तनीयता", "केंद्रीकरण"]
		},
		correctAnswer: 3
	},
	{
		id: 3,
		text: {
			en: "What was the first cryptocurrency?",
			sw: "Nini kwanza kituo cha kidijitali?",
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
	// Define intermediate-level questions here
];

export default function IntermediateExam() {
	return (
		<Exam
			title={{
				en: "Intermediate Blockchain Quiz",
				sw: "Mtihani wa Kati wa Blockchain",
				es: "Examen Intermedio de Blockchain",
				hi: "मध्यवर्ती ब्लॉकचेन परीक्षा"
			}}
			questions={intermediateQuestions}
			examType={""}
		/>
	);
}
