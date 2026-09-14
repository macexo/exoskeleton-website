import Link from "next/link";
import { ArrowRight } from "@/components/ui/Button";
import { TEAM_ROLES } from "@/data/teamRoles";
import { getSubteam } from "@/data/subteams";

type Division = keyof typeof TEAM_ROLES;

export default function DesignTeamLinks({ divisions }: { divisions: Division[] }) {
  return (
    <div className="design-team-groups">
      <p className="eyebrow">Meet the builders / 2026–27</p>
      {divisions.map(division => (
        <nav key={division} className="design-team-links" aria-label={`${getSubteam(division)?.name} subteams`}>
          <div>
            <h3>{getSubteam(division)?.name}</h3>
            <p>{getSubteam(division)?.short}</p>
          </div>
          {TEAM_ROLES[division].map(role => (
            <Link key={role.id} href={`/design/${division}#${role.id}`}>
              <span>{role.name}</span><ArrowRight />
            </Link>
          ))}
        </nav>
      ))}
    </div>
  );
}
