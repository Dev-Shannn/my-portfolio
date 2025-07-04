import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
	{
		job: "full stack developer",
		company: "Bharattaxfile",
		date: "2025 - Present",
		responsibilities: [
			"Implementing reusable components.",
			"Participating in large scale application.",
			"Working on the performance of web applications.",
			"Generating new ideas for better user experience.",
			"making site seo friendly.",
		],
	},
];

const AllExperiences = () => {
	return (
		<div className="flex items-center justify-center">
			<SingleExperience experience={experiences[0]} />
		</div>
	);
};

export default AllExperiences;
