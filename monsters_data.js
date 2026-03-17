// D&D 5e Monster Database — compiled from SRD (5e CSV) and A5e supplemental CSV
// Note: Open5e API data was not available at compile time; full stat blocks from CSVs only
// Total: see bottom of file
// Generated: 2026-03-16

function parseCR(cr) {
  if (!cr || cr === '-' || cr === 'N/A' || cr === '' || cr === 'Varies') return null;
  cr = String(cr).trim();
  if (cr === '1/8') return 0.125;
  if (cr === '1/4') return 0.25;
  if (cr === '1/2') return 0.5;
  const n = parseFloat(cr);
  return isNaN(n) ? null : n;
}

function lore(name, type, cr, size) {
  type = (type || '').toLowerCase();
  size = (size || 'Medium').toLowerCase();
  cr = cr || 0;
  if (type.includes('dragon')) return `Among the most feared creatures in existence, the ${name} commands both terror and awe. Dragons are ancient beings of immense power whose very presence reshapes the world around them.`;
  if (type.includes('undead')) return `The ${name} is a creature of death and shadow, driven by an undying hunger or ancient curse. It haunts the living as a grim reminder that death is not always the end.`;
  if (type.includes('fiend') || type.includes('demon') || type.includes('devil')) return `A ${name} from the lower planes, this fiend seeks to corrupt, destroy, and drag souls into darkness. It embodies the malevolence of its infernal home.`;
  if (type.includes('celestial')) return `The ${name} is a being of divine radiance, serving the forces of good and order. Its presence brings hope to the righteous and terror to the wicked.`;
  if (type.includes('aberration')) return `The ${name} is a creature of alien geometry and wrongness, its mind utterly foreign to mortal comprehension. It exists at the edge of sanity and reality.`;
  if (type.includes('construct')) return `The ${name} is an animated creation, built or summoned to serve a purpose. It follows its programming with relentless, tireless efficiency.`;
  if (type.includes('fey')) return `The ${name} is a creature of the Feywild, beautiful and capricious in equal measure. Like all fey, it operates by its own inscrutable logic.`;
  if (type.includes('elemental')) return `The ${name} is a being of pure elemental force, a fragment of the primordial chaos given form. It is as much a natural phenomenon as a living creature.`;
  if (type.includes('giant')) return `The ${name} towers over lesser beings, a giant of great strength and endurance. Giants are ancient beings with their own complex societies and rivalries.`;
  if (type.includes('monstrosity')) return `The ${name} is a dangerous predator, warped by magic or evolution into a lethal hunting machine. Adventurers who underestimate it rarely live to share the tale.`;
  if (type.includes('ooze')) return `The ${name} is a mindless mass of corrosive matter, slowly consuming all organic material it encounters. It dissolves its prey with patient, inexorable hunger.`;
  if (type.includes('plant')) return `The ${name} is an animated plant creature, hostile to those who intrude on its territory. It thrives in the wild places where nature has grown dark and strange.`;
  if (type.includes('beast')) {
    if (cr <= 0.5) return `A ${size} ${name}, found in the wild. It is mostly harmless unless threatened or provoked.`;
    if (cr <= 2) return `The ${name} is a dangerous predator, capable of overwhelming unprepared travelers. It hunts to survive and defends its territory fiercely.`;
    return `A massive and terrifying beast, the ${name} is one of nature's most formidable predators. It strikes fear into even seasoned adventurers.`;
  }
  if (type.includes('humanoid')) return `The ${name} is an intelligent humanoid capable of organization, tactics, and ambition. Encounters can go many ways depending on circumstance and diplomacy.`;
  return `The ${name} is a creature of challenge rating ${cr}, posing a ${cr <= 1 ? 'minor' : cr <= 5 ? 'moderate' : cr <= 10 ? 'significant' : 'severe'} threat to adventurers who cross its path.`;
}

const MONSTERS = [
