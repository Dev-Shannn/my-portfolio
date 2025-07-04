import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
	{
		name: "Bharat Tax File",
		year: "may 2025",
		align: "middle",
		image: "/images/p1.png",
		link: "https://www.bharattaxfile.com/",
	},
];

const ProjectsMain = () => {
	return (
		<div id="projects" className="max-w-[1200px] mx-auto px-4">
			<motion.div
				variants={fadeIn("top", 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.7 }}
			>
				<ProjectsText />
			</motion.div>
			<div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
				<SingleProject
					name={projects[0].name}
					year={projects[0].year}
					align={projects[0].align}
					image={projects[0].image}
				/>
			</div>
		</div>
	);
};

export default ProjectsMain;
