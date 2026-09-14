import { getTeamRoles } from "@/data/teamRoles";

export default function TeamRoles({ division }: { division: string }) {
  const roles = getTeamRoles(division);
  if (!roles.length) return null;
  return (
    <div className="team-role-list">
      {roles.map((role, index) => (
        <article className="team-role" id={role.id} key={role.id}>
          <div className="team-role-overview">
            <span className="eyebrow">0{index + 1} / General member</span>
            <h3>{role.name}</h3><p>{role.description}</p>
            <ul className="team-role-tools" aria-label={`${role.name} tools and skills`}>{role.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </div>
          <div className="team-role-responsibilities">
            <h4>What you’ll work on</h4>
            <ul>{role.responsibilities.map(item => <li key={item.title}><strong>{item.title}</strong><p>{item.detail}</p></li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  );
}
