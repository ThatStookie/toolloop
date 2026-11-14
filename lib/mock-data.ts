import type { Category, HistoryEntry, Project, Tool } from './types';
export const categories: {
  name: Category;
  icon: 'saw' | 'bolt' | 'wrench' | 'leaf';
  description: string;
}[] = [{
  name: 'Woodworking',
  icon: 'saw',
  description: 'From first cut to final finish'
}, {
  name: 'Electronics',
  icon: 'bolt',
  description: 'Bring your next idea to life'
}, {
  name: 'Home Repair',
  icon: 'wrench',
  description: 'Small fixes. Big difference.'
}, {
  name: 'Gardening',
  icon: 'leaf',
  description: 'A little help for greener spaces'
}];
export const tools: Tool[] = [{
  id: 'cordless-drill',
  name: 'Bosch cordless drill',
  category: 'Home Repair',
  kind: 'drill',
  price: 8,
  points: 80,
  owner: 'Lena Weber',
  initials: 'LW',
  available: true,
  color: '#dfe7df',
  description: 'A versatile 18V drill for assembling furniture, drilling into wood, and everyday repairs. Two speed settings and adjustable torque help you get a clean, controlled result. Not suitable for hammer drilling into concrete.',
  includes: ['18V drill and charged battery', 'Charger and carrying case', 'Wood drill bits and screwdriver bits']
}, {
  id: 'circular-saw',
  name: 'Makita circular saw',
  category: 'Woodworking',
  kind: 'saw',
  price: 12,
  points: 120,
  owner: 'Jonas Fischer',
  initials: 'JF',
  available: true,
  color: '#e8e4da',
  description: 'A corded circular saw for straight cuts in boards and sheet timber. Adjustable cutting depth and a guide fence make it useful for shelves and simple furniture. Wear eye and hearing protection and clamp your work securely.',
  includes: ['Circular saw with wood blade', 'Parallel guide', 'Blade key and carrying case']
}, {
  id: 'orbital-sander',
  name: 'Random orbital sander',
  category: 'Woodworking',
  kind: 'sander',
  price: 7,
  points: 70,
  owner: 'Mia Hoffmann',
  initials: 'MH',
  available: true,
  color: '#eee3d7',
  description: 'A compact 125mm sander for smoothing wooden surfaces and preparing furniture for a fresh finish. Use appropriate dust protection and connect dust extraction where possible.',
  includes: ['Orbital sander', 'Dust collection box', 'Assorted sanding discs']
}, {
  id: 'soldering-station',
  name: 'Soldering station',
  category: 'Electronics',
  kind: 'solder',
  price: 6,
  points: 60,
  owner: 'Alex Morgan',
  initials: 'AM',
  available: true,
  color: '#e0e6e9',
  description: 'An adjustable-temperature soldering station for low-voltage electronics kits. Work in a ventilated space, keep the hot iron in its stand, and use eye protection. Solder and project components are not included.',
  includes: ['Temperature-controlled iron', 'Stand and brass tip cleaner', 'Helping-hands holder']
}, {
  id: 'digital-multimeter',
  name: 'Digital multimeter',
  category: 'Electronics',
  kind: 'meter',
  price: 4,
  points: 40,
  owner: 'Alex Morgan',
  initials: 'AM',
  available: true,
  color: '#eee6cf',
  description: 'Check continuity, resistance, and DC voltage on battery-powered hobby circuits. This demo listing is intended for low-voltage electronics projects only, not household mains work.',
  includes: ['Digital multimeter', 'Red and black test leads', 'Quick reference guide']
}, {
  id: 'precision-pliers',
  name: 'Precision pliers set',
  category: 'Electronics',
  kind: 'pliers',
  price: 3,
  points: 30,
  owner: 'Noah Becker',
  initials: 'NB',
  available: false,
  color: '#e9dedc',
  description: 'Needle-nose pliers and side cutters for shaping wire and trimming component leads in hobby electronics. Not insulated for use on live electrical circuits.',
  includes: ['Needle-nose pliers', 'Side cutters', 'Storage pouch']
}, {
  id: 'socket-wrench',
  name: 'Socket & hex key set',
  category: 'Home Repair',
  kind: 'wrench',
  price: 5,
  points: 50,
  owner: 'Lena Weber',
  initials: 'LW',
  available: true,
  color: '#e5e2dc',
  description: 'A metric socket and hex key set for furniture assembly and basic bicycle adjustments. Consult your bicycle manufacturer’s torque specifications before tightening fasteners.',
  includes: ['Metric sockets and ratchet', 'Metric hex keys', 'Organised storage case']
}, {
  id: 'claw-hammer',
  name: 'Claw hammer',
  category: 'Home Repair',
  kind: 'hammer',
  price: 2,
  points: 20,
  owner: 'Jonas Fischer',
  initials: 'JF',
  available: true,
  color: '#e4e6dc',
  description: 'A balanced 450g claw hammer with a comfortable grip for driving and removing nails in everyday woodworking jobs. Wear eye protection and check for hidden services before fixing anything to a wall.',
  includes: ['450g claw hammer']
}, {
  id: 'step-ladder',
  name: 'Folding step ladder',
  category: 'Home Repair',
  kind: 'ladder',
  price: 5,
  points: 50,
  owner: 'Sara Klein',
  initials: 'SK',
  available: false,
  color: '#e0e6e9',
  description: 'A compact four-step ladder for indoor decorating and reaching high shelves. Set up on a firm, level surface and follow the manufacturer’s load and standing limits.',
  includes: ['Four-step folding ladder']
}, {
  id: 'hedge-shears',
  name: 'Garden hedge shears',
  category: 'Gardening',
  kind: 'shears',
  price: 4,
  points: 40,
  owner: 'Mia Hoffmann',
  initials: 'MH',
  available: true,
  color: '#e0e7d8',
  description: 'Manual hedge shears for shaping small hedges and trimming soft garden growth. Wear gloves and clean the blades before returning them.',
  includes: ['Manual hedge shears', 'Blade cover']
}, {
  id: 'garden-spade',
  name: 'Garden spade',
  category: 'Gardening',
  kind: 'spade',
  price: 3,
  points: 30,
  owner: 'Sara Klein',
  initials: 'SK',
  available: true,
  color: '#eae2d5',
  description: 'A sturdy steel spade with a wooden handle for planting and small garden beds. Check for buried cables or pipes before digging.',
  includes: ['Steel garden spade']
}, {
  id: 'pressure-washer',
  name: 'Compact pressure washer',
  category: 'Gardening',
  kind: 'washer',
  price: 15,
  points: 150,
  owner: 'Noah Becker',
  initials: 'NB',
  available: true,
  color: '#ebe7cf',
  description: 'A compact electric pressure washer for suitable outdoor patios and garden furniture. Requires an outdoor water supply and suitable electrical connection. Never point the jet at people, animals, or electrical equipment.',
  includes: ['Pressure washer', 'Hose and spray lance', 'Patio cleaning attachment']
}];
export const projects: Project[] = [{
  id: 'wooden-shelf',
  title: 'Build a wooden shelf',
  description: 'Give your books, plants, or favourite finds a home you made yourself.',
  time: '2–3 hours',
  category: 'Woodworking',
  toolIds: ['circular-saw', 'orbital-sander', 'cordless-drill'],
  steps: ['Measure your space and mark your shelf dimensions on a timber board. Gather brackets, suitable screws, eye protection, and a dust mask.', 'Clamp the board securely. Following the saw manual, cut along your marked line. Ask an experienced maker for help with your first cut.', 'Sand the edges and faces smooth, working with the grain. Remove dust before applying a finish suitable for your space.', 'Check the wall for hidden services and choose fixings suitable for its material and load. Measure and level the brackets, then attach the shelf.']
}, {
  id: 'electronics-kit',
  title: 'Solder a basic electronics kit',
  description: 'Turn a handful of components into your first working circuit.',
  time: '1–2 hours',
  category: 'Electronics',
  toolIds: ['soldering-station', 'digital-multimeter', 'precision-pliers'],
  steps: ['Choose a beginner battery-powered kit and read its instructions. Identify each component and its orientation before starting.', 'Set up eye protection, a heat-resistant work surface, and ventilation. Keep the iron in its stand and disconnect all power from the kit.', 'Fit components in the kit’s recommended order. Heat each joint briefly and apply a small amount of suitable solder; let it cool before trimming leads.', 'Inspect for solder bridges and test continuity with the multimeter while unpowered. Connect the recommended battery only after checking the kit instructions.']
}, {
  id: 'bicycle',
  title: 'Fix a bicycle',
  description: 'Get to know your bike with a simple saddle and accessory tune-up.',
  time: '45–60 minutes',
  category: 'Home Repair',
  toolIds: ['socket-wrench'],
  steps: ['Set the bike on a stable surface. Check the frame, tyres, and accessories visually; stop if you find cracks or damaged parts.', 'Note your current saddle position before adjusting it. Follow the bike manual’s height limits and torque specifications.', 'Use the correctly sized hex key to adjust loose non-critical accessories such as bottle cages. Avoid overtightening bolts.', 'Recheck your adjustments. Have brakes, steering, wheels, and any safety-critical repairs checked by a qualified bicycle mechanic before riding.']
}];
export const demoProfile = {
  name: 'Alex Morgan',
  initials: 'AM',
  bio: 'Student, weekend maker, and believer in sharing the good tools.',
  location: 'Magdeburg, Germany',
  credits: 240,
  ownedToolIds: ['soldering-station', 'digital-multimeter']
};
export const history: HistoryEntry[] = [{
  toolId: 'orbital-sander',
  activity: 'Borrowed',
  date: '2026-11-09',
  credits: -70
}, {
  toolId: 'soldering-station',
  activity: 'Lent',
  date: '2026-11-06',
  credits: 60
}, {
  toolId: 'digital-multimeter',
  activity: 'Lent',
  date: '2026-11-02',
  credits: 40
}];
