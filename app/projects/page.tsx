import Link from 'next/link';
import { getProjects, getTool } from '@/lib/data';
import { Icon } from '@/components/icon';
import { ToolArt } from '@/components/tool-art';
export const metadata = {
  title: 'DIY projects'
};
export default function Projects() {
  return <div className="container page-section">
    <div className="page-heading">
      <span className="eyebrow">FROM “WHAT IF” TO “I MADE IT”</span>
      <h1>Small projects. Big satisfaction.</h1>
      <p>Start with an idea. Follow the steps. Borrow the tools you need.</p>
    </div>
    <div className="notice"><Icon name="leaf" />Beginner-friendly inspiration. Follow tool manuals, use suitable protective equipment, and ask for help when you need it.</div>
    <div className="projects-grid">{getProjects().map(project => <article className="project-card" key={project.id}>
        <div className={`project-art project-${project.id}`}>
          <ToolArt kind={getTool(project.toolIds[0])!.kind} />
          <span className="project-level">Beginner friendly</span>
        </div>
        <div className="project-content">
          <div className="project-meta">
            <span className="eyebrow">{project.category}</span>
            <span>
              <Icon name="clock" size={15} />
              {project.time}
            </span>
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h3>Your toolbox</h3>
          <div className="required-tools">{project.toolIds.map(id => {
              const tool = getTool(id)!;
              return <Link key={id} href={`/tools/${id}`}>
              <Icon name="wrench" size={15} />
              <span>{tool.name}{!tool.available && <small>Currently on loan</small>}</span>
              <Icon name="arrow" size={15} />
            </Link>;
            })}</div>
          <details>
            <summary>See the project steps <span aria-hidden="true">+</span></summary>
            <ol className="project-steps">{project.steps.map(step => <li key={step}>{step}</li>)}</ol>
            <p className="demo-caption">Materials and protective equipment are separate from the listed tools.</p>
          </details>
          <div className="tutorial-placeholder">
            <Icon name="play" size={24} />
            <div>
              <strong>YouTube tutorial</strong>
              <span>Placeholder · A verified tutorial will be added here.</span>
            </div>
          </div>
        </div>
      </article>)}</div>
  </div>;
}
