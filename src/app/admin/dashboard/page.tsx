import { getProjects } from "@/lib/actions";
import ProjectsList from "@/components/admin/ProjectsList";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const projects = await getProjects();
  
  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Projects</CardTitle>
            <CardDescription>
                Add, edit, or delete your portfolio projects here.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ProjectsList initialProjects={projects} />
        </CardContent>
    </Card>
  );
}
