import { useRouter } from "next/router";
import ProjectDescription from "@/app/components/ProjectDescription";

const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  if (!projectId) {
    return <p>Not found :(</p>;
  }

  return <ProjectDescription projectId={projectId} />;
};

export default ProjectPage;
