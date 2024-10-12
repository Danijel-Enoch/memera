interface ExamResult {
	examType: string;
	score: number;
	totalQuestions: number;
	date: string;
}

export const saveExamResult = (result: ExamResult) => {
	const results = getExamResults();
	results.push(result);
	localStorage.setItem("examResults", JSON.stringify(results));
};

export const getExamResults = (): ExamResult[] => {
	const results = localStorage.getItem("examResults");
	return results ? JSON.parse(results) : [];
};

export const saveProgress = (courseName: string, sectionIndex: number) => {
	const progress = getProgress();
	progress[courseName] = sectionIndex;
	localStorage.setItem("courseProgress", JSON.stringify(progress));
};

export const getProgress = (): Record<string, number> => {
	const progress = localStorage.getItem("courseProgress");
	return progress ? JSON.parse(progress) : {};
};
