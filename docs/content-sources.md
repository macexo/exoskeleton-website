# Website content sources

Updated 2026-09-12. The website presents the club’s engineering at a public overview level. It is not an implementation guide or a specification for the next suit.

## Technical source and scope

The technical overview is grounded in the team-supplied 2025 documentation, `MacExo_V1_Documentation_2025.docx`:

| Website content | Source sections | Public scope |
| --- | --- | --- |
| Onboard electronics, motion sensing and powered joints | 2.1 Components; 2.2 System Overview | Functions and physical interfaces |
| Movement prediction and motor control | 3.1 Stack; 3.2 Overall Implementation | A conceptual explanation of the software’s contribution |
| Waist, hip, knee and ankle interfaces | 4 Mechanical, subsections 5.1–5.4 | Visible features and engineering considerations |
| Pilot protection | Electrical, software and mechanical sections | Broad protection categories; no safety or performance guarantees |

The suit photograph is captioned as the 2025 competition suit. Version labels have been removed from the public copy. The overview does not claim that this photographed implementation is the latest hardware configuration.

Exact component identifiers, electrical ratings, wiring protocols, controller timing, model input configuration and tuning parameters have been removed from the website data and copy. No dimensions, schematics, source code or technical source documents are offered as downloads. Conflicting component descriptions and controller values without physical units are not turned into specifications.

## Current team and recruiting source

The team supplied the 2026/27 application descriptions and confirmed three engineering divisions, each containing two subteams:

- Mechanical: Waist; Linkages.
- Electrical: Power Architecture; Actuation & Sensing.
- Software: Embedded & Controls; AI & Machine Learning.

Responsibilities, tools and expectations are centralised in `data/teamRoles.ts`. They describe current member work, not an inventory of deployed features. Recruitment tools such as C/C++, STM32, Python, ROS / ROS 2, CAN, PyTorch and TensorFlow remain because the team supplied them for prospective members.

Software applications are competitive and consider curiosity, projects, relevant skills, problem solving and team fit. Power Architecture asks for electrical fundamentals, PCB-tool experience, assembly skills and electrical-safety knowledge. No blanket no-experience requirement, acceptance promise or training guarantee is added.

Current leads for the six specialist subteams were not supplied. Existing leadership records were retained without inventing people or assignments. Health and safety is described as work across the system, not a fourth engineering division in the current recruitment structure.

## Publication boundaries

The team explicitly instructed that the prospective design documentation remain internal. Its technical content, diagrams and original documents are not included in the website or repository. The original Word files remain outside the project.

Current technical descriptions exclude previously unsupported claims about sensing, lifting capability, wiring robustness and seasonal development practices. Competition results, sponsor information and existing names remain based on the original website and sponsorship material; the technical documentation is not treated as confirmation of rosters or competition results.

## Design reference

Reviewed [McMaster Formula Electric’s Design page](https://macformularacing.com/design) on 2026-09-12. It leads with an annotated vehicle image and offers subteam overviews, responsibilities, tools and photos in a popup. Its Firmware and Controls entry discusses broad functions and development tools. This informed the level and order of information here; no text, images, code or visual design were copied.
