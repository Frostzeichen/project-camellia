# About Project Camellia
This is a modernization of an old project I built in 2022 using the following stack:

- PugJS
- Node + Express
- FaunaDB

Because Fauna is a paid service (and I haven't paid them a dime yet), my old project doesn't run anymore. The goal for this new project is to revive my old project while adding in newer features that make this even better while remaining faithful to the original design.

## Phases
**Project Camellia is currently in Phase 0 (Planning Phase).**. The following shows how each phase in the project works.

### Phase 0 (Planning Phase)
Planning phase is for mapping out the goals of the project and steps on how to tackle them. While the plans and methods can still change over time, the core concepts and goals will remain the same. The outputs of the planning phase forms the foundational backbone for the whole project.

### Phase 1 (Goal: Camellia Article Writer 1.0.0)
The goal of phase 1 is to create a modernized system that is the most faithful to the original design. It uses the following stack:

- EJS (to replace PugJS)
- Node + Express
- PostgreSQL (to replace FaunaDB)
- Docker (for managing services)

This phase does not include a proper deployment protocol. I only plan to use this for demonstration purposes.

### Phase 2 (Goal: Camellia Article Writer 2.0.0)
The second phase is for adding a proper frontend in the system. Switching from template-based SSR to any of the modern frontend frameworks (Svelte, React, Next, etc.) **WILL** result in breaking changes because of the way the backend manages content.

This phase will include the following stack:

- SvelteKit (to replace EJS)
- Node + Express
- PostgreSQL
- Docker
- Raspberry Pi (for deployment practice)

It will also include the following features:

- Server caching (to reduce database calls)
- Integration with the Botanical Database for the Encyclopedia of Philippine Plants API

### OPTIONAL Phase 3 (Goal: Proper Deployment)
Lastly, the goal for phase 3 is to run the system in the open web as a proper website. This is an optional phase which will have to wait until I can properly populate my database with real content.

I don't even want to think about the goals for this phase yet. The important part is that I stated my plans to deploy this online and that's it. I wouldn't want to spend any money on this if I could help it though.
