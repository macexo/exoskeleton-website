# Website content sources

Updated 2026-09-14. The website presents the club’s engineering at a public overview level. It is not an implementation guide or a specification for the next suit.

## Technical source and scope

The technical overview is grounded in the team-supplied 2025 documentation, `MacExo_V1_Documentation_2025.docx`:

| Website content | Source sections | Public scope |
| --- | --- | --- |
| Onboard electronics, motion sensing and powered joints | 2.1 Components; 2.2 System Overview | Functions and physical interfaces |
| Movement prediction and motor control | 3.1 Stack; 3.2 Overall Implementation | A conceptual explanation of the software’s contribution |
| Waist, hip, knee and ankle interfaces | 4 Mechanical, subsections 5.1–5.4 | Visible features and engineering considerations |
| Pilot protection | Electrical, software and mechanical sections | Broad protection categories; no safety or performance guarantees |

The Design page uses a team-supplied photograph with four selectable callouts for visible hardware areas and a short sensing → software → assistance flow. These are public system summaries, not a component-by-component technical annotation. Version labels are not used in the public copy. Dated competition photos elsewhere retain their own captions.

Exact component identifiers, electrical ratings, wiring protocols, controller timing, model input configuration and tuning parameters have been removed from the website data and copy. No dimensions, schematics, source code or technical source documents are offered as downloads. Conflicting component descriptions and controller values without physical units are not turned into specifications.

The three discipline pages share an interactive overview in section 2 without implying the same engineering process. Mechanical presents the waist, hip, knee and ankle/boot as connected design areas from sections 5.1–5.4. Electrical presents distribution and regulation, motion sensing, motor electronics and protection as parallel systems from sections 2.1–2.3. CAD and mechanical fabrication apply across Mechanical; circuit design, component selection, PCB layout, assembly and testing apply across Electrical. Software alone is presented as a sequence—sensing, prediction, control and actuation—based on the information path in sections 3.1–3.2. The presentation describes public functions and cross-discipline interfaces; it does not publish a wiring diagram, controller implementation or prospective architecture.

## Current team and recruiting source

The team supplied the 2026/27 application descriptions and confirmed three engineering divisions, each containing two subteams:

- Mechanical: Waist; Linkages.
- Electrical: Power Architecture; Actuation & Sensing.
- Software: Embedded & Controls; AI & Machine Learning.

Responsibilities, tools and expectations are centralised in `data/teamRoles.ts`. They describe current member work, not an inventory of deployed features. Recruitment tools such as C/C++, STM32, Python, ROS / ROS 2, CAN, PyTorch and TensorFlow remain because the team supplied them for prospective members.

The website uses a common recruiting tone across all three divisions. At the team’s request, the software-only competitiveness notice from the application form is omitted. Each specialist role has a short introduction, four groups of concrete responsibilities and relevant tools; grouping the supplied responsibilities does not add new duties. Power Architecture’s supplied electrical fundamentals, PCB-tool experience, assembly skills and electrical-safety expectations remain. No blanket no-experience requirement, acceptance promise or training guarantee is added.

Current leads for the six specialist subteams were not supplied. Existing leadership records were retained without inventing people or assignments. Health and safety is described as work across the system, not a fourth engineering division in the current recruitment structure.

## Publication boundaries

The team explicitly instructed that the prospective design documentation remain internal. Its technical content, diagrams and original documents are not included in the website or repository. The original Word files remain outside the project.

Current technical descriptions exclude previously unsupported claims about sensing, lifting capability, wiring robustness and seasonal development practices. Competition results, sponsor information and existing names remain based on the original website and sponsorship material; the technical documentation is not treated as confirmation of rosters or competition results.

## Interactive system photograph

The team supplied its `V5 PRODUCTION` folder and identified it as the previous year's build. The native SolidWorks assembly, components and pilot scans remain outside the website repository. A low-resolution assembly preview was used during the first layout iteration and has been removed from the public assets.

After reviewing the conceptual illustration, the user supplied a clearer leg photograph for the system explorer. The Design hero uses the existing 2025 workshop photo (`working_on_suit.JPG`) to introduce the students and integration work; the explorer uses `public/design/suit-leg.jpg` to show real team hardware. The attached PNG was converted locally to JPEG for web delivery without changing its content. Leader lines connect four named callouts to visible hardware areas on the uncropped photograph. Sensing and software appear in the system flow below because neither has a single visible location to annotate.

The selections in `data/suitParts.ts` show one short explanation at a time in a stable panel, with a link to the relevant discipline page. Detailed subteam responsibilities stay on those pages. The selections do not assert that today's subteams had the same names when the documented suit was built, and the system names are not a component inventory or a count of physical modules. No raw geometry, dimensions, wiring diagrams or prospective design details are offered as downloads.

## Design reference

Reviewed [McMaster Formula Electric’s Design page](https://macformularacing.com/design) on 2026-09-12. It leads with an annotated vehicle image and offers subteam overviews, responsibilities, tools and photos in a popup. Its Firmware and Controls entry discusses broad functions and development tools. This informed the level and order of information here; no text, images, code or visual design were copied.
