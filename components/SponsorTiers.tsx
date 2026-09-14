import { TIERS, TIER_BENEFITS } from "@/data/sponsorship";

export default function SponsorTiers() {
  return <>
    <div className="tier-overview">{TIERS.map((tier,i)=><article key={tier.id} className={`tier-summary tier-summary--${tier.id}`}><span className="eyebrow">0{i+1} / {tier.name}</span><h3>{tier.amount}</h3><p>{tier.blurb}</p><a href="#partner-contact" className="home-text-link">Discuss {tier.name.toLowerCase()} sponsorship <span aria-hidden="true">↗</span></a></article>)}</div>
    <div className="tier-table-wrap"><table className="tier-table"><caption>Compare sponsorship benefits</caption><thead><tr><th scope="col">Your support, recognised</th>{TIERS.map(tier=><th scope="col" key={tier.id}>{tier.name}</th>)}</tr></thead><tbody>{TIER_BENEFITS.map(benefit=><tr key={benefit.label}><th scope="row">{benefit.label}</th>{TIERS.map(tier=><td key={tier.id} className={tier.id==="gold" ? "gold-benefit" : ""}>{typeof benefit[tier.id]==="boolean" ? <span aria-label={benefit[tier.id] ? "Included" : "Not included"}>{benefit[tier.id] ? "✓" : "—"}</span> : benefit[tier.id]}</td>)}</tr>)}</tbody></table></div>
    <div className="tier-mobile-benefits">{TIERS.map(tier=><details key={tier.id}><summary>{tier.name} benefits <span aria-hidden="true">+</span></summary><dl>{TIER_BENEFITS.map(benefit=><div key={benefit.label}><dt>{benefit.label}</dt><dd>{typeof benefit[tier.id]==="boolean" ? benefit[tier.id] ? "Included" : "Not included" : benefit[tier.id]}</dd></div>)}</dl></details>)}</div>
  </>;
}
